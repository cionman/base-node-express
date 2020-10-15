'use strict'

const express = require("express")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const path = require("path")
const session = require("express-session")
const MySQLStore = require('express-mysql-session')(session)
const flash = require("connect-flash")
const compression = require('compression')
const helmet = require("helmet")
const nunjucks = require("nunjucks")
const bodyParser = require("body-parser")
const db = require('./model')
const { graphqlHTTP } = require('express-graphql')
const http = require('http')
const csrf = require('csurf')
const mongoConnect = require('./schema')
const passport = require('passport')
const passportConfig = require('./common/passport')
const { configs } = require('./common/config');

class ApiServer extends http.Server {
  constructor() {
    const app = express()
    super(app)
    this.app = app
    this.currentConns = new Set()
    this.busy = new WeakSet()
    this.stopping = false
  }

  async start() {
    console.log(`현재 연결 수는 ${this.currentConns.size}`)
    // 연결 관리
    this.handleConnection()

    // db 접속
    this.dbConnection();

    //포트 설정
    this.setPort();

    // 뷰엔진 셋팅
    this.setViewEngine();

    // 미들웨어 셋팅
    this.setMiddleWare();

    // 정적 디렉토리 추가
    this.setStatic();

    // 로컬 변수
    this.setLocals();

    // 라우팅
    this.setRouting();

    // 에러처리(가장 아래에 있어야함)
    this.errorHandler();

    return this
  }


  shutdown() {
    console.log('서버 종료를 시작합니다.')
    if(this.stopping) return
    this.stopping = true
    this.close(() => {
      process.exit(0)
    })

    setTimeout(() => {
      console.error('비정상적인 종료(강제종료 합니다)')
      process.exit(1)
    }, configs.SHUTDOWN_TIME_OUT).unref()

    if(this.currentConns.size > 0) {
      console.log(`현재 동시접속중인 연결(${this.currentConns.size})을 대기중입니다.`)
      for(const con of this.currentConns){
        if(!this.busy.has(con)){
          console.log('비활성화 커넥션 종료합니다.')
          con.end()
        }
      }
    }
  }



  handleConnection(){
    this.app.use((req, res, next) => {
      this.busy.add(req.socket)
      res.on('finish', () => {
        if(this.stopping) req.socket.end()
        this.busy.delete(req.socket)
      })
      next()
    })

    this.on('connection', c => {
      this.currentConns.add(c)
      c.on('close', () => this.currentConns.delete(c))
    })
  }

  setPort() {
    this.app.set("port", configs.PORT || 8001); //포트 설정
  }

  dbConnection(){
    //mongodb connect
    mongoConnect()

    // DB authentication
    db.sequelize.authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
          //테이블 동기화
          // This will run .sync() only if database name ends with '_test'

          //return db.sequelize.sync({ alter: true, match: /_test$/ });
        })
        .then(() => {
          console.log('데이터베이스 연결 완료');
        })
        .catch(err => {
          console.error('데이터베이스 연결도중 에러 발생:', err);
        });
  }


  /* 미들웨어 */
  setMiddleWare() {
    this.app.set('json spaces', 2);// json 포맷
    this.app.use(compression({ filter: (req, res) => {
        if (req.headers['x-no-compression']) {
          return false
        }
        return compression.filter(req, res)
      }
    })); // gzip 압축 모듈
    this.app.use(helmet({
      contentSecurityPolicy: false,
    })); //보안 모듈
    if(configs.NODE_ENV === 'production'){
      this.app.use(morgan("combined")); //로깅
    }else{
      this.app.use(morgan("dev")); //로깅
    }
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser(configs.COOKIE_SECRET)); //쿠키
    this.app.use(
        session({
          //세션
          resave: false,
          saveUninitialized: false,
          secret: configs.COOKIE_SECRET,
          cookie: {
            httpOnly: true,
            secure: false,
          },
          store: new MySQLStore({
            host: configs.DB_HOST,
            port: 3306,
            user: configs.DB_USER,
            password: configs.DB_PASSWORD,
            database: configs.DATABASE,
            expiration: 8 * 60 * 60 * 1000
          }),
        })
    );
    this.app.use(flash());
    this.app.use('/graphql', graphqlHTTP({
      schema: require('./common/graphql/schema'),
      rootValue: require('./common/graphql/rootValue'),
      graphiql: true, //테스트 할 수 있는 gui가 생성된다.
    }));

    this.app.use(csrf({ cookie: true }))
    passportConfig()
    this.app.use(passport.initialize()) // express-session 미들웨어보다 뒤쪽에 만들어야 한다.
    this.app.use(passport.session())
  }

  setViewEngine() {
    nunjucks.configure("view/template", {
      autoescape: true,
      watch:true,
      express: this.app,
    });
  }

  setStatic() {
    this.app.use("/static", express.static("view/static"));
  }

  setLocals() {
    // 템플릿에 사용할 전역 변수
      this.app.use((req, res, next) => {
      this.app.locals.buildTime=Date.now()
      this.app.locals.csrfToken = req.csrfToken()
      this.app.locals.req_path = req.path;
      if(req.user){
        this.app.locals.loginUser = req.user
      }else{
        this.app.locals.loginUser = null
      }

      next();
    });
  }

  setRouting() {
    //헬스체크
    this.app.get('/_health', (req, res) => {
      res.sendStatus(200)
    })
    //컨트롤러
    this.app.use(require("./controller"));
  }

  errorHandler() {
    /* 에러 핸들러: 라우팅 설정 아래에 있어야 한다. 그래야 404 처리 가능*/
    this.app.use((req, res, _) => {
      res.status(404).render("error/404.html");
    });

    this.app.use((err, req, res, _) => {
      console.error('error :', err)
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};
      res.locals.status = err.status || 500;
      res.status(500).render("error/500.html");
    });
  }
}


const init = async () => {
  const server = new ApiServer()
  return await server.start()
}

module.exports = {
  init,
  ApiServer
}

'use strict'

const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const compression = require('compression');
const helmet = require("helmet");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const db = require('./models');
const { graphqlHTTP } = require('express-graphql');
const http = require('http')
require("dotenv").config();

class ApiServer extends http.Server {
  constructor(config) {
    const app = express()
    super(app)
    this.config = config
    this.app = app
    this.currentConns = new Set()
    this.busy = new WeakSet()
    this.stopping = false
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
    this.app.set("port", process.env.PORT || 8001); //포트 설정
  }

  dbConnection(){
    // DB authentication
    db.sequelize.authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
          //테이블 동기화
          // This will run .sync() only if database name ends with '_test'
          return db.sequelize.sync({ alter: true, match: /_test$/ });
        })
        .then(() => {
          console.log('DB Sync complete.');
        })
        .catch(err => {
          console.error('Unable to connect to the database:', err);
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
    this.app.use(morgan("dev")); //로깅
    this.app.use(express.static(path.join(__dirname, "static"))); //정적 리소스 설정
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser(process.env.COOKIE_SECRET)); //쿠키
    this.app.use(
        session({
          //세션
          resave: false,
          saveUninitialized: false,
          secret: process.env.COOKIE_SECRET,
          cookie: {
            httpOnly: true,
            secure: false,
          },
        })
    );
    this.app.use(flash());
    this.app.use('/graphql', graphqlHTTP({
      schema: require('./graphql/schema'),
      rootValue: require('./graphql/rootValue'),
      graphiql: true, //테스트 할 수 있는 gui가 생성된다.
    }));

  }

  setViewEngine() {
    nunjucks.configure("template", {
      autoescape: true,
      express: this.app,
    });
  }

  setStatic() {
    this.app.use("/static", express.static("static"));
  }

  setLocals() {
    // 템플릿에 사용할 전역 변수
    this.app.use((req, res, next) => {
      this.app.locals.isLogin = true; //TODO 로그인 여부 작업 필요
      this.app.locals.req_path = req.path;
      next();
    });
  }

  setRouting() {
    //헬스체크
    this.app.get('/_health', (req, res) => {
      res.sendStatus(200)
    })
    //컨트롤러
    this.app.use(require("./controllers"));
  }

  errorHandler() {
    /* 에러 핸들러: 라우팅 설정 아래에 있어야 한다. 그래야 404 처리 가능*/
    this.app.use((req, res, _) => {
      res.status(404).render("common/404.html");
    });

    this.app.use((err, req, res, _) => {
      console.error('error :', err)
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};
      res.locals.status = err.status || 500;
      res.status(500).render("common/500.html");
    });
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

    // 에러처리
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
    }, 30000).unref()

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


}


const init = async (config = {}) => {
  const server = new ApiServer(config)
  return await server.start()
}

module.exports = {
  init
}

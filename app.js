/* 모듈 import */
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

require("dotenv").config();

class App {
  constructor() {
    this.app = express();


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
}

module.exports = new App().app;

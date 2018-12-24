/* 모듈 import */
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const twig  = require('twig');
const helmet = require('helmet');
const app = express();
const sequelize = require('./src/models').sequelize;


require('dotenv').config();

/* 일반설정 */
app.set('views', path.join(__dirname, 'views')); //view 디렉토리 설정
app.set('view engine', 'twig'); // 템플릿 엔진 설정
app.set('port', process.env.PORT || 8001); //포트 설정

/* 미들웨어 */
app.use(helmet());  //보안 모듈
app.use(morgan("dev")); //로깅
app.use(express.static(path.join(__dirname,'static'))); //정적 리소스 설정
app.use(express.json()); //json
app.use(express.urlencoded({extended:false})); //일반 폼
app.use(cookieParser(process.env.COOKIE_SECRET)); //쿠키
app.use(session({  //세션
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie:{
    httpOnly:true,
    secure:false,
  }
}));
app.use(flash());

/* 라우터 영역 */
app.use('/', require('./src/controller/home').router);
app.use('/example', require('./src/controller/example').router)

/* 에러 핸들러: 라우팅 설정 아래에 있어야 한다. 그래야 404 처리 가능*/
app.use((req, res, next)=>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req,res)=>{
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.status(err.status || 500);
  res.render('error');
});


/* 서버 구동 */
app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 대기 중');
});

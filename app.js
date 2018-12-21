/* 모듈 import */
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const pageRouter  = require('./routes/routes');
const twig  = require('twig');

const app = express();
const sequelize = require('./models').sequelize;

require('dotenv').config();

/* 일반설정 */
app.set('views', path.join(__dirname, 'views')); //view 디렉토리 설정
app.set('view engine', 'twig'); // 템플릿 엔진 설정
app.set('port', process.env.PORT || 8001); //포트 설정

/* 미들웨어 */
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
app.use('/', pageRouter);

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

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 대기 중');
});

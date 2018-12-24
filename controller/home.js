/*모듈 import*/
const router = require('express').Router();

/*함수 정의*/
const home = (req, res) =>{
  res.render('index');
}

/* router 정의*/
router.get('/', home);

/* export*/
exports.router = router;
exports.home = home;
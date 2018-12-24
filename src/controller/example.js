/*모듈 import*/
const db = require('../models');
const router = require('express').Router();

/*함수 정의*/
const createUserView = (req, res) =>{
  res.render('createUserForm');
};

const createUser = (req, res) =>{
  console.log('request :' , req);
  console.log('request body:' , req.body);

  db.User.create({
    name : req.body.name,
    login_id : req.body.loginId,
    password : req.body.password,
  }).then((user) => {
      res.redirect("/example")
  });
}

/* router 정의*/
router.get('/', createUserView);
router.post('/createUser', createUser)


/*export*/
exports.router = router;
exports.createUserView = createUserView;
exports.createUser = createUser;

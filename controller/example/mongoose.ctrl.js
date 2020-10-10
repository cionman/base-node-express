'use strict'

const {Router} = require('express');
const router = Router();
const User = require('../../schema/user')
const Comment = require('../../schema/comment')
const { wrapAsync } = require('../../common/util/func');
const mongoose = require('mongoose')


router.get('/', wrapAsync(async (req, res) =>{
   const users = await User.find({})
   res.render('site/example/mongoose/mongoose.html', { users })
}))

router.route('/users').get(wrapAsync(async (req, res) => {
   const users = await User.find({});
   res.json(users)
})).post(wrapAsync(async (req, res) => {
   const user = await User.create({
      name: req.body.name,
      age: req.body.age,
      married: req.body.married,
   });
   console.log(user);
   res.status(201).json(user);
}))

router.get('/users/:id/comments', wrapAsync(async (req, res, next) => {
      const comments = await Comment.find({ commenter: req.params.id })
          .populate('commenter');
      console.log(comments);
      res.json(comments);
}));


router.post('/comments', async (req, res, next) => {
   try {
      const comment = await Comment.create({
         commenter: req.body.id,
         comment: req.body.comment,
      });
      console.log(comment);
      const result = await Comment.populate(comment, { path: 'commenter' });
      res.status(201).json(result);
   } catch (err) {
      console.error(err);
      next(err);
   }
});

router.route('/comments/:id')
    .patch(async (req, res, next) => {
       try {
          const result = await Comment.update({
             _id: req.params.id,
          }, {
             comment: req.body.comment,
          });
          res.json(result);
       } catch (err) {
          console.error(err);
          next(err);
       }
    })
    .delete(async (req, res, next) => {
       try {
          const result = await Comment.remove({ _id: req.params.id });
          res.json(result);
       } catch (err) {
          console.error(err);
          next(err);
       }
    });

router.get('/transaction/example', wrapAsync( async (req, res) => {
   /*
     현재 mongodb transaction은 replica 환경에서만 작동된다.
     로컬 환경에서 run-rs 패키지를 활용한 테스트 환경 구축이 가능하지만 알수 없는 오류로 동작하지 않는다.

      http://thecodebarbarian.com/introducing-run-rs-zero-config-mongodb-runner
      https://stackoverflow.com/questions/51461952/mongodb-v4-0-transaction-mongoerror-transaction-numbers-are-only-allowed-on-a/51462024
    */
   const session = await mongoose.startSession()
   await session.withTransaction(async() => {
      //await User.create([{ name: 'Test1', age: 9, married: false, phone: "222" }], { session: session })

      return await User.create([{ name: 'Test2', age: 10, married: false, phone: "111" }], { session: session })
   });

   session.endSession();
}))

module.exports = router;

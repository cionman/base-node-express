'use strict'

const {Router} = require('express');
const router = Router();
const User = require('../../schema/user')
const Comment = require('../../schema/comment')
const { wrapAsync } = require('../../common/util/func');


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

module.exports = router;

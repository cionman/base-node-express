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


router.get('/find', wrapAsync(async (req, res) => {
   const users = await User.find({})
   res.json(users);

}));

router.get('/find/query', wrapAsync(async (req, res) => {
   /*
   참조 : https://www.zerocho.com/category/MongoDB/post/59bd148b1474c800194b695a

   User.find()
        .where('name').equals('zerocho')
        .where('birth').gt(20)
        .where('role').in(['owner', 'admin'])
        .sort('-medals')
        .limit(5)
        .select('name birth medals')

     where
      어떤 필드를 조작할지 정하는 쿼리입니다. 뒤에 equals, ne, exists, gt, ... 등의 쿼리를 사용하면 됩니다.

      Users.find().where('name')

      exists
      필드 존재 여부를 쿼리합니다.

      Users.find().where('name').exists(true)
      Users.find().exists('name', true) // 위와 동일한 쿼리

      gt, lt, gte, lte
      각각 초과(gt), 미만(lt), 이상(gte), 이하(lte)입니다.

      Users.find().where('age').gt(20)
      Users.find().gt('age', 20);

      and, or, nor
      얘네들은 where를 사용하지 않습니다! 이점 주의하세요. and는 모든 조건을 만족하는지, or는 일부 조건을 만족하는지, nor는 모두 다 만족하지 않는지를 쿼리합니다.

      Users.find().all([{ name: 'zerocho' }, { age: 24 }]); // 이름이 zerocho고 나이가 24면
      Users.find().or([{ name: 'zerocho' }, { name: 'babo' }]); // 이름이 zerocho거나 babo면

      within, box, circle, geometry, near, intersects, maxDistance
      몽고DB는 위치 정보 쿼리 기능이 강력한 것으로 유명하죠. where로 위치 인덱스가 설정된 필드를 지정하고, box, circle 등의 쿼리를 사용합니다.

      Users.find().where('loc').within().box()
      Users.find().where('loc').within({ box: [[15, 30], [50, 60]] })
      Users.find().where('loc').near([50, 60]).maxDistance(30)
      distinct
      이 기능은 알아두시면 좋습니다. 지정한 필드의 값들에서 중복을 제거한 후 가져옵니다. 예를 들어 10명의 사람의 역할이 각각 user, user, admin, owner, admin, user, user, user, user, user... (헥헥) 이라면 중복을 제거하여 ['user', 'owner', 'admin']이 됩니다.

      Users.find().distinct('role') // ['user', 'owner', 'admin']
      regex
      정규표현식에 일치하는 것을 가져오기 위한 메소드입니다.

      Users.find().where('name').regex(/zerocho/)
      Users.find().regex('name', /zerocho/)
      select
      프로젝션(특정 필드만 가져오는 기능)을 위한 메소드입니다. 예를 들어 name과 age만 선택하면 { _id: ..., name: ..., age: ... } 이렇게 결과가 출력됩니다. _id는 빼지 않는 이상 기본 출력됩니다. 특정 필드를 빼고싶다면 앞에 -(빼기)를 붙이면 됩니다.

      Users.findOne().select('name age') // { _id: ..., name: ..., age: ... }
      Users.findOne().select('-_id name age') // { name: ..., age: ... }
      Users.findOne().select({ name: 1, age: 1, _id: 0 }) // 이렇게 객체 형식으로 해도 됩니다.
      skip, limit
      이것은 자주 보셨을 겁니다. skip은 건너뛰기, limit은 개수 제한을 나타냅니다. limit은 0이면 0개를 가져오는 게 아니라 다 가져옵니다.

      Users.find().skip(10).limit(5) // 11~15번째 사람 쿼리
      sort
      역시 자주 보셨을 겁니다. 정렬이죠.

      Users.find().sort('age -medals'); // 나이 오름차순 정렬, 메달 내림차순 정렬
      Users.find().sort({ age: 1, medals: -1 }); // 이렇게도 가능합니다.
      Users.find().sort({ age: 'asc', medals: 'desc' }); // 이렇게도...
      Users.find().sort({ age: 'ascending', medals: 'descending' }); // 이렇게도...
      find, findOne, findOneAndRemove, findOneAndUpdate
      얘네는 왜 쿼리에 있을까요? 모델의 메소드라고 생각하실 수도 있겠습니다만, 쿼리에서도 사용 가능합니다.

      Users.find({ name: 'zerocho' }).find({ age: 24 })
      이렇게요. 첫 번째 find는 모델의 메소드이고 두 번째 find는 쿼리의 메소드입니다.

      Users.find().where('name').equals('zerocho').findOne()
      이런 요상한 것도 가능합니다. 이렇게는 자주 안 쓰지만요.

      이상으로 몽구스에 대해 알아보았습니다! 워낙 편리한 기능이 많다보니 몽고DB를 쓰면 꼭 몽구스도 같이 쓰게 되는 것 같습니다. 여러분도 몽구스 한 번 시도해보세요~!


    */

   const users = await User.find()
       .where('age').gt(25)
       .where('married').eq(false)
       .select('_id name phone')
       .sort('-name')
   res.json(users);

}));


router.get('/populate', wrapAsync(async (req, res) => {

   const user = await User.findOne()
       .where('phone').eq('00022222222')

   await Comment.create([{
         commenter: user.id,
         comment: 'comment 테스트 입력1',
      },
      {
         commenter: user.id,
         comment: 'comment 테스트 입력2',
      }
      ]);


   const comments = await Comment.find()
       .where('commenter').eq(user.id)
       .populate('commenter')


   res.json(comments);

}));

router.get('/findOne', wrapAsync(async (req, res) => {
   // 여러개가 나오지만 그중에 하나

   const user = await User.findOne()
       .where('age').gt(25)
       .where('married').eq(false)
       .select('id name phone')
       .sort('-name')


   res.json(user);

}));

router.get('/create', wrapAsync(async (req, res) => {

   const user = await User.findOne()
       .where('phone').eq('00022222222')

   const comment = await Comment.create({
      commenter: user.id,
      comment: 'comment 테스트 입력',
   });

   res.json(comment);

}));

router.get('/createMany', wrapAsync(async (req, res) => {

   const user = await User.findOne()
       .where('phone').eq('00022222222')

   const comments = await Comment.create([
      {
         commenter: user.id,
         comment: 'comment 테스트 입력1',
      },
      {
         commenter: user.id,
         comment: 'comment 테스트 입력2',
      },
      {
         commenter: user.id,
         comment: 'comment 테스트 입력3',
      }
   ]);

   res.json(comments);

}));

router.get('/update', wrapAsync(async (req, res) => {
   // 처음 한개만 업데이트 된다.
   const user = await User.where('married').eq(false).update({ age : 3500, married: false})

   res.json(user);

}));

router.get('/updateMany', wrapAsync(async (req, res) => {
   //모두다 업데이트
   const result = await User.where('married').eq(false).updateMany({ age : 3500, married: false})

   res.json(result);

}));


router.get('/deleteOne', wrapAsync(async (req, res) => {
   //가장 처음 한개만 삭제
   const result = await User.where('married').eq(false).deleteOne()

   res.json(result);
}));


router.get('/deleteMany', wrapAsync(async (req, res) => {
   //여러개 모두 삭제
   const result = await User.where('married').eq(false).deleteMany()

   res.json(result);
}));

router.get('/remove', wrapAsync(async (req, res) => {
   //여러개를 한번에 삭제
   const result = await User.where('married').eq(false).remove()

   res.json(result);
}));

router.get('/count', wrapAsync(async (req, res) => {
   const result = await User.where('married').eq(false).count()

   res.json(result);
}));

/**
 *  aggregation 관련 Mongodb 공부가 필요하다.
 */

module.exports = router;

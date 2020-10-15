'use strict'

const {Router} = require('express');
const router = Router();
const models = require('../../model');
const { getPagination, getPagingData, tree, wrapAsync } = require('../../common/util/func');
const { Op } = require("sequelize");

function testMiddleWare(req, res, next) {
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleWare2(req, res, next) {
    console.log('두번째 미들웨어');
    next();
}


router.get('/', testMiddleWare, testMiddleWare2, (req, res) => {
    res.send('admin app');
});

/**
 * 트랜잭션 예제
 */
router.get('/transaction/example', wrapAsync(async (req, res) => {
    await models.sequelize.transaction(async (t) => {
        const product = await models.Products.create({
            name: '트랜잭션 테스트 상품',
            price: 1000,
            description: '트랜잭션 테스트 상품 설명'
        });
        //throw new Error('롤백될까')
        await models.Products.update(
            {
                name: product.name + ' 수정 업뎃',
                price: product.price + 50,
                description: product.description + ' 내용 수정 업데이트'
            },
            {
                where: {id: product.id}
            }
        )
        const result = await models.Products.findByPk(product.id);
        res.json(result)
    })
}));


router.get('/products', wrapAsync(async (_, res) => {
    const products = await models.Products.findAll({});
    res.render('site/example/sequelize/products.html', {products, message: "<h1>hello</h1>"});
}));

router.get('/products/write', (_, res) => {
    res.render('site/example/sequelize/write.html');
});

router.post('/products/write', wrapAsync(async (req, res) => {

        await models.Products.create(req.body);
        res.redirect('/example/sequelize/products');


        /*models.Products.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }).then(() => {
            res.redirect('/example/sequelize/products');
        });*/
    }
));

router.get('/products/detail/:id', wrapAsync(async (req, res) => {
    const product = await models.Products.findByPk(req.params.id);
    res.render('site/example/sequelize/detail.html', {product: product})
}));

router.get('/products/edit/:id', wrapAsync(async (req, res) => {
    //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
    const product = await models.Products.findByPk(req.params.id)
    res.render('site/example/sequelize/write.html', {product: product});
}));

router.post('/products/edit/:id', wrapAsync(async (req, res) => {
    await models.Products.update(
        {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/example/sequelize/products/detail/' + req.params.id)
}));

router.get('/products/delete/:id', wrapAsync(async (req, res) => {
    await models.Products.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/example/sequelize/products');

}));

router.get('/pk/:id', wrapAsync(async (req, res) => {
    const user = await models.User.findByPk(req.params.id)
    res.json(user);

}));

router.get('/findone/:id', wrapAsync(async (req, res) => {
    const user = await models.User.findOne({
        attributes: ["userId", "userName", "address1"],
        where: {
            userId: {[Op.eq]: req.params.id}
        },
    })
    res.json(user);

}));

router.get('/all', wrapAsync(async (req, res) => {
    const users = await models.User.findAll()
    res.json(users);

}));

router.get('/select-column', wrapAsync(async (req, res) => {
    const users = await models.User.findAll({
        attributes: ["userId", "address1"]
    })
    res.json(users);

}));

router.get('/where1', wrapAsync(async (req, res) => {
    const users = await models.User.findAll({
        attributes: ["userId", "userName", "address1"],
        where : {
            userId: { [Op.gt] : 10 }
        },
    })
    res.json(users);

}));


router.get('/limitoffset', wrapAsync(async (req, res) => {
    const users = await models.User.findAll({
        attributes: ["userId", "userName", "address1"],
        where : {
            userId: { [Op.gt] : 10 }
        },
        order:[['address1', 'asc'], ['userId', 'desc']],
        limit : 5,
        offset : 1

    })
    res.json(users);

}));

router.get('/innerjoin', wrapAsync(async (req, res) => {
    const boards = await models.Board.findAll({
        attributes: ["boardId", "title"],
        include: [
            {
                model: models.User,
                attributes: ["userId", "userName"],
                required:true //true면 innerjoin, 없거나 false면  left outerjoin
            }
        ]
    })
    res.json(boards);

}));

router.get('/leftjoin', wrapAsync(async (req, res) => {
    const boards = await models.Board.findAll({
        attributes: ["boardId", "title"],
        include: [
            {
                model: models.User,
                attributes: ["userId", "userName"],
                required:false, //true면 innerjoin false면  left outerjoin
            }
        ]
    })
    res.json(boards);

}));

router.get('/rightjoin', wrapAsync(async (req, res) => {
    const boards = await models.Board.findAll({
        attributes: ["boardId", "title"],
        include: [
            {
                model: models.User,
                attributes: ["userId", "userName"],
                required:false, //true면 innerjoin false면  left outerjoin
                right: true, //right join
            }
        ]
    })
    res.json(boards);

}));

router.get('/subquery1', wrapAsync(async (req, res) => {
    const boards = await models.Board.findAll({
        attributes: ["boardId", "title", [
            models.sequelize.literal(`(SELECT COUNT(1) FROM TB_USER)`),
            'userCnt'
        ]],
        order: [
            [models.sequelize.literal('userCnt'), 'DESC']
        ]
    })
    res.json(boards);

}));

router.get('/subquery2', wrapAsync(async (req, res) => {
    const boards = await models.Board.findAll({
        attributes: ["boardId", "title"],
        where: {
            regId : { [Op.eq] : models.sequelize.literal(`(SELECT U.USER_ID FROM TB_USER AS U WHERE U.USER_ID = 12)`)}
        }
    })
    res.json(boards);

}));

router.get('/function', wrapAsync(async (req, res) => {
    const boards = await models.Board.findAll({
        attributes: ["boardId", [models.sequelize.fn('COUNT', models.sequelize.col('REG_ID')), 'userCnt']],
        group:["boardId"]
    })
    res.json(boards);

}));

router.get('/paging', wrapAsync(async (req, res) => {

    /*
        http://localhost:8001/example/sequelize/paging/?page=1&size=5
     */

    /*
        findAndCountAll메소드는 paging 에 필요한 전체 count 수와 리스트 10개를 포함한다.
     {
          "count": 20, // 전체 카운트
          "rows": [
             ..게시판 객체 10개
          ]
     */


    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size)

    const boards = await models.Board.findAndCountAll(
        {
            where: {
                content: { [Op.like] : '%관리자 리스트%' }
            },
            offset: offset,
            limit: limit
        })
    const pagingData =  getPagingData(boards, page, limit)
    res.json(pagingData);

}));



router.get('/insert', wrapAsync(async (req, res) => {
    const boards = await models.Board.create({
        title : 'nodejs로 입력한 제목',
        content: 'nodejs로 입력한 내용'
    })
    res.json(boards);
}));


router.get('/update', wrapAsync(async (req, res) => {
    const boards = await models.Board.update({
        title : 'nodejs로 수정한 제목',
        content: 'nodejs로 수정한 내용'
    }, {
        //where: {boardId: {[Op.eq] : 1}}
        //where: {boardId: 1}
        where: {boardId: {[Op.in] : [1, 2, 5]}}
    })
    res.json(boards);
}));

router.get('/delete', wrapAsync(async (req, res) => {
    const boards = await models.Board.destroy({
        where: {boardId: 30}
    })
    res.json(boards);
}));


router.get('/sanitize-html', wrapAsync(async (req, res) => {
    const board = await models.Board.create({
        title: '트랜잭션 테스트 상품',
        content: `
        <img src=x onerror=alert('img') />
        <h3>테스트</h3>
        <script>alert('hello world')</script>")
        `
    });
    res.json(board)
}));




module.exports = router;



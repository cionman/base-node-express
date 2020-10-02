const {Router} = require('express');
const router = Router();
const models = require('../../models');

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

router.get('/products', (_, res) => {
    models.products.findAll({}).then((products) => {
        // DB에서 받은 products를 products변수명으로 내보냄
        res.render('admin/products.html', {products: products, message: "<h1>hello</h1><script>alert()</script>"});
    });
});

router.get('/products/write', (_, res) => {
    res.render('admin/write.html');
});

router.post('/products/write', (req, res) => {
        models.products.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }).then(() => {
            res.redirect('/admin/products');
        });
    }
);

router.get('/products/detail/:id', (req, res) => {
    models.products.findByPk(req.params.id).then((product) => {
        res.render('admin/detail.html', {product: product});
    });
});

router.get('/products/edit/:id', (req, res) => {
    //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
    models.products.findByPk(req.params.id).then((product) => {
        res.render('admin/write.html', {product: product});
    });
});

router.post('/products/edit/:id', (req, res) => {

    models.products.update(
        {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        },
        {
            where: {id: req.params.id}
        }
    ).then(() => {
        res.redirect('/admin/products/detail/' + req.params.id);
    });

});

router.get('/products/delete/:id', (req, res) => {
    models.products.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/admin/products');
    });
});

module.exports = router;



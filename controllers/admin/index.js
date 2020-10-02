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

router.get('/products', async (_, res) => {
    const products = await models.products.findAll({});
    res.render('admin/products.html', {products, message: "<h1>hello</h1><script>alert()</script>"});
});

router.get('/products/write', (_, res) => {
    res.render('admin/write.html');
});

router.post('/products/write', async (req, res) => {

    await models.products.create(req.body);
    res.redirect('/admin/products');


        /*models.products.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }).then(() => {
            res.redirect('/admin/products');
        });*/
    }
);

router.get('/products/detail/:id', async (req, res) => {
    const product = await models.products.findByPk(req.params.id);
    res.render('admin/detail.html', {product: product})
});

router.get('/products/edit/:id', async (req, res) => {
    //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
    const product = await models.products.findByPk(req.params.id)
    res.render('admin/write.html', {product: product});
});

router.post('/products/edit/:id', async (req, res) => {
    await models.products.update(
        {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/admin/products/detail/' + req.params.id)
});

router.get('/products/delete/:id', async (req, res) => {
    await models.products.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/admin/products');

});

module.exports = router;



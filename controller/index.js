'use strict'

const { Router } = require('express');
const { adminRequired } = require('../common/util/middleware')
const router = Router()

router.use('/admin', adminRequired, require('./admin'));
router.use('/example', require('./example'));
router.use('/api', require('./api'));
router.use('/', require('./auth.ctrl'))

router.get('/', (req, res) =>{
    res.render('site/home.html')
})


module.exports = router;

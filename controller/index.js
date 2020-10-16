'use strict';

const { Router } = require('express');
const { hasRole } = require('../common/util/middleware');
const router = Router();

router.use('/admin', hasRole('ADMIN'), require('./admin'));
router.use('/example', require('./example'));
router.use('/api', require('./api'));
router.use('/', require('./auth.ctrl'));

router.get('/', (req, res) => {
    res.render('site/home.html');
});


module.exports = router;

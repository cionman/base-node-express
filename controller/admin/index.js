'use strict'
const { Router } = require('express');
const router = Router()
const { hasRole } = require('../../common/util/middleware')

router.get('/', (req, res) => {
    res.send('admin app');
});


router.get('/superadmin', hasRole('SUPER_ADMIN'), (req, res) => {
    res.send('super admin app');
});


module.exports = router;


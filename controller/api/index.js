'use strict';

const { Router } = require('express');
const router = Router();

router.use('/auth', require('./auth.ctrl'));

module.exports = router;

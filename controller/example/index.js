'use strict'

const { Router } = require('express');
const router = Router()

router.use('/crawling', require('./crawling.ctrl'));
router.use('/graphql-example', require('./graphql.ctrl'));
router.use('/file', require('./file.ctrl'));
router.use('/sequelize', require('./sequelize.ctrl'));

module.exports = router;

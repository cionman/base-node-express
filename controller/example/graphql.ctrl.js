'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('site/graphql/graphql.html');
});


module.exports = router;



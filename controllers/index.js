const { Router } = require('express');
const router = Router()

function adminRequired(req, res, next) {
    console.error('TODO : 관리자 로그인 체크 필요');
    next();
}

router.use('/admin', adminRequired, require('./admin'));
router.use('/crawling', adminRequired, require('./crawling'));

module.exports = router;

'use strict'

const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLogin, isNotLogin } = require('../../common/util/middleware');
const { wrapAsync } = require('../../common/util/func');
const { User } = require('../../model');

const router = express.Router();

router.post('/duplicate-id', wrapAsync(async (req, res)=>{
    console.log(`req body : ${req.body}`)
    const cnt = await User.count({
        where: {loginId : req.body.loginId}
    })
    console.log(`cnt : ${cnt}`)
    res.json(cnt > 0)
}))

router.post('/join', isNotLogin, wrapAsync(async (req, res, next) => {
    const { loginId, password, userName, userNick, email, phone1, phone2, phone3 } = req.body;

    const exUser = await User.findOne({ where: { loginId } });
    if (exUser) {
        throw new Error('이미 존재하는 사용자입니다.')
    }

    const hash = await bcrypt.hash(password, 10);
    await User.create({
        loginId,
        userName,
        userNick,
        email,
        phone : phone1 + phone2 + phone3,
        password: hash,
    });
    return res.json({
        msg : "회원가입에 성공했습니다."
    });


}));

module.exports = router;


'use strict';

const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLogin, isNotLogin } = require('../common/util/middleware');
const { wrapAsync } = require('../common/util/func');
const { User } = require('../model');

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('site/login.html', { message: req.flash('message') });
});

router.get('/join', (req, res) => {
    res.render('site/join.html');
});

router.get('/logout', isLogin, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/auth/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/',
}), (req, res) => {
    res.redirect('/');
});

router.post('/join', isNotLogin, async (req, res, next) => {
    const { email, nick, password } = req.body;
    try {

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

router.post('/login', isNotLogin, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            req.flash('message', info.message);
            return res.redirect(`/login?error`);
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});


module.exports = router;


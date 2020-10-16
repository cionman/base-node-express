'use strict';

const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../../model');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    local();
    kakao();
};

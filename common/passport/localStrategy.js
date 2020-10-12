'use strict'

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../../model');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'loginId',
        passwordField: 'password',
    }, async (loginId, password, done) => {
        try {
            const exUser = await User.findOne({ where: { loginId } });
            if (exUser) {
                const result = await bcrypt.compare(password, exUser.password);
                if (result) {
                    done(null, exUser);
                } else {
                    done(null, false, { message: '아이디 또는 비밀번호가 잘못되었습니다.' });
                }
            } else {
                done(null, false, { message: '아이디 또는 비밀번호가 잘못되었습니다.' });
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }));
};


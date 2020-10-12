'use strict'

const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const { User } = require('../../model');
require("dotenv").config()

module.exports = () => {
    passport.use(new KakaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback',
    }, async (accessToken, refreshToken, profile, done) => {
        console.log('kakao profile', profile);
        try {
            const exUser = await User.findOne({
                where: { kakaoCode: profile.id },
            });
            if (exUser) {
                done(null, exUser);
            } else {
                const newUser = await User.create({
                    email: profile.email || '',
                    userNick: profile.displayName,
                    kakaoCode: profile.id,
                });
                done(null, newUser);
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }));
};


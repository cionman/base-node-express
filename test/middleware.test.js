'use strict'

const { isLogin, isNotLogin } = require('../common/util/middleware');

describe('isLogin', () => {
    const res = {
        status: jest.fn(() => res), // jest.fn => 함수 모킹
        send: jest.fn(),
        redirect: jest.fn(),
    };
    const next = jest.fn();

    test('로그인 되어있으면 isLogin이 next를 호출해야 함', () => {
        const req = {
            isAuthenticated: jest.fn(() => true),
        };
        isLogin(req, res, next);
        expect(next).toHaveBeenCalledTimes(1); // 1번 호출됨
    });

    test('로그인 되어있지 않으면 isLogin이 에러를 응답해야 함', () => {
        const req = {
            isAuthenticated: jest.fn(() => false),
        };
        isLogin(req, res, next);
        expect(res.redirect).toBeCalledWith('/login'); // 해당 파라미터로 호출됨
    });
});

describe('isNotLogin', () => {
    const res = {
        redirect: jest.fn(),
    };
    const next = jest.fn();

    test('로그인 되어있으면 isNotLogIn이 에러를 응답해야 함', () => {
        const req = {
            isAuthenticated: jest.fn(() => true),
        };
        isNotLogin(req, res, next);
        const message = encodeURIComponent('로그인한 상태입니다.');
        expect(res.redirect).toBeCalledWith(`/?error=${message}`);
    });

    test('로그인 되어있지 않으면 isNotLogIn이 next를 호출해야 함', () => {
        const req = {
            isAuthenticated: jest.fn(() => false),
        };
        isNotLogin(req, res, next);
        expect(next).toHaveBeenCalledTimes(1); // 1번 호출됨
    });
});

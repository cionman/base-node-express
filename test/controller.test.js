'use strict'

const request = require("supertest");
const { init } = require('../app')
const cheerio = require('cheerio');

/*
컨트롤러 테스트
https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
https://jestjs.io/docs/en/setup-teardown
 */

let app;

beforeAll(async () => {
    console.log('===== before all =====')
    app = await init()
});

describe("GET 컨트롤러 테스트", () => {

    test("/ 경로", async () => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
    });

    test("/example/sequelize/innerjoin get", async () => {
        const response = await request(app).get("/example/sequelize/innerjoin")
        expect(response.statusCode).toBe(200)
    });
});

describe("POST 컨트롤러 테스트", () => {

    test("/example/sequelize/products/write post경로", async () => {
        const getResponse = await request(app)
            .get('/example/sequelize/products/write')

        const $ = cheerio.load( getResponse.text ,
            { decodeEntities: false } //한글 변환
        );

        let csrfToken = $("form").find('input[name=_csrf]').val()
        let cookies  = getResponse.headers['set-cookie'];

        const postResponse = await request(app)
            .post("/example/sequelize/products/write")
            .set('Cookie', cookies)
            .send({
                _csrf: csrfToken,
                name: '감자',
                price: 30000,
                description: '설명 테스트'
            })

        expect(postResponse.statusCode).toBe(302)
    });
});



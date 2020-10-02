const puppeteer = require('puppeteer');
/**
 * 모든 async 함수를 express 오류 처리기에서 처리시키기 위한 유틸 함수
 * @param fn
 * @returns {function(*=, *=, *=): void}
 */
module.exports.wrapAsync = function (fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next)
    }
}

module.exports.wrapPuppeteer = async function (fn) {
    // 브라우저 열기
    const browser = await puppeteer.launch({
        //headless: false //false인 경우 브라우저가 노출된다.
    });
    const page = await browser.newPage();
    //alert 또는 confirm 창 대응
    page.on("dialog", (dialog) => {
        dialog.accept();
    })

    await fn(page);

    // 브라우저 닫기
    await browser.close();
}

const puppeteer = require('puppeteer');
/**
 * 모든 async 함수를 express 오류 처리기에서 처리시키기 위한 유틸 함수
 * @param fn
 * @returns {function(*=, *=, *=): void}
 */
exports.wrapAsync = function (fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next)
    }
}

/**
 * puppeter wrapper
 *
 * @param fn
 * @returns {Promise<void>}
 */
exports.wrapPuppeteer = async function (fn) {
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



/**
 * 객체 트리 구조 확인
 * @param o
 * @param m
 * @param v
 */
exports.tree = (o,m=o,v='') => {
    for(e in o){
        if(typeof o!=='object'){console.log(v+'┗╸'+o);return}
        Array.isArray(o)?!Array.isArray(o[e])?console.log(v+(o.length===1||o[e]===o[o.length-1]?'┗╸':'┣╸')+o[e]):tree(o[e],m,v+(o.length===1||o[e]===o[o.length-1]?' '.repeat(o[e].toString.length+1):'┃'+' '.repeat(e.length))):(console.log(v+(e===Object.keys(m)[0]?'┏╸':Object.keys(o).length===1||Object.keys(o)[Object.keys(o).length-1]===e?'┗╸':'┣╸')+e),tree(typeof o[e]!=='object'?String(o[e]):o[e],m,v+(Object.keys(o).length===1||Object.keys(o)[Object.keys(o).length-1]===e?' '.repeat(e.length+1):'┃'+' '.repeat(e.length))))
    }
}

exports.getPagination = (page, size) => {
    const limit = size ? +size : 10; // 기본 10
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

exports.getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: contents } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, contents, totalPages, currentPage };
};





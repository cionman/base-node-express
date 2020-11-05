const puppeteer = require('puppeteer');
/**
 * 모든 async 함수를 express 오류 처리기에서 처리시키기 위한 유틸 함수
 * @param fn
 * @returns {function(*=, *=, *=): void}
 */
exports.wrapAsync = function (fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
};

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
    });

    await fn(page);

    // 브라우저 닫기
    await browser.close();
};


/**
 * 객체 트리 구조 확인
 * @param o
 * @param m
 * @param v
 */
exports.tree = (o, m = o, v = '') => {
    for (e in o) {
        if (typeof o !== 'object') {
            console.log(v + '┗╸' + o);
            return;
        }
        Array.isArray(o) ? !Array.isArray(o[e]) ? console.log(v + (o.length === 1 || o[e] === o[o.length - 1] ? '┗╸' : '┣╸') + o[e]) : tree(o[e], m, v + (o.length === 1 || o[e] === o[o.length - 1] ? ' '.repeat(o[e].toString.length + 1) : '┃' + ' '.repeat(e.length))) : (console.log(v + (e === Object.keys(m)[0] ? '┏╸' : Object.keys(o).length === 1 || Object.keys(o)[Object.keys(o).length - 1] === e ? '┗╸' : '┣╸') + e), tree(typeof o[e] !== 'object' ? String(o[e]) : o[e], m, v + (Object.keys(o).length === 1 || Object.keys(o)[Object.keys(o).length - 1] === e ? ' '.repeat(e.length + 1) : '┃' + ' '.repeat(e.length))));
    }
};

/**
 *  페이징에 사용되는 page, size 파라미터를 받아 sequelize에 사용할 limit, offset 값을 추출
 * @param page
 * @param size
 * @returns {{offset: number, limit: number}}
 */
exports.getPagination = (page, size) => {
    const limit = size ? +size : 10; // 기본 10
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

/**
 * 페이징 쿼리 데이터를 페이징에 사용할 변수가 포함된 객체로
 * @param data
 * @param page
 * @param limit
 * @returns {{totalItems: *, contents: *, totalPages: number, currentPage: number}}
 */
exports.getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: contents } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, contents, totalPages, currentPage };
};


/**
 * Array.prototype.sort 에 객체키를 기준으로 정렬할 비교 함수
 * @param key
 * @returns {function(*, *): number}
 */
exports.compare = (key) => (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0))

/**
 * 객체를 불변 상태로 만든다.
 * 깊은 동결 구현 메서드
 * @param target
 * @returns {*}
 */
exports.deepFreeze = (target) => {

    if (target && typeof target === 'object') {
        Object.freeze(target);

        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

/**
 *  랜덤 정수 출력
 * @param range range가 10이면 1~10사이 난수 20이면 1~20사이 난수
 * @returns {number}
 */
exports.random = (range) => Math.floor(Math.random() * range, +1);


/**
 * 이터러블여부 체크
 * @param v
 * @returns {boolean}
 */
exports.isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function'

/**
 * url을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 반환한다.
 * @param url
 * @returns {{}|{path: *, protocol: *, host: *}}
 */
exports.parseURL = (url = '') => {
    // '://' 앞의 문자열(protocol)과 '/' 이전의 '/'으로 시작하지 않는 문자열(host)과 '/' 이후의 문자열(path)을 검색한다.
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parsedURL);
    /*
    [
      'https://developer.mozilla.org/ko/docs/Web/JavaScript',
      'https',
      'developer.mozilla.org',
      'ko/docs/Web/JavaScript',
      index: 0,
      input: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
      groups: undefined
    ]
    */

    if (!parsedURL) return {};

    // 배열 디스트럭처링 할당을 사용하여 이터러블에서 필요한 요소만 추출한다.
    const [, protocol, host, path] = parsedURL;
    return { protocol, host, path };
}




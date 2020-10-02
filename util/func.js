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

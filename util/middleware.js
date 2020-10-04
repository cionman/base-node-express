const multer = require('multer')
const path = require('path')

/*
TODO aws s3 분기 처리 필요
 */
const storage = multer.diskStorage({
    destination(req, file ,done){
        done(null, 'static/uploads')
    },
    filename(req, file, done){
        const ext = path.extname(file.originalname)
        done(null, path.basename(file.originalname, ext) + Date.now() + ext)
    },
})

module.exports = {
    upload : multer(
        {
            storage,
            limits: {fileSize: 10 * 1024 * 1042},
            fileFilter: function (req, file, cb) {
                let ext = path.extname(file.originalname).toLowerCase();
                //허용되는 확장자
                if (!(['.jpg', '.jpeg', '.png', '.gif', '.docx', '.doc', '.hwp', '.pdf', '.pptx', '.ppt', '.txt'].includes(ext))) {
                    console.error('형식에 맞지 않는 파일입니다.')
                    req.fileValidationError = "Forbidden extension";
                    return cb(null, false, req.fileValidationError);
                }
                cb(null, true);
            }
        }
    )
}

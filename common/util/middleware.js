const multer = require('multer');
const path = require('path');
const { ROLES } = require('./roles');

/*
TODO aws s3 분기 처리 필요
 */
const storage = multer.diskStorage({
    destination(req, file, done) {
        done(null, 'view/static/uploads');
    },
    filename(req, file, done) {
        const ext = path.extname(file.originalname);
        done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
});

exports.upload = multer(
    {
        storage,
        limits: { fileSize: 10 * 1024 * 1042 },
        fileFilter: function (req, file, cb) {
            let ext = path.extname(file.originalname).toLowerCase();
            //허용되는 확장자
            if (!(['.jpg', '.jpeg', '.png', '.gif', '.docx', '.doc', '.hwp', '.pdf', '.pptx', '.ppt', '.txt'].includes(ext))) {
                return cb(new Error('파일 형식에 맞지 않습니다.'));
            }
            cb(null, true);
        }
    }
);

exports.isLogin = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
};

exports.isNotLogin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        const message = encodeURIComponent('로그인한 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
};

exports.hasRole = (minimumRole = '') => {
    const minimumGrade = ROLES[minimumRole].grade;
    return (req, res, next) => {
        if (req.isAuthenticated()) {
            if (minimumRole === 'USER') {
                next();
            } else {
                const reqUserRole = req.user.role;
                if (reqUserRole.some(userRole => ROLES[userRole].grade >= minimumGrade)) {
                    next();
                } else {
                    res.sendStatus(403);
                }
            }
        } else {
            res.redirect('/login');
        }
    };
};

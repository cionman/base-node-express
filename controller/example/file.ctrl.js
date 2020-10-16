'use strict';

const { Router } = require('express');
const router = Router();
const { wrapAsync } = require('../../common/util/func');
const { upload } = require('../../common/util/middleware');


router.get('/upload/single', (req, res) => {
    res.render('site/example/file/upload/single.html');
});


router.post('/upload/single', (req, res) => {
    upload.single('singleFile')(req, res, (err) => {
        if (err) {
            console.error(`파일 업로드 중 에러 : ${err}`);
            res.status(500).send(`파일 업로드 중 에러 : ${err}`);
            return;
        }
        res.send('ok');
    });

});


router.get('/upload/multiple', (req, res) => {
    res.render('site/example/file/upload/multiple.html');
});


router.post('/upload/multiple', (req, res) => {
    upload.array('multiFile')(req, res, (err) => {
        if (err) {
            console.error(`파일 업로드 중 에러 : ${err}`);
            res.status(500).send(`파일 업로드 중 에러 : ${err}`);
            return;
        }
        res.send('ok');
    });
});

router.get('/upload/multiple2', (req, res) => {
    res.render('site/example/file/upload/multiple2.html');
});


router.post('/upload/multiple2', (req, res) => {
    upload.fields([{ name: "singleFile1" }, { name: "singleFile2" }])(req, res, (err) => {
        if (err) {
            console.error(`파일 업로드 중 에러 : ${err}`);
            res.status(500).send(`파일 업로드 중 에러 : ${err}`);
            return;
        }
        res.send('ok');
    });
});

module.exports = router;



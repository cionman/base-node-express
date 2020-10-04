const {Router} = require('express');
const router = Router();
const { wrapAsync } = require('../../common/util/func');
const { upload } = require('../../common/util/middleware')


router.get('/upload/single', (req, res) => {
    res.render('example/upload/single.html')
});


router.post('/upload/single', upload.single('singleFile'), (req, res) => {
    console.log('file : ', req.file)
    console.log('body : ', req.body)
    res.send('ok')
});

module.exports = router;


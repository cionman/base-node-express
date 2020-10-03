const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('graphql/graphql.html');
});



module.exports = router;



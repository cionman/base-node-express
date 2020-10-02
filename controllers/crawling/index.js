const {Router} = require('express');
const router = Router();
const models = require('../../models');
const request = require('request-promise');
const cheerio = require('cheerio');

router.get('/cheerio/:invc_no', async (req, res) => {
    try{
        //예제 http://localhost:8001/crawling/cheerio/381572978853
        //대한통운의 현재 배송위치 크롤링 주소
        const url = "https://www.doortodoor.co.kr/parcel/ \
        doortodoor.do?fsp_action=PARC_ACT_002&fsp_cmd=retrieveInvNoACT&invc_no=" + req.params.invc_no ;
        let result = []; //최종 보내는 데이터

        const html = await request(url);
        const $ = cheerio.load( html ,
            { decodeEntities: false } //한글 변환
        );

        const tdElements = $(".board_area").find("table.mb15 tbody tr td"); //td의 데이터를 전부 긁어온다
        // 아래 주석을 해제하고 콘솔에 찍어보세요.
        // console.log(tdElements)

        //한 row가 4개의 칼럼으로 이루어져 있으므로
        // 4로 나눠서 각각의 줄을 저장한 한줄을 만든다

        var temp = {}; //임시로 한줄을 담을 변수
        for( let i=0 ; i<tdElements.length ; i++ ){

            if(i%4===0){
                temp = {}; //시작 지점이니 초기화
                temp["step"] = tdElements[i].children[0].data.trim(); //공백제거
                //removeEmpty의 경우 step의 경우 공백이 많이 포함됨
            }else if(i%4===1){
                temp["date"] = tdElements[i].children[0].data;
            }else if(i%4===2){

                //여기는 children을 1,2한게 배송상태와 두번째줄의 경우 담당자의 이름 br로 나뉘어져있다.
                // 0번째는 배송상태, 1은 br, 2는 담당자 이름
                temp["status"] = tdElements[i].children[0].data;
                if(tdElements[i].children.length>1){
                    temp["status"] += tdElements[i].children[2].data;
                }

            }else if(i%4===3){
                temp["location"] = tdElements[i].children[1].children[0].data;
                result.push(temp); //한줄을 다 넣으면 result의 한줄을 푸시한다
            }
        }

        await models.Crawling.create({
            url,
            content: result.toString()
        });
        res.json(result);


    }catch(e){
        console.error('catch : ', e)
        res.sendStatus(500)
    }
});

router.post('/products/write', async (req, res) => {

    await models.Products.create(req.body);
    res.redirect('/admin/products');


        /*models.Products.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }).then(() => {
            res.redirect('/admin/products');
        });*/
    }
);

router.get('/products/detail/:id', async (req, res) => {
    const product = await models.Products.findByPk(req.params.id);
    res.render('admin/detail.html', {product: product})
});

router.get('/products/edit/:id', async (req, res) => {
    //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
    const product = await models.Products.findByPk(req.params.id)
    res.render('admin/write.html', {product: product});
});

router.post('/products/edit/:id', async (req, res) => {
    await models.Products.update(
        {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/admin/products/detail/' + req.params.id)
});

router.get('/products/delete/:id', async (req, res) => {
    await models.Products.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/admin/products');

});

module.exports = router;



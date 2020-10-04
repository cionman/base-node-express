const {Router} = require('express');
const router = Router();
const models = require('../../model');
const request = require('request-promise');
const cheerio = require('cheerio');
const { wrapAsync, wrapPuppeteer } = require('../../common/util/func');
const puppeteer = require('puppeteer');
const fs = require('fs')

//입력 할 텍스트
const insert_name =  "insert_" + Math.random().toString(36).substring(2, 15);
const insert_description = "insert_" + Math.random().toString(36).substring(2, 15);

//수정 할 텍스트
const modi_name = "update_" + Math.random().toString(36).substring(2, 15);
const modi_description = "update_" + Math.random().toString(36).substring(2, 15);

router.get('/cheerio/:invc_no', wrapAsync(async (req, res) => {
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
}));

router.get('/puppeteer/kospi', wrapAsync(async (req, res) => {

    await wrapPuppeteer(async (page) => {
        // 웹사이트 로딩
        await page.goto('https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC', {timeout: 0, waitUntil: 'domcontentloaded'});

        // 상단 테이블의 th 제목을 가져오고 싶은경우
        const kospiScore = await page.$eval('.spt_con strong', strong => strong.textContent.trim() );
        res.send(kospiScore);
    })
}));


router.get('/puppeteer/example', wrapAsync(async (req, res) => {

    await wrapPuppeteer( async (page) => {
        // 웹사이트 로딩
        await page.goto('http://localhost:8001/admin/products/write', {timeout: 0, waitUntil: 'domcontentloaded'});

        //selector가 나타날때까지 기다림
        await page.waitForSelector('.btn-primary');
        await page.evaluate((a, b) => {
            document.querySelector('input[name=name]').value = a;
            document.querySelector('input[name=price]').value = 5000;
            document.querySelector('input[name=description]').value = b;
        }, insert_name, insert_description)
        await page.click('.btn-primary');
        res.send('puppeteer로 상품 입력 성공')
    })
}));

router.get('/puppeteer/example', wrapAsync(async (req, res) => {

    await wrapPuppeteer( async (page) => {
        // 웹사이트 로딩
        await page.goto('http://localhost:8001/admin/products/write', {timeout: 0, waitUntil: 'domcontentloaded'});

        //selector가 나타날때까지 기다림
        await page.waitForSelector('.btn-primary');
        await page.evaluate((a, b) => {
            document.querySelector('input[name=name]').value = a;
            document.querySelector('input[name=price]').value = 5000;
            document.querySelector('input[name=description]').value = b;
        }, insert_name, insert_description)
        await page.click('.btn-primary');
        res.send('puppeteer로 상품 입력 성공')
    })
}));

router.get('/puppeteer/screenshot', wrapAsync(async (req, res) => {

    await wrapPuppeteer( async (page) => {
        // 웹사이트 로딩
        await page.goto('https://www.naver.com', {timeout: 0, waitUntil: 'domcontentloaded'});
        await page.screenshot({path: 'screenshot.png', fullPage: true })
        res.send('네이버 스크린샷')
    })
}));

router.get('/puppeteer/html', wrapAsync(async (req, res) => {

    await wrapPuppeteer( async (page) => {
        // 웹사이트 로딩
        await page.goto('https://www.naver.com', {timeout: 0, waitUntil: 'networkidle2'});
        const html = await page.content()
        fs.writeFileSync("naver.html", html)
        res.send('네이버 html')
    })
}));

router.get('/puppeteer/pdf', wrapAsync(async (req, res) => {

    await wrapPuppeteer( async (page) => {
        // 웹사이트 로딩
        await page.goto('https://www.naver.com', {timeout: 0, waitUntil: 'networkidle2'});
        await page.pdf({path: 'naver.pdf', format:'A4'})
        res.send('네이버 pdf')
    })
}));


module.exports = router;



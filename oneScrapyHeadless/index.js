const puppeteer = require('puppeteer');

(async () => {
    let allJDInfo = [];
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('http://www.mafengwo.cn/jd/10575/gonglve.html');
    await page.click('.pg-next');

    let currentPageJDList = await page.evaluate(() => {
        let list = [...document.querySelectorAll('.row-allScenic .scenic-list li')];
        return list.map(el => {
            return {
                href: el.querySelector('a').href.trim(),
                imgSrc: el.querySelector('div img').src.trim(),
                title: el.querySelector('a h3').innerHTML
            }
        })
    });
    var i = 1;
    let nextPage;
    // async function test() {
    //     try {
    //         do {
    //             console.log(i++ + '页');        
    //             await allJDInfo.push(currentPageJDList);
    //             nextPage = await page.$('.pg-next');
    //             await nextPage.click();
    //             // if (i===10){
    //             //     break;
    //             // }
    //             // await page.waitFor(1000);
    //         } while (nextPage);
    //     }
    //     catch (e) {
    //         console.log('错误'+e);
    //     }
    // }
    // test();
    // test().then(() => console.log(allJDInfo))
    // var name = await page.$('.pg-next');
    // await page.click('.pg-next', {delay: 1000});
    console.log(currentPageJDList);
    await browser.close();
})();
const puppeteer = require('puppeteer');
let scenicspot = require('./model/scenicspot');

function getList() {

}

(async () => {
    let allJDInfo = [];
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('http://www.mafengwo.cn/jd/10575/gonglve.html');

    async function getAllScenicSpot() {
        let allScenicSpot = [];        
        for (let i = 1;i <= 16;i++) {
            try {
                let list = await page.evaluate((page) => {
                    console.log('当前第：' + page + '页');
                    return new Promise((resolve, reject) => {
                        console.log(page);
                        let xhr = new XMLHttpRequest();
                        
                        let data = `sAct=KMdd_StructWebAjax|GetPoisByTag&iMddid=10575&iTagId=0&iPage=${page}`;
            
                        xhr.open('post', '/ajax/router.php', true);
                        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                        xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
                        xhr.send(encodeURI(data));
            
                        xhr.onreadystatechange = () => {
                            if(xhr.readyState === 4) {
                                if (xhr.status >= 200 && xhr.status <= 300) {
                                    let result = []
                                    let data = JSON.parse(xhr.responseText).data.list;
                                    let element = document.createElement('div');
                                    element.innerHTML = data;
                                    for (let i = 0;i < element.children.length;i++) {
                                        let obj = {};
                                        obj.title = element.children[i].querySelector('a').title;
                                        obj.ssHref = element.children[i].querySelector('a').href;
                                        obj.imgSrc = element.children[i].querySelector('img').src;
                                        console.log(obj);
                                        result.push(obj);
                                    }
                                    resolve(result);
                                }
                                else {
                                    resolve('错误');
                                }
                            }
                        }
                    });
                }, i);
                allScenicSpot.push(...list);
            }
            catch (e) {
                console.log(e);
                await browser.close();
            }
            // break;
        }
        return allScenicSpot;
    }

    await getAllScenicSpot().then(async res => {
        let index = 0;
        for (item of res) {
            item.index = index++;
            console.log(item.title);
            if (item.ssHref) {
                console.log(item.ssHref);
                await page.goto(item.ssHref);
                // 从页面获取数据
                try {
                    let info = await page.evaluate((data) => {
                        function getValue(node, prope) {
                            let nodeValue = node ? node[prope] : '';
                            return nodeValue;
                        }
                        let infoObj = {};

                        infoObj.name = data.title;
                        infoObj.index = data.index;
                        infoObj.userId = 0;
                        infoObj.userName = '蚂蜂窝用户';
                        infoObj.imgSrc = getValue(document.querySelector('.bd > .pic-big > img'), 'src');
                        infoObj.intro = getValue(document.querySelector('.summary'), 'innerHTML');
                        infoObj.phone = getValue(document.querySelector('.tel > .content'), 'innerHTML');
                        infoObj.website = getValue(document.querySelector('.item-site > .content'), 'innerHTML');
                        infoObj.reftime = getValue(document.querySelector('.item-time > .content'), 'innerHTML');

                        // 读取评论
                        infoObj.comments = [];
                        let commentsList = document.querySelectorAll('.rev-list > ul > .rev-item');
                        commentsList.forEach((item) => {
                            commentsItem = {};
                            commentsItem.star = item.querySelector('.s-star').className.toString().match(/\d/)[0] || 5;
                            commentsItem.content = item.querySelector('.rev-txt').innerHTML;
                            commentsItem.time = item.querySelector('.info .time').innerHTML;
                            commentsItem.userId = 0;
                            commentsItem.zan = 0;
                            commentsItem.parentNodeId = 0;
                            commentsItem.parentNodeName = '';
                            commentsItem.imgs = [];
                            item.querySelectorAll('.rev-img a').forEach((item) => {
                                commentsItem.imgs.push(item.href);
                            })

                            infoObj.comments.push(commentsItem);
                        });

                        return infoObj;
                    }, item);
                    // 写入数据库
                    let dbres = await scenicspot.addscenicspot(info);
                }
                catch (e) {
                    console.log(e);
                    await browser.close();
                }
            }
            // break;
        }
    });

    // 关闭浏览器
    await browser.close();
})();
/**
 * 抓取某个景点信息
 */
async function scenicSpotItem(href, browserInstance) {
    const page = await browserInstance.newPage();
    await page.goto(href);

    let info = await page.evaluate(() => {
        let infoObj = {};
        infoObj.imgSrc = document.querySelector('.bd > .pic-big > img').src;
        infoObj.intro = document.querySelector('.summary').innerHTML;
        infoObj.baseInfo.phone = document.querySelector('.tel > .content').innerHTML;
        infoObj.baseInfo.website = document.querySelector('.item-site > .content').innerHTML;
        infoObj.baseInfo.reftime = document.querySelector('.item-time > .content').innerHTML;
    });

    // 关闭页面
    page.close();
    return
}
module.exports = scenicSpotItem;
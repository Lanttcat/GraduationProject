/**
 * 数据请求处理层
 */

const Router = require('koa-router');
// const jwt = require('jsonwebtoken');

let route = new Router();

// 注册
route.post('/data/reUserInfo', async (ctx) => {
    // console.log('ddd');
    let name = ctx.request.body.rename,
        mail = ctx.request.body.remail,
        pwd = ctx.request.body.repwd;
    try {
        // let res = await register(name, mail, pwd);
        if (res) {
            // let lores =  await reloginModel(mail, pwd);
            console.log(lores);
            ctx.response.type = 'json';
            ctx.response.body = {
                data: lores
            }
        }
        else {
            ctx.response.type = 'json';
            ctx.response.body = {
                data: false
            }
        }
        
    }
    catch (err) {
        console.log(err);
    }
    
});


module.exports =  route;
/**
 * 数据请求处理层
 */

const Router = require('koa-router');
const crypto = require('crypto');

let userInfo = require('./api/userInfo/index');
// const jwt = require('jsonwebtoken');

let route = new Router();

function createdMd5(code) {
    let md5 = crypto.createHash('md5');

    let result = md5.update(code).digest('hex');

    return result;
}

route.get('/data/userInfo', async (ctx) =>{
    console.log(ctx.query);
    let phone = ctx.query.phone;
    try {
        let res = await userInfo.sms('17865163230');
        let data = res ? createdMd5(createdMd5(res.toString()).toString()) : 0;
        // console.log(res);
        ctx.response.type = 'json';
        ctx.response.body = {
            data: data
        }
        
    }
    catch (err) {
        console.log(err);
    }
});

// 注册
// route.post('/data/reUserInfo', async (ctx) => {
//     // console.log('ddd');
//     let name = ctx.request.body.rename,
//         mail = ctx.request.body.remail,
//         pwd = ctx.request.body.repwd;
//     try {
//         // let res = await register(name, mail, pwd);
//         if (res) {
//             // let lores =  await reloginModel(mail, pwd);
//             console.log(lores);
//             ctx.response.type = 'json';
//             ctx.response.body = {
//                 data: lores
//             }
//         }
//         else {
//             ctx.response.type = 'json';
//             ctx.response.body = {
//                 data: false
//             }
//         }
        
//     }
//     catch (err) {
//         console.log(err);
//     }
    
// });


module.exports =  route;
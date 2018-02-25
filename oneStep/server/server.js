/**
 * 数据请求处理层
 */

const Router = require('koa-router');
const crypto = require('crypto');

let user = require('./api/user');
// const jwt = require('jsonwebtoken');

let route = new Router();

function createdMd5(code) {
    let md5 = crypto.createHash('md5');

    let result = md5.update(code).digest('hex');

    return result;
}

route.get('/api/user', async (ctx) =>{
    // let {query} = ctx;
    let phone = ctx.query.userPhone;
    try {
        let res = await user.verificationCode('17865163230');
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

// 登录
route.post('/api/user', async (ctx) => {
    const { body } = ctx.request
    console.log(body);
    try {
        const user = await user.login(body);
        if (!user) {
            ctx.status = 401
            ctx.body = {
                message: '用户名错误',
            }
            return;
        }
        // 匹配密码是否相等
        if (await bcrypt.compare(body.password, user.password)) {
            ctx.status = 200
            ctx.body = {
            message: '登录成功',
            user: user.userInfo,
            // 生成 token 返回给客户端
            token: jsonwebtoken.sign({
                data: user,
                // 设置 token 过期时间
                exp: Math.floor(Date.now() / 1000) + (60 * 60), // 60 seconds * 60 minutes = 1 hour
            }, secret),
            }
        } else {
            ctx.status = 401
            ctx.body = {
            message: '密码错误',
            }
        }
    } catch (error) {
        ctx.throw(500)
    }
    
});


module.exports =  route;
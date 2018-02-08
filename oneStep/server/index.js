/**
 * @file 创建Koa实例，use必要的组件
 * @author lanyixing@live.com
 */

const Koa = require('koa');
const route = require('./server.js');
const bodyParser = require('koa-bodyparser');

let app = new Koa();

// 加入必要的插件
app.use(bodyParser());
app.use(route.routes());

module.exports = app;
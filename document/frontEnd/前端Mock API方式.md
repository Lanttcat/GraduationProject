# 前端Mock API方式

[原文链接：Mock数据](https://segmentfault.com/a/1190000013220134)

[webpack-api-mocker](https://github.com/jaywcjlove/webpack-api-mocker) 是一个为 REST API 创建 mock 的 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 中间件。 当您尝试在没有实际的 REST API 服务器的情况下，测试您的应用程序时，这将会很有帮助。

## 安装

```
npm install webpack-api-mocker --save-dev
```

## 使用

定义API，假设我们讲API放到一个独立文件 `mocker.js` 中, 下面我们定义四个 `API`，每个 `API` 都放到 `json` 的 `key` 和 `value`中，如下：

```
const proxy = {
  'GET /api/user': {id: 1, username: 'kenny', sex: 6 },
  'GET /api/user/list': [
    {id: 1, username: 'kenny', sex: 6 },
    {id: 2, username: 'kenny', sex: 6 }
  ],
  'POST /api/login/account': (req, res) => {
    const { password, username } = req.body;
    if (password === '888888' && username === 'admin') {
      return res.send({
        status: 'ok',
        code: 0,
        token: "sdfsdfsdfdsf",
        data: {id: 1, username: 'kenny', sex: 6 }
      });
    } else {
      return res.send({status: 'error', code: 403 });
    }
  },
  'DELETE /api/user/:id': (req, res) => {
    console.log('---->', req.body)
    console.log('---->', req.params.id)
    res.send({ status: 'ok', message: '删除成功！' });
  }
}
module.exports = proxy;
```

上面的 `key` 比较特殊，由 `methd` 和 `path` 组合，中间一个空格间隔，如：`GET /api/user`。`value` 可以是 `json` 或者 `函数`。

## Koa中使用

```
const Koa = require('Koa');
+ const apiMocker = require('webpack-api-mocker');
+ const mocker = require('./mocker')

const app = new Koa();

+ app.use(apiMocker(app, mocker));
app.listen(8080);
```
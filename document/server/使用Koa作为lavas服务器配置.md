# 使用Koa作为lavas服务器配置

### server.prod.js

```javascript
const LavasCore = require('lavas-core-vue');
// lavas 默认使用express，我们需要安装完koa后替换，
// 为了结构清晰，我们建立专门的js文件，来返回Koa实例
// 这样我们的服务层和展示层是相对分离的
let app = require('./server/index');

let port = process.env.PORT || 3000;

let core = new LavasCore(__dirname);

core.init(process.env.NODE_ENV || 'production')
    .then(() => core.runAfterBuild())
    .then(() => {
        app.use(core.koaMiddleware());
        app.listen(port, () => {
            console.log('server started at localhost:' + port);
        });
    }).catch(err => {
        console.log(err);
    });

// catch promise error
process.on('unhandledRejection', (err, promise) => {
    console.log('in unhandledRejection');
    console.log(err);
    // cannot redirect without ctx!
});

```

### server/index.js

```javascript
/**
 * @file 创建Koa实例，use必要的组件
 */

// 我们可以在这里引入中间件，而不显得混乱
const Koa = require('koa');
const route = require('./server.js');
const bodyParser = require('koa-bodyparser');

let app = new Koa();

// 加入必要的插件
app.use(bodyParser());
app.use(route.routes());

module.exports = app;
```


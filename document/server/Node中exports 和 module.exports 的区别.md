# Node中exports 和 module.exports 的区别

编写Node模块的时候，我们关注ruquire、exports、moudle几个变量就可以。

在 node 的 js 模块里可以直接调用 exports 和 module 两个“全局”变量，但是 exports 是 module.exports 的一个引用。

```javascript
//plus.js
function plus(a,b){
  return a+b;
}
// 这样导出的 plus 是作为 exports 的一个方法被导出的
exports.plus = plus;

// main.js
var Plus = require('plus');
console.log(Plus.plus(1,2)); // 左边的 Plus 是 require 过来的模块名，右边的是它的 plus 方法。
// require 是对 Node.js 实现查找模块的 Module._load 实例的引用
// __finename 和 __dirname 是 Node.js 在查找该模块后找到的模块名称和模块绝对路径
(function(exports,require,module,__filename,__dirname){
  function plus(a,b){
    return a+b;
  }
  exports.plus = plus;
})

// plus.js
function plus(a,b){
  return a+b ;
}
module.exports = plus;
// main.js
var plus = require('plus');
console.log(plus(1,2));
exports = module.exports = {};

```

1. exports 是 module.exports 的一个引用
2. module.exports 初始值为一个空对象 {}，所以 exports 初始值也是 {}
3. require 引用模块后，返回的是 module.exports 而不是 exports!!!!!
4. exports.xxx 相当于在导出对象上挂属性，该属性对调用模块直接可见
5. exports = 相当于给 exports 对象重新赋值，调用模块不能访问 exports 对象及其属性
6. 如果此模块是一个类，就应该直接赋值 module.exports，这样调用者就是一个类构造器，可以直接 new 实例



[转载自：export 和 module.export 的区别](https://www.jianshu.com/p/e452203d56c4)


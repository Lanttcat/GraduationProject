# Mongodb学习 笔记

## 连接到数据库

```javascript

// 连接到数据库
let mongoose = require('mongoose');
mongoose.connect('mongodb://<username>:<password>@<host>');
```

## Schema

传统的关系型数据库插入数据之前必须先定义数据表，可以说，在关系型数据库中，一个数据表就是一个数据架构。它预先定义了开发者可以使用的数据模型。然而在非关系型数据库中数据架构仍然是有用的，可以使人以易读的方式来描述数据库中的数据内容，并为这些数据定义一些规则。

### 数据类型

- **String**：字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。
- **Integer**：整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。
- **Boolean**：布尔值。用于存储布尔值（真/假）。
- **Double**：双精度浮点值。用于存储浮点值。
- **Min/Max keys**：将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。
- **Arrays**：用于将数组或列表或多个值存储为一个键。
- **Timestamp**：时间戳。记录文档修改或添加的具体时间。
- **Object**：用于内嵌文档。
- **Null**：用于创建空值。
- **Symbol**：符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。
- **Date**：日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。
- **Object ID**：对象 ID。用于创建文档的 ID。
- **Binary Data**：二进制数据。用于存储二进制数据。
- **Code**：代码类型。用于在文档中存储 JavaScript 代码。
- **Regular expression**：正则表达式类型。用于存储正则表达式。

### 创建代码

```javascript
// 准备工作
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 开始定义Schema
var phoneSchema = new Schema({
	device 		: String,    //设备名称
	isSmart 	: Boolean,   //是否为智能手机
	releaseTime	: Date,      //发布时间 
	price		: Number,    //售价
	apps		: [{name : String}], //手机中安装的App名称,是数组
	manufacturer: {         //手机厂商
		name 	: String,   //厂商名称
		country	: String    //厂商国籍
	}
});

// 动态扩展
phoneSchma.add({color : 'string'})
```

### 使用Schema

Schema只是定义了数据结构，对数据具体的增删查改都需要Model来执行。

```
var Phone = mongoose.model('Phone', phoneSchema);

// 创建数据实例
var iPhoneSE = new Phone(
	{
	  device    : "iPhone SE",
	  isSmart   : "true",
	  releaseTime : "2016-03-21 10:00:00",
	  price   : 4999,
	  apps    : [{name : "Safari"}, {name : "Map"}, {name : "Tinder"}],
	  manufacturer: {
	    name  : "Apple",
	    country" : "The United States"
	  }
	}
);
```


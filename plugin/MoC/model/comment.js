let mongo = require('mongoose');

mongo.connect('mongodb://nikolan:123456@123.207.150.130:27017/oneStepDB');
let Schema = mongo.Schema;

// 错误信息
const msgStatusText = {
    error: '评论失败，请稍后再次尝试',
    success: '评论成功'
}

// 定义Schema
let articleSchema = new Schema({
    articleId: Number,
    articleContent: String,
    userId: Number,
    userName: String,
    commentArray: [
        {
            parentNodeId: Number,
            parentNodeName: String,
            content: String,
            commentCount: Number,
            zanCount: Number,
            commentTme: Date
        }
    ],
    creatTime: Date,
    similarArticle: [
        {
            articleId: Number
        }
    ]
}, {collection: 'article'});

let Article = mongo.model('article', articleSchema);

// ------------------相关方法

/**
 * 插入文章
 */

function addArticle(info) {
    let msg = {};
    let newArticle = new Article({
        articleId: info.articleId,
        userId: info.userId,
        userName: info.userName
    });

    newArticle.save((err, item) => {
        if (err) {
            msg.status = 0;
            msg.text = msgStatusText.error;
            console.log('ddddd')
        } else {
            msg.status = 1;
            msg.text = msgStatusText.success;
            console.log('rrr')
        }
    });

    return msg;

}

/**
 * 查询文章
 */

articleSchema.statics.queryArticle = function(aid) {
    let data = {};
    this.find({userId: aid}, (err, doc) => {
        if (err) {
            console.log(err);
        }
        else {
            data.doc = doc;
            console.log(doc);
        }
    });
    return data;
}

function addComment(query, newData) {
    // https://codeday.me/bug/20180204/128355.html
    // https://cnodejs.org/topic/548e54d157fd3ae46b233502
    Article.findOneAndUpdate(query, {'$addToSet':{commentArray: {content: 4444}}}, (err, doc) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(doc);
        }
    })
}
// 关闭连接
// mongoose.disconnect();

// 添加评论
// function insertComment(info) {
//     let newComment = new Comment({
//         articleId: info.articleId,
//         userId: info.userId,
//         userName: info.userName,
//         parentNodeId: info.parentNodeId,
//         parentNodeName: info.parentNodeName,
//         content: info.content,
//         commentCount: info.commentCount,
//         zanCount: info.zanCount,
//         time: new Date().getTime()
//     })
    
//     newComment.save((err, phone) => {
//         if (err) {
//             msg.status = 0;
//             msg.text = msgStatusText.error;
//         } else {
//             msg.status = 1;
//             msg.text = msgStatusText.success;
//         }
//     });

//     return msg;
// }

/**
 * 查询当前文章的所有评论
 */
function queryAllComment(aid) {

}
// let testInfo = {
//     articleId: 11111,
//     userId: 3333,
//     userName: 'dadadsa'
// }
// addArticle(testInfo);
// Article.queryArticle(3333);
addComment({userId: 4444});

exports.addArticle = addArticle;
exports.queryArticle = Article.queryArticle
exports.addComment = addComment;
exports.queryAllComment = queryAllComment;
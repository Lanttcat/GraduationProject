let mongoose = require('mongoose');

mongoose.connect('mongodb://nikolan:123456@123.207.150.130:27017/oneStepDB');

let Schema = mongoose.Schema;

let commentSchema = new Schema({
    articleId: Number,
    userId: Number,
    userName: String,
    parentNodeId: Number,
    parentNodeName: String,
    content: String,
    commentCount: Number,
    zanCount: Number,
    time: Date
});

let Comment = mongoose.model('comments', commentSchema);

let testCom = new Comment({
    articleId: 11111,
    userId: 1111122,
    userName: 'String',
    parentNodeId: 444444,
    parentNodeName: 'adadadafadfa',
    content: 'dsadadacadvafvfvvvvvvvvvvvvvvvvvvv',
    commentCount: 4567,
    zanCount: 234567,
    time: new Date().getTime()
})

testCom.save((err, phone) => {
    if (err) {
		console.log(err);
	} else {
		console.log('Phone[' + phone.userId + '] saved.');
	}
})
console.log('00000000000');
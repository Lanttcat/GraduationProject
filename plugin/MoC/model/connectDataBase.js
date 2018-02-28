let mongoose = require('mongoose');

async function mongo(params) {
    await mongoose.connect('mongodb://nikolan:123456@123.207.150.130:27017/oneStepDB');
    return mongoose
}


module.exports = mongo
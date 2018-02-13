/**
 * @file 连接数据库
 * @author lanyixing(lanyixing@baiud.com)
 */

const mysql = require('mysql');

// 设置数据库配置
const isProduct = process.env.NODE_ENV === 'production';

// headless
const dbConfig = {
    prod: {
        connectionLimit : 10,
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '12356789',
        database: 'onestep'
    },
    dev: {
        connectionLimit : 10,
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '12356789',
        database: 'onestep'
    }
};



/**
 * 初始化数据库实例
 *
 * @inner
 * @param {Object} config 数据库配置数据
 * @return {Object}
 */
function initDB(config) {
    try {
        let pool  = mysql.createPool(config);
        return pool;
    }
    catch (e) {
        return null;
    }
}

// 初始化
function init() {
    // 数据库操作
    let env = isProduct ? 'prod' : 'dev';
    let dbItem = dbConfig[env];
    // 初始化数据库操作
    let pool = initDB(dbItem);
    return pool;
}

module.exports = init;


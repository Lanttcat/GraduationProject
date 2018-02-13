let initDatabase = require('./connectDatabase.js');
let Log = require('../log/index');

let mysqlConnectPool = {};

/**
 * 数据库操作
 *
 * @inner
 * @param {Object} dbConn 数据库实例句柄
 * @param {string} sql sql命令
 */
function sqlQuery(sql) {
    // 需要建立失败状态处理
    return new Promise((resolve, reject) => {
        pool.query(sql, function (error, results, field) {
            if (error) {
                reject();
            }
            else {
                resolve(results);
            }
        });
    });
}

(() => {
    // 初始化数据库
    var poll = initDatabase();

    // 数据库连接错误处理
    if (!poll) {
        // 这里抛出错误
        let logger = new Log();
        logger.log({
            site: __filename,
            text: '数据库连接错误'
        });
        return;
    }

    // 初始化数据库连接池 避免重复建立
    mysqlConnectPool = mysqlConnectPool || poll;
})();

module.exports = sqlQuery;
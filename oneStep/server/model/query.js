let initDB = require('./db.js').init;

let pool = {};
/**
 * 数据库操作
 *
 * @inner
 * @param {Object} dbConn 数据库实例句柄
 * @param {string} sql sql命令
 */
function query(sql) {
    return new Promise(resolve => {
        pool.query(sql, function (error, results, field) {
            if (error) {
                resolve('失败');
            }
            else {
                resolve(results);
            }
        });
    });
}

function queryInit () {
    pool = initDB();
}
queryInit();

exports.query = query;
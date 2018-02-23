/**
 * 用户登录相关
 */

let query = require('../model/query');

/**
 * 云通信基础能力业务短信发送、查询详情。
 */
const SMSClient = require('@alicloud/sms-sdk');

// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAIc4fl7xr9G8Un';
const secretAccessKey = 'Es8cipUuolxlBmL2Jh5xRSJKtdCTW3';

//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey});


function createCode() {
    // 主要利用数学计算
    let codeRandom =  Math.round(Math.random()*10000);

    return codeRandom;
}

let user = {
    registration: async (username, password) => {
        let sql = `INSERT INTO zuizuo_db.userinfo (username, userstatus, usermail, password) VALUES ('${name}', '1', '${mail}', '${pwd}');`;
        try {
            let res = await query(sql);
            return res;
        }
        catch (e) {
            console.log(e);
            return '002';
        }
    },
    verificationCode: async (phoneNum) => {
        // 返回的数据格式
        // 1. code 2. null
        let phone = phoneNum;
        let code = createCode();
        try {
            let res = await smsClient.sendSMS({
                PhoneNumbers: phone,
                SignName: 'OneStep茶途',
                TemplateCode: 'SMS_125116796',
                TemplateParam: `{"code":${code}}`
            });
            console.log(res);
            code = res.Code === 'OK' ? code : null;

            return code;
            
        }
        catch (e) {
            console.log(e);
        }
    },
    login: async (usermail, pwd) => {
        let sql = `select id, userstatus, usermail, username, teaminfo.teamid, teamname, teamsite, creattime, teamscorewen, teamscorewu, 
                val_defend, val_shoot, val_un, val_pass, val_bt, wen, wu, member, teamslogan
                from userinfo,teaminfo 
                where usermail = '${usermail}' and password = '${pwd}' and userinfo.teamid = teaminfo.teamid;`;
        try {
            let res = await query(sql);
            return res;
        }
        catch (e) {
            console.log(e);
            return '002';
        }
    }
}
module.exports = user;
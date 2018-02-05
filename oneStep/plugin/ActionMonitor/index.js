/**
 * @file 前端监控
 * @author lanyixing
 */

let timeLog = {};
let ActionMonitor = {};
let initTime = 0;

function nextRouterStayTime(route) {
    // 需要获取所有的路由
    let routeEx = route;
    let preName = route.name;
    // 初始化时间
    if (preName) {
        let timeDiff = (new Date()).getTime() - initTime;

        timeLog[preName] = timeLog[preName] ? timeLog[preName] : 0;
        timeLog[preName] += timeDiff;
    }
        
    initTime = (new Date()).getTime();
}

export default nextRouterStayTime;
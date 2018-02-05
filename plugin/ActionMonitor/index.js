/**
 * @file 前端监控
 * @author lanyixing
 */
let ActionMonitor = {}

ActionMonitor.install = (Vue, options) => {
    Vue.prototype.$nnnn = () => {
        console.log('ddddd');
    };
}

// var ActionMonitor = function () {
//     this.name = 'ActionMonitor'
// }

// console.log('2222');
// function install (Vue) {
//     console.log('111');
//     console.log(Vue);
// }
// ActionMonitor.install = install;

export default ActionMonitor;
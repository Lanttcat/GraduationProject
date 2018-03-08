/**
 * @file appShell/appBottomNav module
 * @author lavas
 */

export const SET_APP_BOTTOM = 'SET_APP_BOTTOM';

export const state = () => {
    return {

        /**
         * 是否展示顶部导航栏
         *
         * @type {boolean}
         */
        show: true,

        /**
         * 导航按钮列表
         *
         * @type {Array.<Object>}
         */
        navs: [
            {
                // 按钮的名字
                name: 'index',

                // 显示的 icon
                icon: '#icon-weizhi',

                // 显示的文字
                text: '主页',

                // 是否是当前激活的
                active: true,

                // 路由
                route: {
                    name: 'index',
                    path: '/'
                },
                center: false
            },
            {
                name: 'gonglue',
                icon: '#icon-faxian',
                text: '攻略',
                route: {
                    name: 'gonglue',
                    path: '/gonglue'
                },
                center: false
            },
            {
                name: 'edit',
                icon: '#icon-add',
                text: '',
                route: {
                    name: 'edit',
                    path: '/edit'
                },
                center: true
            },
            {
                name: 'companion',
                icon: '#icon-zhishipai',
                text: '陪玩',
                route: {
                    name: 'companion',
                    path: '/companion'
                },
                center: false
            },
            {
                name: 'User',
                icon: '#icon-nanshi',
                text: '我的',
                route: {
                    name: 'user',
                    path: '/user'
                },
                center: false
            }
        ]
    };
};

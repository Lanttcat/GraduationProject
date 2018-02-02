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
                    path: 'edit'
                },
                center: true
            },
            {
                name: 'peiwan',
                icon: '#icon-zhishipai',
                text: '陪玩',
                route: {
                    name: 'home',
                    path: '/'
                },
                center: false
            },
            {
                name: 'user',
                icon: '#icon-nanshi',
                text: '我的',
                route: '/user',
                center: false
            }
        ]
    };
};

export const mutations = {
    [SET_APP_BOTTOM](state, appBottonNav) {
        state = Object.assign(state, appBottonNav);
    }
};

export const actions = {

    /**
     * 设置顶部导航条
     *
     * @param {Function} commit commit
     * @param {Object} appHeader appHeader
     */
    setAppHeader({commit}, appBottonNav) {
        commit(SET_APP_BOTTOM, appBottonNav);
    }
};

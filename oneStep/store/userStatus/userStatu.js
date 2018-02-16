/**
 * 用户状态
 */

export let state = () => {
    return {
        /**
         * 用户登录状态 1. 登录 0： 未登录 2: 异常，需要设定自动注销
         */
        userInfo: {
            status: 1,
            phone: 1111,
            uid: '',
            userName: '',
            userSite: '',
            userIntro: ''
        }
    }
}

export const mutations = {
    syncUserInfo(state, appBottonNav) {
        state = Object.assign(state, appBottonNav);
    }
};

export const actions = {

    /**
     * 同步用户信息
     *
     * @param {Function} commit commit
     * @param {Object} appHeader appHeader
     */
    setUserInfo({commit}, appBottonNav) {
        commit('syncUserInfo', appBottonNav);
    }
};
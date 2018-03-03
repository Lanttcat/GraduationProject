/**
 * @file pageTransition module
 * @author lavas
 */

 const setMsgTip = 'SETMSGTIP'
export const state = () => {
    return {
        msgSwitch: false,
        msgText: ''
    };
};

export const mutations = {
    [setMsgTip](state, info) {
        state.msgSwitch = info.msgSwitch;
        state.msgText = info.msgText;
    }
};
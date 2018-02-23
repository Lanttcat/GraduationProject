/**
 * @file entry
 * @author lanyixing(lanyixing@baidu.com)
 */

import Vue from 'vue';
import Meta from 'vue-meta';
import axios from 'axios';

import {createRouter} from '@/.lavas/router';
import {createStore} from '@/.lavas/store';
import AppComponent from './App.vue';
import Vuetify from 'vuetify';
import {ActionMonitor} from '../plugin/ActionMonitor';

Vue.use(Meta);

Vue.use(Vuetify);

Vue.use(ActionMonitor);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

export function createApp() {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return {App, router, store};
}

if (module.hot) {
    module.hot.accept();
}

import 'babel-polyfill';

import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'

import App from './App';
import store from './store';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.config.devtools = true;

new Vue({
    el: 'body',
    components: { App },
    store: store
});
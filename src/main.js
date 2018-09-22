import Vue from 'vue';
import App from './App';
import fly from './utils/fly';
import './../static/weui.css';
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
Vue.prototype.$http = fly;
Vue.prototype.globalData = getApp();
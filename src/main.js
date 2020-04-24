import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/router';
import menu from './constants/Layout.contants';

import "font-awesome/css/font-awesome.css";

Vue.config.productionTip = false;

Vue.prototype.MENUS = menu;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

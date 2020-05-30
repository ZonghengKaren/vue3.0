import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './util/request'

Vue.config.productionTip = false;
Vue.prototype.$axios = request;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

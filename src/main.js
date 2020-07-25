import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './util/request'
import vant from 'vant'
import 'vant/lib/index.css';
import 'lib-flexible';

Vue.use(vant);
Vue.config.productionTip = false;
Vue.prototype.$axios = request;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

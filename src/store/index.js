import Vue from 'vue'
import Vuex from 'vuex'
import Vuextest from './modules/vuextest'

// 载入vuex
Vue.use(Vuex)

// 是否是测试环境
const isDebug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Vuextest
  },
  strict: isDebug,
  plugins: []
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'
import 'echarts-liquidfill'
import '@/assets/iconfont/iconfont.css' // 引入iconfont'
import './util/rem'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.use(dataV)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

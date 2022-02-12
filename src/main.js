import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './style/index.less'
// 加载 Vant组件库
import Vant from 'vant'
// 加载 Vant样式
import 'vant/lib/index.css'
// 加载动态设置rem基准值
import 'amfe-flexible'

Vue.config.productionTip = false

// 注册使用组件库
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

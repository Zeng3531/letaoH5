import Vue from 'vue'
import App from './App.vue'
//导入vantui 组件库
import './vantui.js'
// 导入样式规范文件
import './asset/css/normalize.css'
// 导入routes 模块
import router from './router/index.js'


new Vue({
  // 注册路由组件
  router,
  render: h => h(App)
}).$mount('#app')
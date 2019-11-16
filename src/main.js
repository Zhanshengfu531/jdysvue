import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import header from "./components/header"
import Footer from "./components/Footer"
import Qs from "qs"


Vue.config.productionTip = false

Vue.component("my-header",header)
Vue.component("my-footer",Footer)

// 引入第三方axios
import axios from "axios"
// 配置访问服务器基础路径
axios.defaults.baseURL = "http://127.0.0.1:3000/"
// 保存session信息
axios.defaults.withCredentials = true
// 将axios注册Vue实例中 注意顺序
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

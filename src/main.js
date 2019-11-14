import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import header from "./components/header"
import Footer from "./components/Footer"


Vue.config.productionTip = false

Vue.component("my-header",header)
Vue.component("my-footer",Footer)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

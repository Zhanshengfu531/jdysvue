import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Collections from './views/Collections'
import Add from './views/Add'
import Fun from './views/Fun'
import Coat from './views/Coat'
import Reg from './views/Reg'
import Login from './views/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/collections",component:Collections},
    {path:"/add",component:Add},
    {path:"/fun",component:Fun},
    {path:"/coat",component:Coat},
    {path:"/reg",component:Reg},
    {path:"/login",component:Login},
  ]
})

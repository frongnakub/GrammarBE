import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Manage from '@/components/Manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Manage',
      name: 'manage',
      component: Manage
    }
  ]
})

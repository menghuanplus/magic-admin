import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入 view 组件
import {Test, Login, Home, Dashboard, NotFound} from './views'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/test',
          name: 'test',
          component: Test
        },
        {
          path: '/404',
          name: '404',
          component: NotFound
        }
      ]
    },
    {
      path: '*', redirect: '/404'
    }
  ]
})

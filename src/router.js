import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/',
      component: () => import(/* webpackChunkName: "dash" */ './views/dashBoard.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          meta: { auth: true },
          component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
        },
        {
          path: '/about',
          name: 'about',
          meta: { auth: false },
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: '/list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
        }
      ]
    }
  ]
})

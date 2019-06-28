import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomePage from './components/HomePage'

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  ]
})

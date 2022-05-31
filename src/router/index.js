import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultView from '../views/DefaultView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DefaultView',
    component: DefaultView
  },
  {
    path: '/models',
    name: 'Models',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Models.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

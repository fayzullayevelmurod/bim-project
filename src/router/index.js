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
    component: () => import('../views/Models.vue')
  },
  {
    path: '/model_one:id',
    name: 'ModelOne',
    component: () => import('../views/ModelOne.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

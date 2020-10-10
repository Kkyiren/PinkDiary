import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/plan',
    component: () => import('../views/Plan.vue')
  },
  {
    path: '/homepage',
    component: () => import('../views/Homepage.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

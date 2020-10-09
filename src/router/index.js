import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=>import('../views/Home.vue'),
    children:[
      {
        path:'/',
        redirect:'/index'
      },
      {
        path:'/index',
        component:()=>import('../views/Index.vue')
      },
      {
        path:'/classify',
        component:()=>import('../views/Classify.vue')
      },
      {
        path:'/cart',
        component:()=>import('../views/Cart.vue')
      },
      {
        path:'/community',
        component:()=>import('../views/Community.vue')
      },
      {
        path:'/mine',
        component:()=>import('../views/Mine.vue')
      },
      {
        path:'/plan',
        component:()=>import('../views/Plan.vue')
      },
      {
        path:'/homepage',
        component:()=>import('../views/Homepage.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

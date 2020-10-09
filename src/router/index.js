import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  // {
  //   path: "/time",
  //   component: () => import("../views/TimeLine.vue")
  // },
  // 沈万生对应的页面 TallyBook && MemorialDay && Constellation
  // 图片资源路径 /src/assets/img/pink-09
  {
    path:"/tallyBook",
    component: () => import('../components/TallyBook.vue')
  },
  {
    path:"/memorialDay",
    component: () => import('../components/MemorialDay.vue')
  },
  {
    path:'/constellation',
    component: () => import('../components/Constellation.vue')
  },
  {
    path: "/index",
    component: () => import("../views/Index.vue")
  },
  {
    path: "/planet",
    component: () => import("../views/Planet.vue")
  },
  {
    path: "/diary",
    component: () => import("../views/Diary.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

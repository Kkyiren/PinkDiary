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
  },
  // 沈万生对应的页面 TallyBook && MemorialDay && Constellation
  // 图片资源路径 /src/assets/img/pink-09
  {
    path: "/tallyBook",
    component: () => import("../components/TallyBook.vue")
  },
  {
    path: "/memorialDay",
    component: () => import("../components/MemorialDay.vue")
  },
  {
    path: "/constellation",
    component: () => import("../components/Constellation.vue")
  },
  {
    path: "/mall",
    component: () => import("../views/NMall.vue")
  },
  {
    path: "/setup",
    component: () => import("../views/NSetup.vue")
  },
  {
    path: "/shop",
    component: () => import("../views/Shop.vue")
  },
  {
    path: "/community",
    component: () => import("../views/Community.vue"),
    children: [
      {
        path: "/community",
        redirect: "/hot"
      },
      {
        path: "/hot",
        component: () => import("../components/community/Hot.vue")
      },
      {
        path: "/project",
        component: () => import("../components/community/Project.vue")
      },
      {
        path: "/answer",
        component: () => import("../components/community/Answer.vue")
      }
    ]
  },
  {
    path: "/hotnovel",
    component: () => import("../views/HotNovel.vue")
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
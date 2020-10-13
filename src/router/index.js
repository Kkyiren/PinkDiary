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
  // 宝藏星球
  {
    path: "/diary",
    component: () => import("../views/Diary.vue")
  },
  // 日记页（首页点grid宫格日记进入）
  // 沈万生对应的页面 TallyBook && MemorialDay && Constellation
  // 图片资源路径 /src/assets/img/pink-09
  {
    path: "/tallyBook",
    component: () => import("../components/TallyBook.vue")
  },
  // 手账页（首页点grid宫格手账进入）
  {
    path: "/tallyAdd", //账本添加
    component: () => import("../components/TallyAdd.vue")
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
  // 可萌街
  {
    path: "/shopping",
    component: () => import("../views/shopping.vue"),
    children: [
      {
        path: "/shopping",
        redirect: "/choose"
      },
      {
        path: "/choose",
        component: () => import("../components/jin/choose.vue")
      },
      {
        path: "/Electrical",
        component: () => import("../components/jin/Electrical.vue")
      },
      {
        path: "/phone",
        component: () => import("../components/jin/phone.vue")
      },
      {
        path: "/close",
        component: () => import("../components/jin/close.vue")
      },
      {
        path: "/Computer",
        component: () => import("../components/jin/Computer.vue")
      },
      {
        path: "/beauty",
        component: () => import("../components/jin/beauty.vue")
      }
    ]
  },
  {
    path: "/mine",
    component: () => import("../views/Mine.vue")
  },
  {
    path: "/plan",
    component: () => import("../views/Plan.vue")
  },
  {
    path: "/homepage",
    component: () => import("../views/Homepage.vue")
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

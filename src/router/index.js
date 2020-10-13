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
    path: "/tallyAdd",
    component: () => import("../components/TallyAdd.vue")
  },
  //账本添加（手账页点击加号进入）
  {
    path: "/memorialDay",
    component: () => import("../components/MemorialDay.vue")
  },
  // 纪念日（首页点grid宫格纪念日进入）
  {
    path: "/constellation",
    component: () => import("../components/Constellation.vue")
  },
  // 星座（首页点grid宫格星座进入）
  {
    path: "/mall",
    component: () => import("../views/NMall.vue")
  },
  // 商城页
  {
    path: "/setup",
    component: () => import("../views/NSetup.vue")
  },
  // 设置页
  {
    path: "/shop",
    component: () => import("../views/Shop.vue")
  },
  // 更多（首页点grid宫格更多进入）
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
  // 社区页
  {
    path: "/hotnovel",
    component: () => import("../views/HotNovel.vue")
  },
  // 热门小说
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
  // 购物（首页点grid宫格购物进入）
  {
    path: "/mine",
    component: () => import("../views/Mine.vue")
  },
  // 我的页
  {
    path: "/plan",
    component: () => import("../views/Plan.vue")
  },
  // 计划表（首页点grid宫格计划表进入）
  {
    path: "/homepage",
    component: () => import("../views/Homepage.vue")
  },
  // 个人主页（我的页点个人主页进入）
  {
    path: "*",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

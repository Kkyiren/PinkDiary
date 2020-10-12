import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
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
  }, {
    path: "/riji",
    component: () => import("../views/Riji.vue")
  },
  {
    path: "/shouzhang",
    component: () => import("../views/Shouzhang.vue")
  },
  {
    path: "/nvwangka",
    component: () => import("../views/Nvwangka.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

<<<<<<< HEAD
const routes = [{
        path: "/",
        redirect: "/time"
    },
    {
        path: "/time",
        component: () =>
            import ("../views/TimeLine.vue")
    },
    {
        path: "/mall",
        component: () =>
            import ("../views/NMall.vue")
    },
    {
        path: "/setup",
        component: () =>
            import ("../views/NSetup.vue")
    }
=======
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
  }
>>>>>>> master
];

const router = new VueRouter({
    routes
});

export default router;
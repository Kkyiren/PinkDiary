import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

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
        path: "/shop",
        component: () =>
            import ("../views/Shop.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
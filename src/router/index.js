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
    }, {
        path: '/community',
        component: () =>
            import ('../views/Community.vue'),
        children: [{
            path: '/community',
            redirect: '/hot'
        }, {
            path: '/hot',
            component: () =>
                import ('../components/community/Hot.vue'),
        }, {
            path: '/project',
            component: () =>
                import ('../components/community/Project.vue'),
        }, {
            path: '/answer',
            component: () =>
                import ('../components/community/Answer.vue'),
        }, ]
    }
];

const router = new VueRouter({
    routes
});

export default router;
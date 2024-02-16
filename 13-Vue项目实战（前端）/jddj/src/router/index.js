import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/HomePage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "login" */ "../views/login/LoginPage.vue"
            ),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// to: 即将要进入的目标
// from: 当前导航正要离开的路由
// next?
router.beforeEach((to, form, next) => {});

export default router;

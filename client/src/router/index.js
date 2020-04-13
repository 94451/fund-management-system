import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index.vue"
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Notfound from "../views/404.vue"
import Home from "../views/Home.vue"
import Information from "../views/Information.vue"
import FundList from "../views/FundList.vue"



Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
        children: [{
                path: '/',
                component: Home
            },
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/information',
                name: 'information',
                component: Information
            },
            {
                path: '/fundlist',
                name: 'fundlist',
                component: FundList
            }
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '*',
        name: '/404',
        component: Notfound
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.eleToken ? true : false;
    if (to.path == '/login' || to.path == '/register') {
        next();
    } else {
        isLogin ? next() : next('/login');
    }
})

export default router;
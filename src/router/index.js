import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
//这个是直接导入
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Shopcar from "../views/Shopcar.vue";
import Index from "../views/Index.vue";
import GoodList from "../views/GoodList.vue";
import Price from "../views/Price.vue";


//创建路由对象
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home/index'
        },

        {
            component: Index,
            path: '/home',
            isMainPage: false,
            children: [
                {
                    component: Home,
                    path: 'index',
                    meta: {
                        name: "index",
                        isMainPage: true
                    }
                },

                {
                    component: Shopcar,
                    path: 'shopcar',
                    meta: {
                        name: "shopcar",
                        isMainPage: true
                    }
                },

                {
                    path: 'goodlist',
                    component: GoodList,
                    meta: {
                        name: 'goodlist',
                        title: '价格列表'
                    }
                },
                {
                    path: 'Price',
                    component: Price,
                    meta: {
                        name: 'Price',
                        title: '价格列表'
                    }
                },
                {
                    path: 'User',
                    component: User,
                    meta: {
                        name: 'User',
                        title: '价格列表'
                    }
                },
            ]
        },
    ]
})

// 取消转圈圈
NProgress.configure({
    showSpinner: false
})

// 创建路由守卫
// 前守卫 
router.beforeEach((to, from, next) => {
    // 开启网页加载进度条
    NProgress.start()
    next()
})

//后守卫
router.afterEach((to, from,) => {
    NProgress.done()
})



// 导出模块
export default router
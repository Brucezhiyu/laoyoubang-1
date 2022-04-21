import Vue from 'vue'
import VueRouter from 'vue-router'
// import Money from '@/views/Money.vue'
// import Labels from "@/views/Labels.vue";
// import Statistics from "@/views/Statistics.vue";
import Notfound from "@/views/Notfound.vue";
import My from "@/views/My.vue";
import Home from "@/views/Home.vue";
import Store from "@/views/Store.vue";
import Menu from "@/views/Menu.vue";

Vue.use(VueRouter)

const routes = [
    //三个页面，默认页面跳转到/home
    {
        path:'/',
        redirect:'/home'
    },
    {
        path: '/home',
        component:Home
    },
    {
        path: '/store',
        component: Store
    },
    {
        path:'/my',
        component: My
    },
    {
        path: '/menu',
        component: Menu
    },
    {
        path: '*',
        component: Notfound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

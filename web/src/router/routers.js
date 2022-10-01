import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '../layout/index'
import Home from '../views/Home'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location){
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

export const routerMap = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../login')
    },
    {
        path: '/Layout',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home
            }
        ]
    }
]

//  创建路由
const routers = new VueRouter({
    mode: 'history',
    routes: routerMap
})

export default routers
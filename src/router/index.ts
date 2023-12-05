import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Main from '../views/main/index.vue'
import TwoDimensionalMap from '../views/TwoDimensionalMap/index.vue'

const routerHistory = createWebHashHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Main,
            children: [
                {
                    // 当 /user/:id/profile 匹配成功
                    // UserProfile 将被渲染到 User 的 <router-view> 内部
                    path: 'TwoDimensionalMap',
                    component: TwoDimensionalMap,
                },
            ],
        },
    ]
})

export default router

import {createRouter, createWebHashHistory} from 'vue-router'
import {constantRoutes} from "@/router/routes";

const routerHistory = createWebHashHistory()

const router = createRouter({
    history: routerHistory,

    routes: constantRoutes,

})

export default router

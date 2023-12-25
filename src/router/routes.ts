import Main from "@/views/main/index.vue";
import twoDimensionalMap from "@/views/TwoDimensionalMap/index.vue";
import threeDimensionalMap from "@/views/ThreeDimensionalMap/index.vue";
import dataPresentation from "@/views/DataPresentation/index.vue";

export const constantRoutes = [

    {
        path: '/',
        redirect: '/TwoDimensionalMap',
        name: 'home',
        component: Main,
        children: [
            {
                path: 'TwoDimensionalMap',
                component: twoDimensionalMap,
            },
            {
                path: 'ThreeDimensionalMap',
                component: threeDimensionalMap,
            },
            {
                path: 'DataPresentation',
                component: dataPresentation,
            },
        ],
    },

]
  

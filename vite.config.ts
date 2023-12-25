import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Cesium from "vite-plugin-cesium";
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(), Cesium(),VueSetupExtend()
    ],
    server: {
        host: '0.0.0.0',
        cors: true, // 允许跨域

        // 设置代理，根据我们项目实际情况配置
        proxy: {
            '/GeoServer': { //apiTest是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会进到代理来
                target: 'http://223.2.45.130:57910/',
                changeOrigin: true, //是否跨域
                rewrite: (path) => path.replace('/GeoServer', '') //重写匹配的字段，如果不需要放在请求路径上，可以重写为""
            },
            '/api': { //apiTest是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会进到代理来
                target: 'http://223.2.45.130:57909/',
                changeOrigin: true, //是否跨域
                secure: false,  // 如果是https接口，需要配置这个参数
                rewrite: (path) => path.replace('/api', '') //重写匹配的字段，如果不需要放在请求路径上，可以重写为""
            },
        }
    },

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },

    transpileDependencies: ["@kitware/vtk.js"],
})

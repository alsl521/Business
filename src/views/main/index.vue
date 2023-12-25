<template>
  <el-container class="container">
    <!--  头  -->
    <el-header class="head">
      <div class="div2">
        <span>黄河流域水文模型耦合模拟系统</span>
      </div>
    </el-header>

    <el-container>
      <!--  左侧  -->
      <AsideBar></AsideBar>

      <!--  主要视图，用于展示  -->
      <el-main class="main">

        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

          <!-- 路由跳转-->
          <el-menu-item index="1">
            地图展示
          </el-menu-item>

          <!-- 路由跳转-->
          <el-menu-item index="2">
            科学可视化
          </el-menu-item>

          <!-- 路由跳转-->
          <el-menu-item index="3">
            数据可视化
          </el-menu-item>
        </el-menu>

        <router-view></router-view>
      </el-main>

    </el-container>

  </el-container>
</template>


<script setup lang="ts" name="MainPage">
import AsideBar from './AsideBar/index.vue'
import {useRouter, useRoute} from 'vue-router'
import {onMounted, ref} from "vue";

const activeIndex = ref('1')//激活的按钮
const router = useRouter()//router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，包含了所有的路由包含了许多关键的对象和属性。
const route = useRoute()// route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等

//确定默认激活的按钮
function setActiveIndex(){
  const routerIndex = route.path.split('/')[1]
  if (routerIndex === 'TwoDimensionalMap') {
    activeIndex.value = '1'
  } else if (routerIndex === 'ThreeDimensionalMap') {
    activeIndex.value = '2'
  } else if (routerIndex === 'DataPresentation') {
    activeIndex.value = '3'
  }
}

//依据激活的按钮推送到指定的路径
function handleSelect(index) {
  if (index === '1') {
    router.push('/TwoDimensionalMap');
  } else if (index === '2') {
    router.push('/ThreeDimensionalMap');
  } else if (index === '3') {
    router.push('/DataPresentation');
  }
}

onMounted(()=>{
  setActiveIndex()
})


</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
}

.aside {
  width: 200px;
  background: blue;
}

.main {
  width: calc(100vw - 200px);
  height: calc(100vh - 60px);
  padding: 0 !important; //去除内边距
  .el-menu-demo {
    height: 40px;
  }
}

.el-header {
  height: 60px;
  background-color: #108b96;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 40px;

  .div2 {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }
}

</style>
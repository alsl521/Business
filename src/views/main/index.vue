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
      <AsideBar></AsideBar> <!-- 引入侧边栏组件 -->

      <!--  主要视图，用于展示  -->
      <el-main class="main">

        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <!-- 路由跳转 -->
          <el-menu-item index="1">
            地图展示
          </el-menu-item>

          <!-- 路由跳转 -->
          <el-menu-item index="2">
            科学可视化
          </el-menu-item>

          <!-- 路由跳转 -->
          <el-menu-item index="3">
            数据可视化
          </el-menu-item>
        </el-menu>

        <router-view></router-view> <!-- 渲染路由组件的位置 -->
      </el-main>

    </el-container>

  </el-container>
</template>


<script setup lang="ts" name="MainPage">
import AsideBar from './AsideBar/index.vue' // 引入侧边栏组件
import {useRouter, useRoute} from 'vue-router' // 引入Vue Router中的钩子函数
import {onMounted, ref} from "vue"; // 引入Vue中的钩子函数

// 激活的按钮,使用ref创建响应式数据
const activeIndex = ref('1')

// Vue Router实例对象
const router = useRouter()

// 当前路由对象
const route = useRoute()

// 确定默认激活的按钮
function setActiveIndex() {
  //获取当前路由路径的第一个部分
  const routerIndex = route.path.split('/')[1]
  // 如果路由为'TwoDimensionalMap'
  if (routerIndex === 'TwoDimensionalMap') {
    //设置激活的按钮为1
    activeIndex.value = '1'
    // 如果路由为'VTKScientificVisualization'
  } else if (routerIndex === 'VTKScientificVisualization') {
    //设置激活的按钮为2
    activeIndex.value = '2'
    // 如果路由为'DataPresentation'
  } else if (routerIndex === 'DataPresentation') {
    //设置激活的按钮为3
    activeIndex.value = '3'
  }
}

// 根据激活的按钮跳转到指定的路径
function handleSelect(index: any) {
  // 如果激活的按钮为1
  if (index === '1') {
    // 跳转到'/TwoDimensionalMap'路径
    router.push('/TwoDimensionalMap');
    // 如果激活的按钮为2
  } else if (index === '2') {
    // 跳转到'/VTKScientificVisualization'路径
    router.push('/VTKScientificVisualization');
    // 如果激活的按钮为3
  } else if (index === '3') {
    // 跳转到'/DataPresentation'路径
    router.push('/DataPresentation');
  }
}

onMounted(() => {
  // 在组件挂载后调用设置默认激活的按钮函数
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
  width: 250px;
  background: blue;
}

.main {
  width: calc(100vw - 250px);
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
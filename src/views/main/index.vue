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
        <router-view></router-view>
      </el-main>

    </el-container>

  </el-container>
</template>


<script setup lang="ts">
import AsideBar from './AsideBar/index.vue'

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
  background: chartreuse;
}

.el-header {
  height: 60px;
  background-color: #373d41;
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
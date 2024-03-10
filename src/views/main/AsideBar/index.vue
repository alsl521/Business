<template>
  <div>
    <!-- 滚动条容器 -->
    <el-scrollbar class="scrollbar">
      <!-- 垂直菜单 -->
      <el-menu text-color="#fff"
               background-color="#006d87"
               class="el-menu-vertical-demo"
               unique-opened="true">
        <el-sub-menu index="1">
          <!--菜单一-->
          <template #title>
            <span>基础数据服务</span>
          </template>
          <el-sub-menu index="1-1">

            <template #title>基础地理数据</template>
            <el-menu-item index="1-1-1" @click="upLoadDialogStore.StudyAreaScopeDialogVisible=true">研究区范围
            </el-menu-item>

            <el-menu-item index="1-1-2">水系数据</el-menu-item>
            <el-menu-item index="1-1-3">行政区划</el-menu-item>
            <el-menu-item index="1-1-4">土地利用图</el-menu-item>
            <el-menu-item index="1-1-5">水文地质图</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="1-2">
            <template #title>监测数据</template>
            <el-sub-menu index="1-2-1">
              <template #title>河流监测站点</template>
              <el-menu-item index="1-2-1-1" @click="upLoadDialogStore.FLowRateDialogVisible=true">流量</el-menu-item>
              <el-menu-item index="1-2-1-2">水下地形</el-menu-item>
              <el-menu-item index="1-2-1-3">水位</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="1-2-2">
              <template #title>气象监测站点</template>
              <el-menu-item index="1-2-2-1">气温</el-menu-item>
              <el-menu-item index="1-2-2-2">大气压强</el-menu-item>
              <el-menu-item index="1-2-2-3">蒸发量</el-menu-item>
              <el-menu-item index="1-2-2-4">降雨量</el-menu-item>
              <el-menu-item index="1-2-2-5">太阳辐射</el-menu-item>
              <el-menu-item index="1-2-2-6">云量</el-menu-item>
              <el-menu-item index="1-2-2-7">风速风向</el-menu-item>
              <el-menu-item index="1-2-2-8">水温</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="1-3">
            <template #title>地形地貌数据</template>
            <el-menu-item index="1-3-1">DEM数据</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="1-4">
            <template #title>地质数据</template>
            <el-menu-item index="1-4-1">地质体概念数据</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <!--菜单二-->
        <el-sub-menu index="2">
          <template #title>
            <span>空间离散数据</span>
          </template>
          <el-menu-item index="2-1">SWMM空间离散</el-menu-item>
          <el-menu-item index="2-2">EFDC空间离散</el-menu-item>
          <el-menu-item index="2-3">MODFLOW空间离散</el-menu-item>
          <el-menu-item index="2-4">SWMM-EFDC交互单元</el-menu-item>
          <el-menu-item index="2-5">SWMM-MODFLOW交互单元</el-menu-item>
          <el-menu-item index="2-6">EFDC-MODFLOW交互单元</el-menu-item>
        </el-sub-menu>

        <!--菜单三-->
        <el-sub-menu index="3">
          <template #title>
            <span>模型数据</span>
          </template>
          <el-sub-menu index="3-1">
            <template #title>SWMM</template>
            <el-sub-menu index="3-1-1">
              <template #title>点文件</template>
              <el-menu-item index="3-1-1-1">雨量计数据</el-menu-item>
              <el-menu-item index="3-1-1-2">铰点数据</el-menu-item>
              <el-menu-item index="3-1-1-3">排放口数据</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3-1-2">
              <template #title>管网文件</template>
              <el-menu-item index="3-1-2-1">管网文件数据</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3-1-3">
              <template #title>参数设置</template>
              <el-menu-item index="3-1-1-1">HRU参数</el-menu-item>
              <el-menu-item index="3-1-1-2">雨量计参数</el-menu-item>
              <el-menu-item index="3-1-1-3">铰点参数</el-menu-item>
              <el-menu-item index="3-1-1-4">排放口参数</el-menu-item>
              <el-menu-item index="3-1-1-5">管网文件参数</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="3-2">
            <template #title>MODFLOW</template>
            <el-menu-item index="3-2-1">渗透（水力传导）</el-menu-item>
            <el-menu-item index="3-2-2">贮水（给水度）</el-menu-item>

            <el-sub-menu index="3-2-3">
              <template #title>参数设置</template>
              <el-menu-item index="3-2-3-1">蒸发蒸腾分区</el-menu-item>
              <el-sub-menu index="3-2-3-2">
                <template #title>垂向入渗分区</template>
                <el-menu-item index="3-2-3-2-1">降雨入渗分区</el-menu-item>
                <el-menu-item index="3-2-3-2-2">越流补给分区</el-menu-item>
              </el-sub-menu>

              <el-menu-item index="3-2-4">时间离散</el-menu-item>
              <el-menu-item index="3-2-5">初始水位</el-menu-item>

              <el-sub-menu index="3-2-6">
                <template #title>模拟条件</template>
                <el-sub-menu index="3-2-6-1">
                  <template #title>边界条件</template>
                  <el-menu-item index="3-2-6-1-1">水位边界</el-menu-item>
                  <el-menu-item index="3-2-6-1-2">流量边界</el-menu-item>
                  <el-menu-item index="3-2-6-1-3">混合边界</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="3-2-6-2">
                  <template #title>应力条件</template>
                  <el-menu-item index="3-2-6-2-1">排水沟渠</el-menu-item>
                  <el-menu-item index="3-2-6-2-2">开采井</el-menu-item>
                  <el-menu-item index="3-2-6-2-3">降雨入渗</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>

              <el-menu-item index="3-2-7">路表河流</el-menu-item>
              <el-menu-item index="3-2-8">地面沉降</el-menu-item>
              <el-menu-item index="3-2-9">地下构筑物</el-menu-item>
              <el-menu-item index="3-2-10">地下构筑物</el-menu-item>
            </el-sub-menu>

          </el-sub-menu>

          <el-sub-menu index="3-3">
            <template #title>EFDC</template>
            <el-menu-item index="3-3-1">时间离散</el-menu-item>
            <el-menu-item index="3-3-2">边界条件</el-menu-item>
            <el-sub-menu index="3-3-3">
              <template #title>参数设置</template>
              <el-menu-item index="3-3-3-1">空间恒定的水平扩散系数</el-menu-item>
              <el-menu-item index="3-3-3-2">Smagorinsky参数</el-menu-item>
              <el-menu-item index="3-3-3-3">背景粘度</el-menu-item>
              <el-menu-item index="3-3-3-4">背景扩散系数</el-menu-item>
              <el-menu-item index="3-3-3-5">最大紊流粘度</el-menu-item>
              <el-menu-item index="3-3-3-6">最大紊流扩散系数</el-menu-item>
              <el-menu-item index="3-3-3-7">粗糙度</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-sub-menu>

        <!--菜单四-->
        <el-sub-menu index="4">
          <template #title>
            <span>模型运算</span>
          </template>
          <el-menu-item index="4-1">模型数据验证</el-menu-item>
          <el-menu-item index="4-2">模型耦合参数设定</el-menu-item>
          <el-menu-item index="4-3">模型耦合运行</el-menu-item>
        </el-sub-menu>

        <!--菜单五-->
        <el-sub-menu index="5">
          <template #title>
            <span>结果展示</span>
          </template>
          <el-menu-item index="5-1">图表</el-menu-item>
          <el-menu-item index="5-2">流场</el-menu-item>
          <el-menu-item index="5-3">专题图</el-menu-item>
        </el-sub-menu>

      </el-menu>

    </el-scrollbar>
  </div>

  <StudyAreaScope v-if="upLoadDialogStore.StudyAreaScopeDialogVisible"></StudyAreaScope>
  <FlowRate v-if="upLoadDialogStore.FLowRateDialogVisible"></FlowRate>

</template>

<script lang="ts" setup name="AsideBar">
import {onMounted} from "vue"; // 引入Vue中的钩子函数
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
import StudyAreaScope from "@/components/UpLoadDialog/BasicDataService/BasicGeographicData/StudyAreaScope.vue";
import FlowRate from "@/components/UpLoadDialog/BasicDataService/MonitoringData/RiverMonitoringStation/FlowRate.vue";

// 使用UpLoadDialogStore
const upLoadDialogStore = useUpLoadDialogStore();
</script>

<style scoped lang="scss">
.scrollbar {
  width: 250px;
  height: calc(100vh - 60px);
  background: #006d87;
}
</style>

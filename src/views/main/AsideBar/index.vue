<template>
  <div>
    <!-- 滚动条容器 -->
    <el-scrollbar class="scrollbar">
      <!-- 垂直菜单 -->
      <el-menu text-color="#fff"
               background-color="#006d87"
               class="el-menu-vertical-demo"
               :unique-opened="true">
        <el-sub-menu index="1">
          <!--菜单一-->
          <template #title>
            <span>基础数据服务</span>
          </template>
          <el-sub-menu index="1-1">

            <template #title>基础地理数据</template>
            <el-menu-item index="1-1-1" @click="upLoadDialogStore.StudyAreaScopeDialogVisible=true">
              研究区范围
            </el-menu-item>

            <el-menu-item index="1-1-2" @click="upLoadDialogStore.RiverDialogVisible=true">
              水系数据
            </el-menu-item>

            <el-menu-item index="1-1-3" @click="upLoadDialogStore.AdministrativeDivisionDialogVisible=true">
              行政区划
            </el-menu-item>

            <el-menu-item index="1-1-4" @click="upLoadDialogStore.LandUseDialogVisible=true">
              土地利用图
            </el-menu-item>

            <el-menu-item index="1-1-5" @click="upLoadDialogStore.HydrogeologicalMapDialogVisible=true">
              水文地质图
            </el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="1-2">
            <template #title>监测数据</template>
            <el-sub-menu index="1-2-1">
              <template #title>河流监测站点</template>

              <el-menu-item index="1-2-1-1" @click="upLoadDialogStore.FLowRateDialogVisible=true">
                流量
              </el-menu-item>

              <el-menu-item index="1-2-1-2" @click="upLoadDialogStore.UnderwaterReliefDialogVisible=true">
                水下地形
              </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="1-2-2">
              <template #title>气象监测站点</template>
              <el-menu-item index="1-2-2-1" @click="upLoadDialogStore.TemperatureDialogVisible=true">
                气温
              </el-menu-item>

              <el-menu-item index="1-2-2-2" @click="upLoadDialogStore.AtmosphericPressureDialogVisible=true">
                大气压强
              </el-menu-item>

              <el-menu-item index="1-2-2-3" @click="upLoadDialogStore.EvaporationDialogVisible=true">
                蒸发量
              </el-menu-item>

              <el-menu-item index="1-2-2-4" @click="upLoadDialogStore.RainfallDialogVisible=true">
                降雨量
              </el-menu-item>

              <el-menu-item index="1-2-2-5" @click="upLoadDialogStore.SolarRadiationDialogVisible=true"
              >太阳辐射
              </el-menu-item>

              <el-menu-item index="1-2-2-6" @click="upLoadDialogStore.CloudCoverDialogVisible=true">
                云量
              </el-menu-item>

              <el-menu-item index="1-2-2-7" @click="upLoadDialogStore.WindSpeedAndDirectionDialogVisible=true">
                风速风向
              </el-menu-item>

              <el-menu-item index="1-2-2-8" @click="upLoadDialogStore.WaterTemperatureDialogVisible=true">
                水温
              </el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="1-3">
            <template #title>地形地貌数据</template>
            <el-menu-item index="1-3-1" @click="upLoadDialogStore.DEMDialogVisible=true">
              DEM数据
            </el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="1-4">
            <template #title>地质数据</template>
            <el-menu-item index="1-4-1" @click="upLoadDialogStore.GeologicBodyDialogVisible=true">
              地质体概念数据
            </el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <!--菜单二-->
        <el-sub-menu index="2">
          <template #title>
            <span>空间离散数据</span>
          </template>
          <el-menu-item index="2-1" @click="upLoadDialogStore.SWMMSpatialDiscreteDataDialogVisible=true">
            路面过程空间离散
          </el-menu-item>

          <el-menu-item index="2-2" @click="upLoadDialogStore.EFDCSpatialDiscreteDataDialogVisible=true">
            三维河道空间离散
          </el-menu-item>

          <el-menu-item index="2-3" @click="upLoadDialogStore.MODFLOWSpatialDiscreteDataDialogVisible=true">
            地下水空间离散
          </el-menu-item>

          <el-menu-item index="2-4" @click="upLoadDialogStore.SWMMandEFDCInteractiveUnitDialogVisible=true">
            路面过程-三维河道交互单元
          </el-menu-item>

          <el-menu-item index="2-5" @click="upLoadDialogStore.SWMMandMODFLOWInteractiveUnitDialogVisible=true">
            路面过程-地下水交互单元
          </el-menu-item>

          <el-menu-item index="2-6" @click="upLoadDialogStore.EFDCandMODFLOWInteractiveUnitDialogVisible=true">
            三维河道-地下水交互单元
          </el-menu-item>
        </el-sub-menu>

        <!--菜单三-->
        <el-sub-menu index="3">
          <template #title>
            <span>模型数据</span>
          </template>

          <el-menu-item index="3-0" @click="upLoadDialogStore.TotalTimeDispersionDialogVisible=true">
            总时间离散
          </el-menu-item>

          <el-sub-menu index="3-1">
            <template #title>路面过程</template>

            <el-sub-menu index="3-1-1">
              <template #title>空间离散</template>
              <el-menu-item-group title="点文件">
                <el-menu-item index="3-1-1-1"
                              @click="upLoadDialogStore.SWMMRainGaugeSpatialDispersionDialogVisible=true">
                  雨量计数据
                </el-menu-item>

                <el-menu-item index="3-1-1-2"
                              @click="upLoadDialogStore.SWMMJunctionSpatialDispersionDialogVisible=true">
                  节点数据
                </el-menu-item>

                <el-menu-item index="3-1-1-3">
                  排放口数据
                </el-menu-item>
              </el-menu-item-group>

              <el-menu-item-group title="线文件">
                <el-menu-item index="3-1-1-4">
                  管网文件数据
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>

            <el-menu-item index="3-1-2" @click="upLoadDialogStore.SWMMTimeDispersionDialogVisible=true">
              时间离散
            </el-menu-item>

            <el-sub-menu index="3-1-3">
              <template #title>参数设置</template>
              <el-menu-item-group title="面文件">
                <el-menu-item index="3-1-3-1" @click="upLoadDialogStore.SWMMHruParameterDispersionDialogVisible=true">
                  HRU参数
                </el-menu-item>
              </el-menu-item-group>

              <el-menu-item-group title="点文件">
                <el-menu-item index="3-1-3-2"
                              @click="upLoadDialogStore.SWMMRainGaugeParameterDispersionDialogVisible=true">
                  雨量计参数
                </el-menu-item>

                <el-menu-item index="3-1-3-3"
                              @click="upLoadDialogStore.SWMMJunctionParameterDispersionDialogVisible=true">
                  节点参数
                </el-menu-item>

                <el-menu-item index="3-1-3-4">
                  排放口参数
                </el-menu-item>
              </el-menu-item-group>

              <el-menu-item-group title="线文件">
                <el-menu-item index="3-1-3-5">
                  管网文件参数
                </el-menu-item>
              </el-menu-item-group>

            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="3-2">
            <template #title>地下水</template>

            <el-menu-item index="3-2-1" @click="upLoadDialogStore.MODFLOWInfiltrationDialogVisible=true">
              渗透（水力传导）
            </el-menu-item>

            <el-menu-item index="3-2-2" @click="upLoadDialogStore.MODFLOWStoreWaterDialogVisible=true">
              贮水（给水度）
            </el-menu-item>

            <el-sub-menu index="3-2-3">
              <template #title>应力条件分区</template>
              <el-menu-item index="3-2-3-1">
                蒸发蒸腾分区
              </el-menu-item>

              <el-sub-menu index="3-2-3-2">
                <template #title>垂向入渗分区</template>
                <el-menu-item index="3-2-3-2-1">
                  降雨入渗分区
                </el-menu-item>

                <el-menu-item index="3-2-3-2-2">
                  越流补给分区
                </el-menu-item>
              </el-sub-menu>
            </el-sub-menu>

            <el-menu-item index="3-2-4" @click="upLoadDialogStore.MODFLOWTimeDispersionDialogVisible=true">
              时间离散
            </el-menu-item>

            <el-menu-item index="3-2-5" @click="upLoadDialogStore.MODFLOWInitialWaterLevelDialogVisible=true">
              初始水位
            </el-menu-item>

            <el-sub-menu index="3-2-6">
              <template #title>模拟条件</template>
              <el-sub-menu index="3-2-6-1">
                <template #title>边界条件</template>
                <el-menu-item index="3-2-6-1-1">
                  水位边界
                </el-menu-item>

                <el-menu-item index="3-2-6-1-2">
                  流量边界
                </el-menu-item>

                <el-menu-item index="3-2-6-1-3">
                  混合边界
                </el-menu-item>
              </el-sub-menu>

              <el-sub-menu index="3-2-6-2">
                <template #title>应力条件</template>
                <el-menu-item index="3-2-6-2-1">
                  排水沟渠
                </el-menu-item>

                <el-menu-item index="3-2-6-2-2">
                  开采井
                </el-menu-item>

                <el-menu-item index="3-2-6-2-3">
                  降雨入渗
                </el-menu-item>
              </el-sub-menu>
            </el-sub-menu>

            <el-menu-item index="3-2-7" @click="upLoadDialogStore.MODFLOWSurfaceRiveDialogVisible=true">
              路表河流
            </el-menu-item>

            <el-menu-item index="3-2-8">
              地面沉降
            </el-menu-item>

            <el-menu-item index="3-2-9">
              地下构筑物
            </el-menu-item>

            <el-menu-item index="3-2-10">
              虚拟开挖
            </el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="3-3">
            <template #title>三维河道</template>
            <el-menu-item index="3-3-1" @click="upLoadDialogStore.EFDCTimeDispersionDialogVisible=true">
              时间离散
            </el-menu-item>

            <el-menu-item index="3-3-2" @click="upLoadDialogStore.EFDCInitialWaterLevelDialogVisible=true">
              初始水位
            </el-menu-item>

            <el-menu-item index="3-3-3">
              边界条件
            </el-menu-item>

            <el-menu-item index="3-3-4" @click="upLoadDialogStore.EFDCParameterDispersionDialogVisible=true">
              参数设置
            </el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <!--菜单四-->
        <el-sub-menu index="4">
          <template #title>
            <span>模型运算</span>
          </template>

          <el-menu-item index="4-1" @click="upLoadDialogStore.ModelCouplingParameterSettingDialogVisible=true">
            模型耦合参数设定
          </el-menu-item>

          <el-menu-item index="4-2" @click="upLoadDialogStore.ModelDataValidationDialogVisible=true">
            模型数据验证
          </el-menu-item>

          <el-menu-item index="4-3" @click="upLoadDialogStore.run_Models">
            模型耦合运行
          </el-menu-item>
        </el-sub-menu>

        <!--菜单五-->
        <el-sub-menu index="5">
          <template #title>
            <span>结果展示</span>
          </template>
          <el-menu-item index="5-1">
            图表
          </el-menu-item>

          <el-menu-item index="5-2">
            流场
          </el-menu-item>

          <el-menu-item index="5-3">
            专题图
          </el-menu-item>
        </el-sub-menu>

      </el-menu>

    </el-scrollbar>
  </div>

  <!-- 基础数据服务//基础地理数据 -->
  <StudyAreaScope v-if="upLoadDialogStore.StudyAreaScopeDialogVisible"></StudyAreaScope>
  <AdministrativeDivision v-if="upLoadDialogStore.AdministrativeDivisionDialogVisible"></AdministrativeDivision>
  <River v-if="upLoadDialogStore.RiverDialogVisible"></River>
  <LandUse v-if="upLoadDialogStore.LandUseDialogVisible"></LandUse>
  <HydrogeologicalMap v-if="upLoadDialogStore.HydrogeologicalMapDialogVisible"></HydrogeologicalMap>

  <!-- 基础数据服务//监测数据//河流监测站点 -->
  <FlowRate v-if="upLoadDialogStore.FLowRateDialogVisible"></FlowRate>
  <UnderwaterRelief v-if="upLoadDialogStore.UnderwaterReliefDialogVisible"></UnderwaterRelief>

  <!-- 基础数据服务//监测数据/气象监测站点 -->
  <AtmosphericPressure v-if="upLoadDialogStore.AtmosphericPressureDialogVisible"></AtmosphericPressure>
  <Evaporation v-if="upLoadDialogStore.EvaporationDialogVisible"></Evaporation>
  <Temperature v-if="upLoadDialogStore.TemperatureDialogVisible"></Temperature>
  <Rainfall v-if="upLoadDialogStore.RainfallDialogVisible"></Rainfall>
  <SolarRadiation v-if="upLoadDialogStore.SolarRadiationDialogVisible"></SolarRadiation>
  <CloudCover v-if="upLoadDialogStore.CloudCoverDialogVisible"></CloudCover>
  <WindSpeedAndDirection v-if="upLoadDialogStore.WindSpeedAndDirectionDialogVisible"></WindSpeedAndDirection>
  <WaterTemperature v-if="upLoadDialogStore.WaterTemperatureDialogVisible"></WaterTemperature>

  <DEMDialog v-if="upLoadDialogStore.DEMDialogVisible"></DEMDialog>

  <GeologicBodyDialog v-if="upLoadDialogStore.GeologicBodyDialogVisible"></GeologicBodyDialog>

  <!-- 空间离散数据 -->
  <SWMMSpatialDiscreteData v-if="upLoadDialogStore.SWMMSpatialDiscreteDataDialogVisible"></SWMMSpatialDiscreteData>
  <EFDCSpatialDiscreteData v-if="upLoadDialogStore.EFDCSpatialDiscreteDataDialogVisible"></EFDCSpatialDiscreteData>
  <MODFLOWSpatialDiscreteData
      v-if="upLoadDialogStore.MODFLOWSpatialDiscreteDataDialogVisible"></MODFLOWSpatialDiscreteData>
  <SWMMandEFDCInteractiveUnit
      v-if="upLoadDialogStore.SWMMandEFDCInteractiveUnitDialogVisible"></SWMMandEFDCInteractiveUnit>
  <SWMMandMODFLOWInteractiveUnit
      v-if="upLoadDialogStore.SWMMandMODFLOWInteractiveUnitDialogVisible"></SWMMandMODFLOWInteractiveUnit>
  <EFDCandMODFLOWInteractiveUnit
      v-if="upLoadDialogStore.EFDCandMODFLOWInteractiveUnitDialogVisible"></EFDCandMODFLOWInteractiveUnit>

  <TotalTimeDispersionDialog
      v-if="upLoadDialogStore.TotalTimeDispersionDialogVisible"></TotalTimeDispersionDialog>

  <!-- 模型数据//SWMM//空间离散 -->
  <SWMMRainGaugeSpatialDispersionDialog
      v-if="upLoadDialogStore.SWMMRainGaugeSpatialDispersionDialogVisible"></SWMMRainGaugeSpatialDispersionDialog>
  <SWMMJunctionSpatialDispersionDialog
      v-if="upLoadDialogStore.SWMMJunctionSpatialDispersionDialogVisible"></SWMMJunctionSpatialDispersionDialog>

  <!-- 模型数据//SWMM//时间离散 -->
  <SWMMTimeDispersionDialog
      v-if="upLoadDialogStore.SWMMTimeDispersionDialogVisible"></SWMMTimeDispersionDialog>

  <!-- 模型数据//SWMM//参数离散 -->
  <SWMMHruParameterDispersionDialog
      v-if="upLoadDialogStore.SWMMHruParameterDispersionDialogVisible"></SWMMHruParameterDispersionDialog>
  <SWMMJunctionParameterDispersionDialog
      v-if="upLoadDialogStore.SWMMJunctionParameterDispersionDialogVisible"></SWMMJunctionParameterDispersionDialog>
  <SWMMRainGaugeParameterDispersionDialog
      v-if="upLoadDialogStore.SWMMRainGaugeParameterDispersionDialogVisible"></SWMMRainGaugeParameterDispersionDialog>

  <!-- 模型数据//MODFLOW//渗透（水力传导） -->
  <MODFLOWInfiltrationDialog
      v-if="upLoadDialogStore.MODFLOWInfiltrationDialogVisible"></MODFLOWInfiltrationDialog>

  <!--  模型数据//MODFLOW//贮水（给水度）-->
  <MODFLOWStoreWaterDialog
      v-if="upLoadDialogStore.MODFLOWStoreWaterDialogVisible"></MODFLOWStoreWaterDialog>

  <!--  模型数据//MODFLOW//时间离散 -->
  <MODFLOWTimeDispersionDialog
      v-if="upLoadDialogStore.MODFLOWTimeDispersionDialogVisible"></MODFLOWTimeDispersionDialog>

  <!--  模型数据//MODFLOW//初始水位 -->
  <MODFLOWInitialWaterLevelDialog
      v-if="upLoadDialogStore.MODFLOWInitialWaterLevelDialogVisible"></MODFLOWInitialWaterLevelDialog>

  <!--  模型数据//MODFLOW//路表河流 -->
  <MODFLOWSurfaceRiveDialog
      v-if="upLoadDialogStore.MODFLOWSurfaceRiveDialogVisible"></MODFLOWSurfaceRiveDialog>

  <!--  模型数据//EFDC//时间离散 -->
  <EFDCTimeDispersionDialog
      v-if="upLoadDialogStore.EFDCTimeDispersionDialogVisible"></EFDCTimeDispersionDialog>

  <!--  模型数据//EFDC//参数离散 -->
  <EFDCParameterDispersionDialog
      v-if="upLoadDialogStore.EFDCParameterDispersionDialogVisible"></EFDCParameterDispersionDialog>

  <EFDCInitialWaterLevelDialog
      v-if="upLoadDialogStore.EFDCInitialWaterLevelDialogVisible"></EFDCInitialWaterLevelDialog>

  <ModelCouplingParameterSettingVue v-if="upLoadDialogStore.ModelCouplingParameterSettingDialogVisible"></ModelCouplingParameterSettingVue>

  <ModelDataValidationDialog  v-if="upLoadDialogStore.ModelDataValidationDialogVisible"></ModelDataValidationDialog>
</template>

<script lang="ts" setup name="AsideBar">
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
//基础数据服务//基础地理数据
import StudyAreaScope from "@/components/UpLoadDialog/BasicDataService/BasicGeographicData/StudyAreaScope.vue";
import AdministrativeDivision
  from "@/components/UpLoadDialog/BasicDataService/BasicGeographicData/AdministrativeDivision.vue";
import River  from "@/components/UpLoadDialog/BasicDataService/BasicGeographicData/River.vue";

//基础数据服务//监测数据//河流监测站点
import FlowRate from "@/components/UpLoadDialog/BasicDataService/MonitoringData/RiverMonitoringStation/FlowRate.vue";

//基础数据服务//监测数据/气象监测站点
import AtmosphericPressure
  from "@/components/UpLoadDialog/BasicDataService/MonitoringData/MeteorologyMonitoringStation/AtmosphericPressure.vue";
import Evaporation
  from "@/components/UpLoadDialog/BasicDataService/MonitoringData/MeteorologyMonitoringStation/Evaporation.vue";
import Temperature
  from "@/components/UpLoadDialog/BasicDataService/MonitoringData/MeteorologyMonitoringStation/Temperature.vue";
import Rainfall
  from "@/components/UpLoadDialog/BasicDataService/MonitoringData/MeteorologyMonitoringStation/Rainfall.vue";
import SolarRadiation
  from "@/components/UpLoadDialog/BasicDataService/MonitoringData/MeteorologyMonitoringStation/SolarRadiation.vue";
import CloudCover
  from "@/components/UpLoadDialog/BasicDataService/MonitoringData/MeteorologyMonitoringStation/CloudCover.vue";
import WindSpeedAndDirection
  from "@/components/UpLoadDialog/BasicDataService/MonitoringData/MeteorologyMonitoringStation/WindSpeedAndDirection.vue";
import WaterTemperature
  from "@/components/UpLoadDialog/BasicDataService/MonitoringData/MeteorologyMonitoringStation/WaterTemperature.vue";

//基础数据服务//地形地貌数据//DEM数据
import DEMDialog from "@/components/UpLoadDialog/BasicDataService/DEM/index.vue"

//基础数据服务//地质数据//地质体概念数据
import GeologicBodyDialog from "@/components/UpLoadDialog/BasicDataService/GeologicalBody/index.vue"

//空间离散数据
import SWMMSpatialDiscreteData from "@/components/UpLoadDialog/SpatialDiscreteData/SWMMSpatialDiscreteData.vue";
import EFDCSpatialDiscreteData from "@/components/UpLoadDialog/SpatialDiscreteData/EFDCSpatialDiscreteData.vue";
import MODFLOWSpatialDiscreteData from "@/components/UpLoadDialog/SpatialDiscreteData/MODFLOWSpatialDiscreteData.vue";
import EFDCandMODFLOWInteractiveUnit
  from "@/components/UpLoadDialog/SpatialDiscreteData/EFDCandMODFLOWInteractiveUnit.vue";
import SWMMandMODFLOWInteractiveUnit
  from "@/components/UpLoadDialog/SpatialDiscreteData/SWMMandMODFLOWInteractiveUnit.vue";
import SWMMandEFDCInteractiveUnit
  from "@/components/UpLoadDialog/SpatialDiscreteData/SWMMandEFDCInteractiveUnit.vue";

//总时间离散
import TotalTimeDispersionDialog from "@/components/UpLoadDialog/ModelData/TotalTimeDispersion/index.vue"

//模型数据/SWMM/空间离散数据
import SWMMRainGaugeSpatialDispersionDialog
  from "@/components/UpLoadDialog/ModelData/SWMM/SpatialDispersion/RainGauge.vue"
import SWMMJunctionSpatialDispersionDialog
  from "@/components/UpLoadDialog/ModelData/SWMM/SpatialDispersion/Junction.vue"

//模型数据//SWMM//时间离散
import SWMMTimeDispersionDialog from "@/components/UpLoadDialog/ModelData/SWMM/TimeDispersion/index.vue"

//模型数据//SWMM//参数离散
import SWMMHruParameterDispersionDialog from "@/components/UpLoadDialog/ModelData/SWMM/ParameterDispersion/Hru.vue"
import SWMMJunctionParameterDispersionDialog
  from "@/components/UpLoadDialog/ModelData/SWMM/ParameterDispersion/Junction.vue"
import SWMMRainGaugeParameterDispersionDialog
  from "@/components/UpLoadDialog/ModelData/SWMM/ParameterDispersion/RainGauge.vue"

//模型数据//MODFLOW//渗透（水力传导）
import MODFLOWInfiltrationDialog from "@/components/UpLoadDialog/ModelData/MODFLOW/Infiltration/index.vue"

//模型数据//MODFLOW//贮水（给水度）
import MODFLOWStoreWaterDialog from "@/components/UpLoadDialog/ModelData/MODFLOW/StoreWater/index.vue"

//模型数据//MODFLOW//时间离散
import MODFLOWTimeDispersionDialog from "@/components/UpLoadDialog/ModelData/MODFLOW/TimeDispersion/index.vue"

//模型数据//MODFLOW//初始水位
import MODFLOWInitialWaterLevelDialog from "@/components/UpLoadDialog/ModelData/MODFLOW/InitialWaterLevel/index.vue"

//模型数据//MODFLOW//路表河流
import MODFLOWSurfaceRiveDialog from "@/components/UpLoadDialog/ModelData/MODFLOW/SurfaceRivers/index.vue"

//模型数据//EFDC//时间离散
import EFDCTimeDispersionDialog from "@/components/UpLoadDialog/ModelData/EFDC/TimeDispersion/index.vue"

//模型数据//EFDC//参数离散
import EFDCParameterDispersionDialog from "@/components/UpLoadDialog/ModelData/EFDC/ParameterDispersion/index.vue"
import LandUse from "@/components/UpLoadDialog/BasicDataService/BasicGeographicData/LandUse.vue";
import UnderwaterRelief
  from "@/components/UpLoadDialog/BasicDataService/MonitoringData/RiverMonitoringStation/UnderwaterRelief.vue";
import HydrogeologicalMap from "@/components/UpLoadDialog/BasicDataService/BasicGeographicData/HydrogeologicalMap.vue";

import EFDCInitialWaterLevelDialog from "@/components/UpLoadDialog/ModelData/EFDC/InitialWaterLevel/index.vue"

import ModelCouplingParameterSettingVue from "@/components/modelRun/ModelCouplingParameterSetting.vue";
import ModelDataValidationDialog from "@/components/modelRun/ModelDataValidation.vue"

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

<template>
  <el-container>
    <el-main class="cesiumContainer">
      <div id="cesiumContainer"></div>
    </el-main>
    <el-aside class="elaside">

      <div @click="drawer = true" class="asideIcon">
        <img :src="'src/assets/MAP.svg'" alt="" style="height: 55px;width: 55px"/>
        <el-text style="color: white">场景视图</el-text>
      </div>

      <div @click="console.log('sss')" class="asideIcon">
        <img :src="'src/assets/layers.svg'" alt="" style="height: 55px;width: 55px"/>
        <el-text style="color: white">图层管理</el-text>
      </div>

    </el-aside>
  </el-container>

  <el-drawer
      v-model="drawer"
      title="选择"
      size="12%"
  >
    <div>
      <el-radio-group v-model="radio">
        <el-radio label="2D视图" value="2D视图" size="large" border @click="ChangeSceneMode(0)"
                  style="margin-top: 20px"> 2D视图
        </el-radio>
        <el-radio label="哥伦布视图" value="哥伦布视图" size="large" border @click="ChangeSceneMode(1)"
                  style="margin-top: 20px">哥伦布视图
        </el-radio>
        <el-radio label="3D视图" value="3D视图" size="large" border @click="ChangeSceneMode(2)"
                  style="margin-top: 20px">3D视图
        </el-radio>
      </el-radio-group>
    </div>
  </el-drawer>


</template>

<script setup lang="ts" name="TwoDimensionalMap">
import * as Cesium from "cesium";
import {getCurrentInstance, onMounted, onBeforeUnmount, watch, type ComponentInternalInstance, ref} from "vue";
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
import {useMapLayerStore} from "@/stores/MapLayer/MapLayerStore";

// 使用UpLoadDialogStore
const upLoadDialogStore = useUpLoadDialogStore();
// 使用UpLoadDialogStore
const mapLayerStore = useMapLayerStore();

//创建Cesium视图
const {appContext} = getCurrentInstance() as ComponentInternalInstance;
const global = appContext.config.globalProperties;
let viewer = global.$viewer;

//必须在挂载后引入cesium地图组件
onMounted(() => {
  viewer = new Cesium.Viewer("cesiumContainer", {
    baseLayer: Cesium.ImageryLayer.fromProviderAsync(
        Cesium.ArcGisMapServerImageryProvider.fromBasemapType(
            Cesium.ArcGisBaseMapType.SATELLITE, {enablePickFeatures: false}
        )
    ),
    selectionIndicator: false,//用于在选定对象上显示指示器的小部件。
    animation: false,// 隐藏左下角的仪表盘播放动画按钮
    shouldAnimate: false,// 是否显示动画
    timeline: false,// 隐藏底部时间轴
    baseLayerPicker: false,//图层选择器
    geocoder: false,//获取地理编码器
    navigationHelpButton: false,//导航帮助按钮
    fullscreenButton: false,// 是否显示全屏按钮
    homeButton: false,//是否显示Home按钮
    sceneModePicker: false,//是否显示3D/2D选择器
    infoBox: true,
  });
  getLayersFromUpLoadFiles()
  showLayersFromUpLoadFiles()

});

// 从上传的文件中获取是图层的内容
const getLayersFromUpLoadFiles = () => {
  upLoadDialogStore.uploadFiles.forEach(fileInfo => {
    mapLayerStore.increment(fileInfo)
  })
}

// 从上传的文件中获取是图层的内容
const showLayersFromUpLoadFiles = async () => {
  mapLayerStore.showLayers.forEach(layer => {

    let urls = layer.url.replace("http://localhost:8080", "/GeoServer");
    let layersName = "ModelCoupling:" + layer.name

    const wms = new Cesium.WebMapServiceImageryProvider({
      url: urls,
      layers: layersName,
      parameters: {
        service: 'WMS',
        transparent: true,
        format: "image/png",
      },
    })

    const imageryLayer = new Cesium.ImageryLayer(wms, null);
    viewer.imageryLayers.add(imageryLayer);

    // 设置相机的视图
    viewer.camera.setView({
      destination: Cesium.Rectangle.fromDegrees(110, 33.5, 116, 36)
    });
  })
}

const stopWatch = watch(upLoadDialogStore.uploadFiles, (newValue, oldValue) => {

  mapLayerStore.increment(newValue)

  let urls = newValue[newValue.length - 1].url.replace("http://localhost:8080", "/GeoServer");
  let layersName = "ModelCoupling:" + newValue[newValue.length - 1].name
  const wms = new Cesium.WebMapServiceImageryProvider({
    url: urls,
    layers: layersName,
    parameters: {
      service: 'WMS',
      transparent: true,
      format: "image/png",
    },
  })

  const imageryLayer = new Cesium.ImageryLayer(wms);
  viewer.imageryLayers.add(imageryLayer);

  // 设置相机的视图
  viewer.camera.setView({
    destination: Cesium.Rectangle.fromDegrees(110, 33.5, 118, 36.5)
  });


}, {deep: true})

const drawer = ref(false)
const radio = ref('3D视图')
const ChangeSceneMode = (value: number) => {
  if (value == 0) {
    // 2D 模式
    viewer.scene.morphTo2D(1);
  } else if (value == 1) {
    // 2.5D 哥伦布模式
    viewer.scene.morphToColumbusView(1);
  } else {
    // 3D 模式
    viewer.scene.morphTo3D(1);
  }
}


//销毁Cesium
onBeforeUnmount(() => {
  viewer.destroy();
});

</script>

<style scoped lang="scss">
#cesiumContainer {
  height: 100%;
  width: 100%;
}

.cesiumContainer {
  padding: 0;
  margin: 0;
  height: calc(100vh - 100px);
  width: calc(100vw - 50px);
}

.elaside {
  width: 70px;
  background: #006d86;
}

.asideIcon {
  height: 80px;
  width: 66px;
  text-align: center;
  margin: 5px auto;
  border: 3px solid var(--el-border-color);
  border-radius: 10px;
}

:deep(.cesium-viewer-bottom) {
  display: none;
}
</style>

<template>
  <div id="cesiumContainer"></div>
</template>

<script setup lang="ts" name="TwoDimensionalMap">
import * as Cesium from "cesium";
import {getCurrentInstance, onMounted, onBeforeUnmount, watch, type ComponentInternalInstance} from "vue";
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
// 使用UpLoadDialogStore
const upLoadDialogStore = useUpLoadDialogStore();

//创建Cesium视图
const {appContext} = getCurrentInstance() as ComponentInternalInstance;
const global = appContext.config.globalProperties;
let viewer = global.$viewer;

// 从上传的文件中获取是图层的内容
const showLayersFromUpLoadFiles = async () => {
}

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
    sceneModePicker: true,//是否显示3D/2D选择器
  });
  showLayersFromUpLoadFiles()
});

//销毁Cesium
onBeforeUnmount(() => {
  viewer.destroy();
});

const stopWatch = watch(upLoadDialogStore.uploadFiles, (newValue, oldValue) => {
  if (newValue[newValue.length - 1].type == "1") {
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

    console.log(viewer.imageryLayers)

  }


}, {deep: true})
</script>

<style scoped lang="scss">
#cesiumContainer {
  height: calc(100vh - 100px);
  width: calc(100vw - 250px);
  overflow: hidden;
}

:deep(.cesium-viewer-bottom) {
  display: none;
}
</style>

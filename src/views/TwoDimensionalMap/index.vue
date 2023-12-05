<template>
  <button @click="test">sss</button>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import * as Cesium from "cesium";
import {getCurrentInstance, onMounted} from "vue";
import axios from "axios";


const {appContext} = getCurrentInstance();
const global = appContext.config.globalProperties;
let viewer = global.$viewer;

function test() {

  // 上述请求也可以按以下方式完成（可选）
  axios.get('/api/index/')
      .then(function (response) {

        const data = response.data.url;
        console.log(data)
        let urls = data.replace("http://localhost:8081", "/GeoServer");

        const wms = new Cesium.WebMapServiceImageryProvider({
          url: urls,
          layers: "test:sub1",
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
          destination: Cesium.Rectangle.fromDegrees(111, 33, 116, 36)
        });
      })
      .catch(function (error) {
        console.log(error);
      })

}

//必须在挂载后引入cesium地图组件
onMounted(() => {
  viewer = new Cesium.Viewer("cesiumContainer");
});

</script>

<style scoped lang="scss">
#cesiumContainer {
  height: auto;
  width: auto;
  overflow: hidden;
}

:deep(.cesium-viewer-bottom) {
  display: none;
}
</style>

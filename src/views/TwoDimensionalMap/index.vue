<template>

  <el-container>
    <el-main class="cesiumContainer">
      <div id="cesiumContainer"></div>
    </el-main>
    <el-aside class="elaside">

      <div @click="drawer_view_model = true" class="asideIcon">
        <img :src="'src/assets/MAP.svg'" alt="" style="height: 55px;width: 55px"/>
        <el-text style="color: white">场景视图</el-text>
      </div>

      <div @click="drawer_show_layer = true" class="asideIcon">
        <img :src="'src/assets/layers.svg'" alt="" style="height: 55px;width: 55px"/>
        <el-text style="color: white">图层管理</el-text>
      </div>

    </el-aside>
  </el-container>

  <el-drawer
      v-model="drawer_view_model"
      title="场景视图"
      size="15%"
      style="min-width: 240px;"
  >
    <div>
      <el-radio-group v-model="radio">

        <el-radio label="2D视图" value="2D视图" size="large" border @click="ChangeSceneMode(0)">
          2D视图
        </el-radio>

        <el-radio label="哥伦布视图" value="哥伦布视图" size="large" border @click="ChangeSceneMode(1)">
          哥伦布视图
        </el-radio>

        <el-radio label="3D视图" value="3D视图" size="large" border @click="ChangeSceneMode(2)">
          3D视图
        </el-radio>

      </el-radio-group>
    </div>
  </el-drawer>

  <el-drawer
      v-model="drawer_show_layer"
      title="图层控制"
      size="25%"
      style="min-width: 400px;"
  >
    <div>
      <el-checkbox-group v-model="mapLayerStore.showLayers">
        <el-scrollbar>

          <el-checkbox v-for="(item,index) in upLoadDialogStore.uploadFiles" :key="item" :label="item"
                       @change="handleCheckedCitiesChange(item,index)" border>
            {{ item.name }}
          </el-checkbox>

        </el-scrollbar>
      </el-checkbox-group>
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
onMounted(async () => {
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
    infoBox: true
  });

  //世界影像地图
  const esriWorldImagery = await Cesium.ArcGisMapServerImageryProvider.fromUrl(
      'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer',
  )
  viewer.imageryLayers.addImageryProvider(esriWorldImagery)

  //世界边界和地点交替
  const esriWorldBoundariesAndPlacesAlternate = await Cesium.ArcGisMapServerImageryProvider.fromUrl(
      'https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer',
  )
  viewer.imageryLayers.addImageryProvider(esriWorldBoundariesAndPlacesAlternate)

  await all_Layers()

  await getLayersFromUpLoadFiles()

  await showLayersFromUpLoadFiles()

  var iframe = document.getElementsByClassName('cesium-infoBox-iframe')[0];
  iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
  iframe.setAttribute("src", "");
  mapLayerStore.firstLoadLayer = false

  for (let i = 1; i < viewer.imageryLayers._layers.length; i++) {
    if (isScopeEqual(viewer.imageryLayers._layers[i].imageryProvider.layers, "ModelCoupling:Admin_AdministrativeDivision")) {
      viewer.imageryLayers.lower(viewer.imageryLayers._layers[i])
    }
  }

});

const all_Layers = async () => {
  let result = await upLoadDialogStore.get_All_Layers_Data()

  result.forEach(layer => {
    if (layer.name === "Admin_AdministrativeDivision" || layer.name === "Admin_DEM" || layer.name === "Admin_LandUse" || layer.name === "Admin_StudyAreaScope") {
      upLoadDialogStore.add_file_file(layer)

    } else {
      mapLayerStore.removeShowLayer(layer)
      upLoadDialogStore.add_file_file(layer)
    }
  })
}

// 从上传的文件中获取是图层的内容
const getLayersFromUpLoadFiles = async () => {
  if (mapLayerStore.firstLoadLayer) {
    const layer = mapLayerStore.showLayers[mapLayerStore.showLayers.length - 1]
    mapLayerStore.remove_map_layer_from_showLayers(mapLayerStore.showLayers[mapLayerStore.showLayers.length - 1]);
    mapLayerStore.removeShowLayer(layer)
    for (let i = 1; i < viewer.imageryLayers._layers.length; i++) {
      if (isScopeEqual(viewer.imageryLayers._layers[i].imageryProvider.layers, layer.name)) {
        viewer.imageryLayers._layers[i].show = false
      }
    }
  }

  mapLayerStore.getAllShowMapLayer(upLoadDialogStore.uploadFiles)
}

// 从上传的文件中获取是图层的内容
const showLayersFromUpLoadFiles = async () => {

  mapLayerStore.showLayers.forEach(layer => {

    let urls = layer.url.replace("http://localhost:8080", "/GeoServer");
    let layersName = "ModelCoupling:" + layer.name

    const inputString = layer.name;
    const index = inputString.indexOf("_"); // 获取第一个 "_" 的索引位置
    let truncatedString = ""
    if (index !== -1) {
      truncatedString = inputString.substring(index + 1);
    }

    let styleName = "ModelCoupling:" + truncatedString

    const wms = new Cesium.WebMapServiceImageryProvider({
      url: urls,
      layers: layersName,
      parameters: {
        service: 'WMS',
        transparent: true,
        styles: styleName,
        format: "image/png",
      },
    })

    const imageryLayer = new Cesium.ImageryLayer(wms, null);
    viewer.imageryLayers.add(imageryLayer);

    // 设置相机的视图
    viewer.camera.setView({
      destination: Cesium.Rectangle.fromDegrees(110, 33.7, 118.5, 36.2)
    });
  })

}

//新增加的默认显示
const stopWatch = watch(upLoadDialogStore.uploadFiles, (newValue, oldValue) => {
  let urls = newValue[newValue.length - 1].url.replace("http://localhost:8080", "/GeoServer");
  let layersName = "ModelCoupling:" + newValue[newValue.length - 1].name

  const inputString = newValue[newValue.length - 1].name;
  const index = inputString.indexOf("_"); // 获取第一个 "_" 的索引位置
  let truncatedString = ""
  if (index !== -1) {
    truncatedString = inputString.substring(index + 1);
  }

  let styleName = "ModelCoupling:" + truncatedString

  const wms = new Cesium.WebMapServiceImageryProvider({
    url: urls,
    layers: layersName,
    parameters: {
      service: 'WMS',
      transparent: true,
      styles: styleName,
      format: "image/png",
    },
  })

  const imageryLayer = new Cesium.ImageryLayer(wms);
  viewer.imageryLayers.add(imageryLayer);

  // 设置相机的视图
  viewer.camera.setView({
    destination: Cesium.Rectangle.fromDegrees(110, 33.7, 118.5, 36.2)
  });

  mapLayerStore.incrementShowLayer(newValue[newValue.length - 1])

}, {deep: true})

const drawer_view_model = ref(false)
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

const drawer_show_layer = ref(false)

const handleCheckedCitiesChange = (item: any, index: number) => {
  if (!event.target.checked) {
    mapLayerStore.removeShowLayer(item)
    for (let i = 1; i < viewer.imageryLayers._layers.length; i++) {
      if (isScopeEqual(viewer.imageryLayers._layers[i].imageryProvider.layers, item.name)) {
        viewer.imageryLayers._layers[i].show = false

        if (item.name == "Admin_MODFLOW_InitialWaterLevel") {
          for (let i = 1; i < viewer.imageryLayers._layers.length; i++) {
            if (viewer.imageryLayers._layers[i].imageryProvider.layers == "ModelCoupling:水位等值线") {
              viewer.imageryLayers._layers[i].show = false
            }
          }
        }

      }
    }


  } else {

    let isHas = true

    mapLayerStore.removeRemoveLayer(item)
    for (let i = 1; i < viewer.imageryLayers._layers.length; i++) {
      if (isScopeEqual(viewer.imageryLayers._layers[i].imageryProvider.layers, item.name)) {
        isHas = false
        viewer.imageryLayers._layers[i].show = true
      }
    }

    if (isHas) {
      const layer = item
      let urls = layer.url.replace("http://localhost:8080", "/GeoServer");
      let layersName = "ModelCoupling:" + layer.name

      const inputString = layer.name;
      const index = inputString.indexOf("_"); // 获取第一个 "_" 的索引位置
      let truncatedString = ""
      if (index !== -1) {
        truncatedString = inputString.substring(index + 1);
      }

      let styleName = "ModelCoupling:" + truncatedString

      const wms = new Cesium.WebMapServiceImageryProvider({
        url: urls,
        layers: layersName,
        parameters: {
          service: 'WMS',
          transparent: true,
          styles: styleName,
          format: "image/png",
        },
      })

      const imageryLayer = new Cesium.ImageryLayer(wms, null);
      viewer.imageryLayers.add(imageryLayer);

      // 设置相机的视图
      viewer.camera.setView({
        destination: Cesium.Rectangle.fromDegrees(110, 33.7, 118.5, 36.2)
      });
    }

    if (item.name == "Admin_MODFLOW_InitialWaterLevel") {
      const layer = item
      let urls = layer.url.replace("http://localhost:8080", "/GeoServer");
      let layersName = "ModelCoupling:水位等值线"

      let styleName = "ModelCoupling:水位等值线"

      const wms = new Cesium.WebMapServiceImageryProvider({
        url: urls,
        layers: layersName,
        parameters: {
          service: 'WMS',
          transparent: true,
          styles: styleName,
          format: "image/png",
        },
      })

      const imageryLayer = new Cesium.ImageryLayer(wms, null);
      viewer.imageryLayers.add(imageryLayer);

      // 设置相机的视图
      viewer.camera.setView({
        destination: Cesium.Rectangle.fromDegrees(110, 33.7, 118.5, 36.2)
      });
    }

  }

}

function isScopeEqual(scope1: string, scope2: string): boolean {
  if (scope1 == null) return false;
  const scope1Suffix = scope1.split('_')[1];
  const scope2Suffix = scope2.split('_')[1];
  return scope1Suffix === scope2Suffix;
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

.el-radio {
  margin-top: 20px;
  width: calc(15vw - 60px);
  min-width: 200px;
}

.el-checkbox {
  margin-top: 20px;
  min-width: 280px;
  width: calc(25vw - 90px);
}

</style>

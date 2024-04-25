<template>
  <div class="vtk-container">
    <div ref="vtkContainer" class="vtk-render-container"></div>
  </div>
</template>

<script setup lang="ts" name="ThreeDimensionalMap">
import {ref, unref, onMounted, onBeforeUnmount, watchEffect} from 'vue';
import axios from 'axios';

import '@kitware/vtk.js/Rendering/Profiles/Geometry';
import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkConeSource from '@kitware/vtk.js/Filters/Sources/ConeSource';
import vtkElevationReader from "@kitware/vtk.js/IO/Misc/ElevationReader";
import vtkTexture from "@kitware/vtk.js/Rendering/Core/Texture";
import vtk from '@kitware/vtk.js/vtk'
import vtkJSONReader from '@kitware/vtk.js/IO/Misc/JSONReader';
import vtkImageOutlineFilter from '@kitware/vtk.js/Filters/General/ImageOutlineFilter';
import vtkImageData from '@kitware/vtk.js/Common/DataModel/ImageData';


const STYLE_CONTROL_PANEL = {//控制面板样式
  width: 'calc(100%)',//宽度
  height: 'calc(100%)',//高度
};

const vtkContainer = ref(null);//vtk渲染容器
const context = ref(null);//vtk渲染上下文

//挂载VTK
onMounted(() => {
    if (!context.value) {
      const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
        rootContainer: vtkContainer.value,//vtk渲染容器
        containerStyle: STYLE_CONTROL_PANEL,//控制面板样式
      });

      const renderer = fullScreenRenderer.getRenderer();
      const renderWindow = fullScreenRenderer.getRenderWindow();
      const reader = vtkElevationReader.newInstance();
      let mapper = null;
      let actor = null;

      reader.setUrl('/api/upLoad/VtkData/UnderwaterTerrain').then(() => {
        mapper = vtkMapper.newInstance();
        mapper.setInputConnection(reader.getOutputPort());
        actor = vtkActor.newInstance();
        actor.setMapper(mapper);

        renderer.addActor(actor);
        renderer.resetCamera();
        renderWindow.render();

        context.value = {
          fullScreenRenderer,
          renderWindow,
          renderer,
          actor,
          mapper,
         };
  })
  .catch(error => {
    console.error(error);
  });
}
})
</script>
<style scoped lang="scss">

.vtk-render-container {
  width: calc(100vw - 250px);
  height: calc(100vh - 100px);
}

.controls {
  position: absolute;
  top: 100px;
  left: 250px;
  background: white;
  margin: 20px;
}
</style>
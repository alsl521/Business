<template>
  <div class="vtk-container">
    <table class="controls">
      <tbody>
      <tr>
        <td>
          <select
              style="width: 100%"
              :value="representation"
              @change="setRepresentation($event.target.value)"
          >
            <option value="0">Points</option>
            <option value="1">Wireframe</option>
            <option value="2">Surface</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>
          <input
              type="range"
              min="4"
              max="80"
              :value="coneResolution"
              @input="setConeResolution($event.target.value)"
          />
        </td>
      </tr>
      </tbody>
    </table>
    <div ref="vtkContainer" class="vtk-render-container"></div>
  </div>
</template>

<script setup lang="ts" name="ThreeDimensionalMap">
import {ref, unref, onMounted, onBeforeUnmount, watchEffect} from 'vue';

import '@kitware/vtk.js/Rendering/Profiles/Geometry';
import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkConeSource from '@kitware/vtk.js/Filters/Sources/ConeSource';
import vtkElevationReader from "@kitware/vtk.js/IO/Misc/ElevationReader";
import vtkTexture from "@kitware/vtk.js/Rendering/Core/Texture";

const STYLE_CONTROL_PANEL = {//控制面板样式
  width: 'calc(100%)',//宽度
  height: 'calc(100%)',//高度
};

const vtkContainer = ref(null);//vtk渲染容器
const context = ref(null);//vtk渲染上下文
const coneResolution = ref(6);//圆锥分辨率
const representation = ref(2);//表示

function setConeResolution(res) {//设置圆锥分辨率
  coneResolution.value = Number(res);
}

function setRepresentation(rep) {//设置表示
  representation.value = Number(rep);
}

//监听VTK数据
watchEffect(() => {//监听圆锥分辨率和表示的变化
  const res = unref(coneResolution);//圆锥分辨率
  const rep = unref(representation);//表示
  if (context.value) {//如果上下文存在
    const {actor, coneSource, renderWindow} = context.value;//获取上下文中的actor、coneSource、renderWindow
    coneSource.setResolution(res);//设置圆锥分辨率
    actor.getProperty().setRepresentation(rep);//设置表示
    renderWindow.render();//渲染
  }
});

//挂载VTK
onMounted(() => {//挂载

  if (!context.value) {//如果上下文不存在
    const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({//创建vtk全屏渲染窗口
      rootContainer: vtkContainer.value,//vtk渲染容器
      containerStyle: STYLE_CONTROL_PANEL,//控制面板样式
    });
    const coneSource = vtkConeSource.newInstance({height: 1.0});//创建圆锥源

    const renderer = fullScreenRenderer.getRenderer();//获取渲染器
    const renderWindow = fullScreenRenderer.getRenderWindow();//获取渲染窗口

    const reader = vtkElevationReader.newInstance({
      xSpacing: 0.01568,
      ySpacing: 0.01568,
      zScaling: 0.06666,
    });
    const mapper = vtkMapper.newInstance();
    const actor = vtkActor.newInstance();

    mapper.setInputConnection(reader.getOutputPort());
    actor.setMapper(mapper);

    renderer.addActor(actor);
    renderer.resetCamera();
    renderWindow.render();

// Download elevation and render when ready
    reader.setUrl(`https://kitware.github.io/vtk-js/data/elevation/dem.csv`).then(() => {
      renderer.resetCamera();
      renderWindow.render();
    });

    context.value = {//设置上下文
      fullScreenRenderer,
      renderWindow,
      renderer,
      coneSource,
      actor,
      mapper,
    };
  }
});

//退出时清空VTK
onBeforeUnmount(() => {//卸载
  if (context.value) {//如果上下文存在
    const {fullScreenRenderer, coneSource, actor, mapper} = context.value;//获取上下文中的fullScreenRenderer、coneSource、actor、mapper
    actor.delete();//删除演员
    mapper.delete();//删除映射器
    coneSource.delete();//删除圆锥源
    fullScreenRenderer.delete();//删除全屏渲染器
    context.value = null;//设置上下文为空
  }
});

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
<template>
  <!--  <div></div>-->
  <div id="main" class="showData"></div>
</template>

<script setup lang="ts" name="DataPresentation">
import {ref, onMounted, onBeforeUnmount} from "vue";
import * as echarts from "echarts";

type EChartsOption = echarts.EChartsOption;

//定义echarts
let myChart = ref(null);
var option: EChartsOption;

//定义数据
let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;

let data = [[base, Math.random() * 300]];

for (let i = 1; i < 20000; i++) {
  let now = new Date((base += oneDay));
  data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
}

//定义option
option = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  title: {
    left: 'center',
    text: 'Large Ara Chart'
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'time',
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%']
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 20
    },
    {
      start: 0,
      end: 20
    }
  ],
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      smooth: true,
      symbol: 'none',
      areaStyle: {},
      data: data
    }
  ]
};


//挂载数据
onMounted(() => {
  const chartDom = document.getElementById('main');
  myChart = echarts.init(chartDom);
  option && myChart.setOption(option);
});

//监听窗口变化
window.addEventListener('resize', function () {
  myChart.resize();
});

//销毁Echatrs
onBeforeUnmount(() => {
  myChart.dispose();
  console.log(myChart);
})


</script>

<style scoped>
.showData {
  height: calc(100vh - 100px);
  width: calc(100vw - 250px);
}
</style>
<template>

  <el-dialog v-model="upLoadDialogStore.ModelDataValidationDialogVisible">

    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "模型数据验证" }}</h4>
      </div>
    </template>

    <div style="margin: 10px 0">
      <el-text type="primary" size="large">生成文件</el-text>
    </div>

    <el-table v-loading="loading" element-loading-text="数据校验中"

              :data="modelData" style="width: 100%;margin-top: 10px" border>
      <el-table-column prop="swmm" label="路面过程" width="290"/>
      <el-table-column prop="modflow" label="地下水" width="290"/>
      <el-table-column prop="efdc" label="三维河道" width="290"/>
    </el-table>

  </el-dialog>

</template>

<script setup lang="ts" name="ModelDataValidationDialog">

import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
import {onMounted, ref} from "vue";

const upLoadDialogStore = useUpLoadDialogStore();


const modelData = ref()
const loading = ref(true)
onMounted(async () => {
  let result = await upLoadDialogStore.get_All_Upload_Files_Data()
  if (result.code == 1) {
    loading.value = false
  }
  modelData.value = result.data.models
  console.log(modelData)
})

</script>

<style scoped lang="scss">
.textClass {
  width: 290px;
  height: 25px;
  border: #51a5ec 1px solid;
  display: inline-block;
  text-align: center;
  margin: 2px;

  .text {
    line-height: 25px;
    vertical-align: middle;
    color: #409eff
  }
}
</style>
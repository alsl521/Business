<template>
  <el-dialog v-model="upLoadDialogStore.SWMMTimeDispersionDialogVisible" destroy-on-close>
    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "路面过程-时间离散" }}</h4>
      </div>
    </template>

    <el-form :model="form" label-width="auto">

      <el-form-item label="径流：旱季">
        <el-time-picker v-model="form.swmm_dry" placeholder="请选择计算时长"/>
      </el-form-item>

      <el-form-item label="径流：雨季">
        <el-time-picker v-model="form.swmm_wet" placeholder="请选择计算时长"/>
      </el-form-item>

      <el-form-item label="演算">
        <el-time-picker v-model="form.swmm_calculate" placeholder="请选择计算时长"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="upLoadDialogStore.SWMMTimeDispersionDialogVisible=false">取消</el-button>
      </el-form-item>
    </el-form>

  </el-dialog>
</template>

<script setup lang="ts" name="SWMMTimeDispersionDialog">
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
import {reactive} from "vue";

// 使用UpLoadDialogStore
const upLoadDialogStore = useUpLoadDialogStore();

// do not use same name with ref
const form = reactive({
  swmm_wet: new Date(1900, 0, 1, 0, 5, 0),
  swmm_dry: new Date(1900, 0, 1, 1, 0, 0),
  swmm_calculate: new Date(1900, 0, 1, 0, 0, 30)
})

const onSubmit = async () => {
  await upLoadDialogStore.set_SWMM_time_Data(form)
}
</script>


<style scoped lang="scss">
</style>
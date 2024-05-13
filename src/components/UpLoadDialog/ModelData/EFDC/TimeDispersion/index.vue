<template>
  <el-dialog v-model="upLoadDialogStore.EFDCTimeDispersionDialogVisible" destroy-on-close>
    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "三维河道-时间离散" }}</h4>
      </div>
    </template>

    <el-form ref="ruleFormRef" :model="ruleForm" label-width="auto" :rules="rules">

      <el-form-item label="演算时间步长" prop="efdc_calculate_step">
        <el-input v-model="ruleForm.efdc_calculate_step"/>
      </el-form-item>

      <el-form-item label="演算输出步长" prop="efdc_output_step">
        <el-input v-model="ruleForm.efdc_output_step"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="upLoadDialogStore.MODFLOWTimeDispersionDialogVisible=false">取消</el-button>
      </el-form-item>
    </el-form>

  </el-dialog>
</template>

<script setup lang="ts" name="EFDCTimeDispersionDialog">
import {onMounted, reactive, ref} from 'vue'
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
import type {FormInstance, FormRules} from "element-plus";

// 使用UpLoadDialogStore
const upLoadDialogStore = useUpLoadDialogStore();

interface RuleForm {
  efdc_calculate_step: string,
  efdc_output_step: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  efdc_calculate_step: "1s",
  efdc_output_step: "",
})

const rules = reactive<FormRules<RuleForm>>({
  efdc_calculate_step: [
    {
      type: 'string',
      required: true,
      message: '请选择演算时长单位',
      trigger: 'change',
    },
  ],
  efdc_output_step: [
    {
      type: 'string',
      required: true,
      message: '请输入演算时长单位',
      trigger: 'change',
    },
  ]
})


const onSubmit = async () => {
  await upLoadDialogStore.set_efdc_time_Data(ruleForm)
}

onMounted(async () => {
  let result = await upLoadDialogStore.get_MODFLOW_time_Data()
  ruleForm.efdc_output_step = result.time + "s"
})

</script>


<style scoped lang="scss">
</style>
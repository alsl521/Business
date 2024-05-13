<template>
  <el-dialog v-model="upLoadDialogStore.MODFLOWTimeDispersionDialogVisible" destroy-on-close>
    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "地下水-时间离散" }}</h4>
      </div>
    </template>

    <el-form ref="ruleFormRef" :model="ruleForm" label-width="auto" :rules="rules">

      <el-form-item label="演算时长单位" prop="modflow_calculate_unit">
        <el-select v-model="ruleForm.modflow_calculate_unit" placeholder="演算时长单位">
          <el-option label="年" value="year"/>
          <el-option label="月" value="month"/>
          <el-option label="日" value="day"/>
          <el-option label="时" value="hour"/>
          <el-option label="分" value="minute"/>
          <el-option label="秒" value="second"/>
        </el-select>
      </el-form-item>

      <el-form-item label="演算时间步长" prop="modflow_calculate_step">
        <el-input v-model="ruleForm.modflow_calculate_step"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="upLoadDialogStore.MODFLOWTimeDispersionDialogVisible=false">取消</el-button>
      </el-form-item>
    </el-form>

  </el-dialog>
</template>

<script setup lang="ts" name="MODFLOWTimeDispersionDialog">
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
import {reactive, ref} from "vue";
import type {FormInstance, FormRules} from "element-plus";

// 使用UpLoadDialogStore
const upLoadDialogStore = useUpLoadDialogStore();

interface RuleForm {
  modflow_calculate_unit: string,
  modflow_calculate_step: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  modflow_calculate_unit: "day",
  modflow_calculate_step:  "1",
})

function isNumberInRange(number: number, start: number, end: number): boolean {
  return number >= start && number <= end;
}

const validate_modflow_calculate_step = (rule: any, value: any, callback: any) => {
  if (!/^-?\d+$/.test(value)) {
    callback(new Error('请输入正整数'))
  } else if (ruleForm.modflow_calculate_unit == "year") {
    if (!isNumberInRange(value, 1, 50)) {
      callback(new Error('请选择1-50之间的数字'))
    }
  } else if (ruleForm.modflow_calculate_unit == "month") {
    if (!isNumberInRange(value, 1, 11)) {
      callback(new Error('请选择1-11之间的数字'))
    }
  } else if (ruleForm.modflow_calculate_unit == "day") {
    if (!isNumberInRange(value, 1, 25)) {
      callback(new Error('请选择1-25之间的数字'))
    }
  } else if (ruleForm.modflow_calculate_unit == "hour") {
    if (!isNumberInRange(value, 1, 23)) {
      callback(new Error('请选择1-23之间的数字'))
    }
  } else if (ruleForm.modflow_calculate_unit == "minute") {
    if (!isNumberInRange(value, 1, 59)) {
      callback(new Error('请选择1-59之间的数字'))
    }
  } else if (ruleForm.modflow_calculate_unit == "second") {
    if (!isNumberInRange(value, 1, 59)) {
      callback(new Error('请选择1-59之间的数字'))
    }
  } else {
    callback()
  }
}

const rules = reactive<FormRules<RuleForm>>({
  modflow_calculate_unit: [
    {
      type: 'string',
      required: true,
      message: '请选择演算时长单位',
      trigger: 'change',
    },
  ],
  modflow_calculate_step: [
    {
      type: 'string',
      required: true,
      message: '请输入演算时长单位',
      trigger: 'change',
    },
    {validator: validate_modflow_calculate_step, trigger: 'change',}
  ]
})


const onSubmit = async () => {
  await upLoadDialogStore.set_MODFLOW_time_Data(ruleForm)
}
</script>


<style scoped lang="scss">
</style>
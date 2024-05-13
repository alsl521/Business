<template>
  <el-dialog v-model="upLoadDialogStore.TotalTimeDispersionDialogVisible" destroy-on-close>

    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "总时间离散" }}</h4>
      </div>
    </template>

    <el-form ref="ruleFormRef" :model="ruleForm" label-width="auto" :rules="rules">

      <el-form-item label="计算开始时间" prop="startTime">
        <div class="block">
          <el-date-picker
              @change="getDaysDifference"
              v-model="ruleForm.startTime"
              type="date"
              placeholder="Select date and time"
          />
        </div>
      </el-form-item>

      <el-form-item label="计算结束时间" prop="endTime">
        <div class="block">
          <el-date-picker
              @change="getDaysDifference"
              v-model="ruleForm.endTime"
              type="date"
              placeholder="Select date and time"
          />
        </div>
      </el-form-item>

      <el-form-item label="总运算时间：">
        <el-text class="mx-1" size="large">{{ total }}天</el-text>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="upLoadDialogStore.TotalTimeDispersionDialogVisible=false">取消</el-button>
      </el-form-item>
    </el-form>

  </el-dialog>
</template>

<script setup lang="ts" name="TotalTimeDispersionDialog">
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
import {onMounted, reactive, ref} from 'vue'
import type {FormInstance, FormRules} from "element-plus";

const upLoadDialogStore = useUpLoadDialogStore()

interface RuleForm {
  startTime: Date
  endTime: Date
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  startTime: new Date(),
  endTime: new Date(),
})

const startTime = ref(new Date());
const endTime = ref(new Date());
const total = ref("");

const validateStartTime = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(`请选择
    ${startTime.value.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(/(\d+)\/(\d+)\/(\d+), (\d+:\d+:\d+)/, '$3-$2-$1 $4')}
    之后的日期`))
  } else if (value <= startTime.value) {
    callback(new Error(`请选择
    ${startTime.value.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(/(\d+)\/(\d+)\/(\d+), (\d+:\d+:\d+)/, '$3-$2-$1 $4')}
    之前的日期`))
  } else {
    callback()
  }
}

const validateEndTime = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(`请选择
    ${endTime.value.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(/(\d+)\/(\d+)\/(\d+), (\d+:\d+:\d+)/, '$3-$2-$1 $4')}
    之后的日期`))
  } else if (value >= endTime.value) {
    callback(new Error(`请选择
    ${endTime.value.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(/(\d+)\/(\d+)\/(\d+), (\d+:\d+:\d+)/, '$3-$2-$1 $4')}
    之前的日期`))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<RuleForm>>({
  startTime: [
    {
      type: 'date',
      required: true,
      message: `请选择
       ${startTime.value.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(/(\d+)\/(\d+)\/(\d+), (\d+:\d+:\d+)/, '$3-$2-$1 $4')}
      之后的日期`,
      trigger: 'change',
    },
    {validator: validateStartTime, trigger: 'change',}
  ],
  endTime: [
    {
      type: 'date',
      required: true,
      message: `请选择
       ${endTime.value.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(/(\d+)\/(\d+)\/(\d+), (\d+:\d+:\d+)/, '$3-$2-$1 $4')}
      之前的日期`,
      trigger: 'change',
    },
    {validator: validateEndTime, trigger: 'change',}
  ]
})


const onSubmit = async () => {
  await upLoadDialogStore.upload_total_time_Data(ruleForm)
}

const get_time = async () => {
  let result = await upLoadDialogStore.get_total_time_Data()
  ruleForm.startTime = new Date(Date.parse(result.start_time));
  ruleForm.endTime = new Date(Date.parse(result.end_time));
  startTime.value = new Date(Date.parse(result.start_time));
  endTime.value = new Date(Date.parse(result.end_time));
}

onMounted(async () => {
  await get_time()
  getDaysDifference()
})


function getDaysDifference() {
  // 将日期对象转换为毫秒数
  const startMs = ruleForm.startTime.getTime();
  const endMs = ruleForm.endTime.getTime();

  // 计算两个日期之间的毫秒数差异并转换为天数
  const diffMs = endMs - startMs;
  console.log(endMs)
  console.log(startMs)
  console.log(endMs - startMs)
  total.value = String(Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1);
}

</script>


<style scoped lang="scss">
</style>
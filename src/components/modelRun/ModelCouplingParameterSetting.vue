<template>

  <el-dialog v-model="upLoadDialogStore.ModelCouplingParameterSettingDialogVisible">

    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "模型耦合参数设定" }}</h4>
      </div>
    </template>

    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
        :size="formSize"
    >
      <el-form-item label="模型交互时间" prop="ModelInteractionTime">
        <el-input v-model="ruleForm.ModelInteractionTime">

          <template #append>
            <el-select v-model="ruleForm.ModelInteractionTimeUnit" placeholder="模型交互时间单位" style="width: 115px">
              <el-option label="年" value="1" />
              <el-option label="月" value="2" />
              <el-option label="日" value="3" />
              <el-option label="时" value="4" />
              <el-option label="分" value="5" />
              <el-option label="秒" value="6" />
            </el-select>
          </template>

        </el-input>
      </el-form-item>

      <el-divider />

      <el-form-item label="三维河道垂向分层" prop="ModelInteractionTime">
        <el-input v-model="ruleForm.ModelInteractionTime">
          <template #append>层</template>
        </el-input>
      </el-form-item>

      <el-form-item label="三维河道边界条件" prop="EFDCBoundaryConditions">
        <el-input disabled v-model="ruleForm.EFDCBoundaryConditions">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确认
        </el-button>
      </el-form-item>

    </el-form>

  </el-dialog>

</template>

<script setup lang="ts" name="ModelCouplingParameterSetting">

import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
import {onMounted, reactive, ref} from "vue";
import type {FormInstance, FormRules} from "element-plus";

const upLoadDialogStore = useUpLoadDialogStore();

interface RuleForm {
  ModelInteractionTime: string
  ModelInteractionTimeUnit: string
  EFDCVerticalStratification: string
  type: string[]
  EFDCBoundaryConditions: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  ModelInteractionTime: '1',
  EFDCVerticalStratification: "1",
  ModelInteractionTimeUnit: "3",
  EFDCBoundaryConditions: "流量边界",
  type: [],

})

const rules = reactive<FormRules<RuleForm>>({
  ModelInteractionTime: [
    { required: true, message: '请输入模型交互时间', trigger: 'blur' },
  ],
  EFDCVerticalStratification: [
    { required: true, message: '请输入模型垂向分层', trigger: 'blur' },
  ],
  EFDCBoundaryConditions: [
    { required: true, message: '请选择边界条件', trigger: 'blur' },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

onMounted(async () => {
})

</script>

<style scoped lang="scss">
.textClass {
  width: 290px;
  height: 30px;
  border: #51a5ec 1px solid;
  display: inline-block;
  text-align: center;
  margin: 2px;

  .text {
    line-height: 30px;
    vertical-align: middle;
    color: #409eff
  }
}
</style>
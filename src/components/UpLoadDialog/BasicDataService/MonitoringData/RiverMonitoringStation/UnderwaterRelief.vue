<template>
  <el-dialog v-model="upLoadDialogStore.UnderwaterReliefDialogVisible" destroy-on-close>
    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "水下地形数据" }}</h4>
      </div>
    </template>

    <el-button type="primary" @click="get_UnderwaterRelief">
      加载已有数据
    </el-button>

    <el-divider/>

    <el-upload
        ref="upload"
        action=""
        :limit="1"
        :on-exceed="handleExceed"
        :auto-upload="false"
        accept=".zip,.rar,.7z,txt,.xlsx"
        v-model:file-list="formfile.fileList"
        style="margin-top: 20px"
    >
      <template #trigger>
        <el-button type="primary">选择文件</el-button>
      </template>

      <template #tip>
        <div class="el-upload__tip text-red">
          <el-text type="primary">
            请将shp数据打包后上传，至少包含“.shp”、“.shx”、“.dbf”和“.prj”文件。
          </el-text>
          <div style="margin-top: 5px"></div>
          <el-text type="primary">
            请上传格式为.txt,.xls和.xlsx格式的观测记录文件,时间格式为YYYY/MM/DD HH:MM:SS
          </el-text>
        </div>
      </template>

    </el-upload>

    <el-button type="success" @click="submitUpload" style="margin-top: 10px" :loading="isLoading">
      提交数据
    </el-button>
  </el-dialog>
</template>

<script setup lang="ts" name="UnderwaterReliefDialogVisible">
import {reactive, ref, watch} from 'vue'
import {ElMessage, type FormInstance, type FormRules, genFileId} from 'element-plus'
import type {UploadInstance, UploadRawFile} from 'element-plus'
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
import Cesium from "cesium";

// 使用UpLoadDialogStore
const upLoadDialogStore = useUpLoadDialogStore();
// 上传组件的引用
const upload = ref<UploadInstance>()

const get_UnderwaterRelief = async () => {
  await upLoadDialogStore.get_UnderwaterRelief_Data();
}

// 文件列表
const formfile: any = reactive<any>({
  fileList: [],
})

const isLoading = ref(false)

// 上传文件后获取链接
const handleExceed = (files: any) => {
  ElMessage.warning('最多只能上传一个文件！');
  upload.value!.clearFiles() // 清除文件列表
  const file = files[0] as UploadRawFile
  file.uid = genFileId() // 生成唯一文件ID
  upload.value!.handleStart(file) // 开始上传文件
}


const submitUpload = async () => {
  let formData = new FormData();
  formData.append('file', formfile.fileList[0].raw); // 添加文件数据到表单数据

  isLoading.value = true;

  let result: any = await upLoadDialogStore.upLoad_UnderwaterRelief_Data(formData)
  if (result.code == 1) {

    isLoading.value = false;

    ElMessage({
      message: '上传成功',
      type: 'success',
    })
    upLoadDialogStore.UnderwaterReliefDialogVisible= false
  } else {
    isLoading.value = false;
  }
}
</script>


<style scoped lang="scss">
</style>
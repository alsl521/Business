<template>
  <el-dialog v-model="upLoadDialogStore.GeologicBodyDialogVisible" destroy-on-close>
    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "地质体概念数据" }}</h4>
      </div>
    </template>

    <el-button type="primary" @click="getGeologicBody">
      加载已有数据
    </el-button>

    <el-divider/>

    <el-upload
        ref="upload"
        action=""
        :limit="2"
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

<script setup lang="ts" name="GeologicBodyDialog">
import {reactive, ref, watch} from 'vue'
import {ElMessage, type FormInstance, type FormRules, genFileId} from 'element-plus'
import type {UploadInstance, UploadRawFile} from 'element-plus'
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";
import Cesium from "cesium";

// 使用UpLoadDialogStore
const upLoadDialogStore = useUpLoadDialogStore();
// 上传组件的引用
const upload = ref<UploadInstance>()

// 文件列表
const formfile: any = reactive<any>({
  fileList: [],
})

const isLoading = ref(false)
//直接获取数据
const getGeologicBody = async () => {
  await upLoadDialogStore.get_GeologicBody_Data();
}

// 上传文件后获取链接
const handleExceed = (files: any) => {
  ElMessage.warning('最多只能上传两个文件！');
  const file1 = formfile.fileList[1].raw as UploadRawFile
  const file2 = files[0] as UploadRawFile
  upload.value!.clearFiles()
  file1.uid = genFileId()
  file2.uid = genFileId()
  upload.value!.handleStart(file1)
  upload.value!.handleStart(file2)
}


const submitUpload = async () => {
  if (formfile.fileList.length == 2 && formfile.fileList[0].raw != formfile.fileList[1].raw) {
    let formData = new FormData();

    const file1 = formfile.fileList[0];
    const file2 = formfile.fileList[1];

    if (file1.name.endsWith('.xlsx') && file2.name.endsWith('.zip')) {
      // 继续执行操作
      formData.append('file1', file1.raw);
      formData.append('file2', file2.raw);
    } else if (file1.name.endsWith('.zip') && file2.name.endsWith('.xlsx')) {
      // 继续执行操作
      formData.append('file1', file2.raw);
      formData.append('file2', file1.raw);
    } else {
      ElMessage({
        message: '请上传正确的文件格式',
        type: 'error',
      })

      return;
    }

    isLoading.value = true;
    let result: any = await upLoadDialogStore.upLoad_GeologicBody_Data(formData)
    if (result.code == 1) {

      isLoading.value = false;

      ElMessage({
        message: '上传成功',
        type: 'success',
      })
      upLoadDialogStore.GeologicBodyDialogVisible = false
    }

  } else {
    ElMessage({
      message: '请同时上传监测站点和监测数据',
      type: 'warning',
    })
  }
}
</script>


<style scoped lang="scss">
</style>
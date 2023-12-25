<template>
  <div v-show="value.FileType===1">
    <el-upload
        ref="upload"
        action=""
        :limit="1"
        :on-exceed="handleExceed"
        :before-upload="beforeUpLoad"
        :auto-upload="false"
        accept=".zip,.rar,.7z"
        v-model:file-list="form.fileList"
    >
      <template #trigger>
        <el-button type="primary">选择文件</el-button>
      </template>

      <template #tip>
        <div class="el-upload__tip text-red">
          请将shp数据打包后上传，至少包含“.shp”、“.shx”、“.dbf”和“.prj”文件。
        </div>
      </template>

    </el-upload>

    <el-button type="success" @click="submitUpload" style="margin-top: 10px">
      提交数据
    </el-button>
  </div>

  <div v-show="value.FileType===2">
    <el-upload
        ref="upload"
        action=""
        :limit="1"
        :on-exceed="handleExceed"
        :before-upload="beforeUpLoad"
        :auto-upload="false"
        accept=".txt,.xlsx,.xls"
        v-model:file-list="form.fileList"
    >
      <template #trigger>
        <el-button type="primary">选择文件</el-button>
      </template>

      <template #tip>
        <div class="el-upload__tip text-red">
          请上传.txt、.xlsx和.xls类型的文件
        </div>
      </template>

    </el-upload>

    <el-button type="success" @click="submitUpload" style="margin-top: 10px">
      提交数据
    </el-button>
  </div>


</template>

<script setup lang="ts" name="UpLoadFile">
import {onMounted, reactive, ref} from 'vue'
import {ElMessage, ElMessageBox, genFileId} from 'element-plus'
import type {UploadInstance, UploadProps, UploadRawFile} from 'element-plus'
import useUpLoadFilesStore from "@/stores/modules/UpLoadFilesStore"
import {useMenuStore} from "@/stores/modules/MenuStore";

//创建小仓库
const upLoadFilesStore = useUpLoadFilesStore();
const menuStore = useMenuStore();//使用menuStore

const upload = ref<UploadInstance>()

const form = reactive<any>({
  fileList: [],
})

// 数据导入
const beforeUpLoad = (file: any) => {
  const isExcel =
      file.type === 'application/zip' ||
      file.type === 'application/x-7z-compressed' ||
      file.type === 'application/x-rar-compressed';
  if (!isExcel)
    ElMessageBox({
      title: '温馨提示',
      message: '上传文件只能是 zip / rar / 7z 格式！',
      type: 'warning',
    });
  return isExcel;
};


// 文件数超出提示
const handleExceed = (files) => {
  ElMessage.warning('最多只能上传一个文件！');
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

//文件上传
const submitUpload = async () => {
  let formData = new FormData();
  formData.append('ModelName', value.ModelName);
  formData.append('MenuName', value.MenuName);
  formData.append('file', form.fileList[0].raw);
  formData.append('fileType', value.FileType);

  let code = await upLoadFilesStore.upLoadFile(formData)
  if (code == 1) {
    menuStore.dialogTableVisible = false
    ElMessage.success('导入数据成功！');
    upload.value?.clearFiles()
  } else {
    ElMessage.error('导入数据失败，请您重新上传！');
  }

}

//获取传递过来的信息
let value = defineProps(['ModelName', 'MenuName', 'FileType'])

</script>

<style scoped lang="scss">
</style>
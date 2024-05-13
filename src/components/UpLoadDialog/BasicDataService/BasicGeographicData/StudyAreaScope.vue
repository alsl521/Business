<template>
  <el-dialog v-model="upLoadDialogStore.StudyAreaScopeDialogVisible" destroy-on-close>
    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "研究区范围" }}</h4>
      </div>
    </template>

    <div>
      <el-button type="primary" @click="get_StudyAreaScope">
        加载已有数据
      </el-button>

      <el-divider/>

      <el-upload
          ref="upload"
          action=""
          :limit="1"
          :on-exceed="handleExceed"
          :auto-upload="false"
          accept=".zip,.rar,.7z"
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
          </div>
        </template>

      </el-upload>

      <el-button type="success" @click="submitUpload" style="margin-top: 10px" :loading="isLoading">
        提交数据
      </el-button>
    </div>

    <!--    <div v-if="showPages==1">-->
    <!--      <el-button type="primary" @click="get_StudyAreaScope">-->
    <!--        加载已有数据-->
    <!--      </el-button>-->

    <!--      <el-divider/>-->

    <!--      <el-upload-->
    <!--          ref="upload"-->
    <!--          action=""-->
    <!--          :limit="1"-->
    <!--          :on-exceed="handleExceed"-->
    <!--          :auto-upload="false"-->
    <!--          accept=".zip,.rar,.7z"-->
    <!--          v-model:file-list="formfile.fileList"-->
    <!--          style="margin-top: 20px"-->
    <!--      >-->
    <!--        <template #trigger>-->
    <!--          <el-button type="primary">选择文件</el-button>-->
    <!--        </template>-->

    <!--        <template #tip>-->
    <!--          <div class="el-upload__tip text-red">-->
    <!--            <el-text type="primary">-->
    <!--              请将shp数据打包后上传，至少包含“.shp”、“.shx”、“.dbf”和“.prj”文件。-->
    <!--            </el-text>-->
    <!--          </div>-->
    <!--        </template>-->

    <!--      </el-upload>-->

    <!--      <el-button type="success" @click="submitUpload" style="margin-top: 10px">-->
    <!--        提交数据-->
    <!--      </el-button>-->
    <!--    </div>-->

    <!--    <div v-if="showPages==2">-->
    <!--      <el-text class="mx-1" type="primary">请选择相对应的shp字段，</el-text>-->
    <!--      <el-text class="mx-1" type="danger">*</el-text>-->
    <!--      <el-text class="mx-1" type="primary">为必选字段</el-text>-->

    <!--      <el-form :model="form" label-width="140px" style="margin-top: 20px">-->
    <!--        <el-form-item label="研究区名称">-->
    <!--          <el-select v-model="form.name" placeholder="请选择名称字段">-->
    <!--            <el-option-->
    <!--                v-for="item in options"-->
    <!--                :key="item.name"-->
    <!--                :label="item.name"-->
    <!--                :value="item.name"-->
    <!--            />-->
    <!--          </el-select>-->
    <!--        </el-form-item>-->

    <!--        <el-form-item label="研究区面积(km^2)">-->
    <!--          <el-select v-model="form.area" placeholder="请选择面积字段">-->
    <!--            <el-option-->
    <!--                v-for="item in options"-->
    <!--                :key="item.name"-->
    <!--                :label="item.name"-->
    <!--                :value="item.name"-->
    <!--            />-->
    <!--          </el-select>-->
    <!--        </el-form-item>-->

    <!--        <el-form-item label="研究区周长(km)">-->
    <!--          <el-select v-model="form.length" placeholder="请选择周长字段">-->
    <!--            <el-option-->
    <!--                v-for="item in options"-->
    <!--                :key="item.name"-->
    <!--                :label="item.name"-->
    <!--                :value="item.name"-->
    <!--            />-->
    <!--          </el-select>-->
    <!--        </el-form-item>-->

    <!--        <el-form-item>-->
    <!--          <el-button type="primary" @click="submitForm()" :loading="isLoading">-->
    <!--            确定-->
    <!--          </el-button>-->
    <!--        </el-form-item>-->
    <!--      </el-form>-->
    <!--    </div>-->

    <!--    <div v-if="showPages==3">-->
    <!--      <el-table :data="tableData" style="width: 100%" border>-->
    <!--        <el-table-column prop="fid" label="序号"/>-->
    <!--        <el-table-column prop="name" label="研究区名称"/>-->
    <!--        <el-table-column prop="area" label="研究区面积(km^2)"/>-->
    <!--        <el-table-column prop="length" label="研究区名称(km)"/>-->
    <!--        <el-table-column label="修改">-->
    <!--          <template #default="scope">-->
    <!--            <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">-->
    <!--              Edit-->
    <!--            </el-button>-->
    <!--          </template>-->
    <!--        </el-table-column>-->
    <!--      </el-table>-->
    <!--      <el-button type="primary" style="margin-top: 20px" @click="publish_StudyAreaScope">-->
    <!--        确定-->
    <!--      </el-button>-->

    <!--      <el-dialog-->
    <!--          v-model="innerVisible"-->
    <!--          width="500"-->
    <!--          title="研究区属性更改"-->
    <!--          append-to-body-->
    <!--      >-->
    <!--        <el-form :model="formValue" label-width="140px" style="margin-top: 30px">-->
    <!--          <el-form-item label="研究区名称">-->
    <!--            <el-input v-model="formValue.name"/>-->
    <!--          </el-form-item>-->
    <!--          <el-form-item label="研究区面积(km^2)">-->
    <!--            <el-input v-model="formValue.area"/>-->
    <!--          </el-form-item>-->
    <!--          <el-form-item label="研究区周长(km)">-->
    <!--            <el-input v-model="formValue.length"/>-->
    <!--          </el-form-item>-->
    <!--          <el-form-item>-->
    <!--            <el-button type="primary" @click="updateLocal">修改</el-button>-->
    <!--          </el-form-item>-->
    <!--        </el-form>-->
    <!--      </el-dialog>-->

    <!--    </div>-->

  </el-dialog>
</template>

<script setup lang="ts" name="StudyAreaScopeDialog">
import {onBeforeUnmount, reactive, ref} from 'vue'
import {ElMessage, ElMessageBox, genFileId} from 'element-plus'
import type {UploadInstance, UploadRawFile} from 'element-plus'
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";

// let showPages: any = ref(1)
//
// // 使用UpLoadDialogStore
// const upLoadDialogStore = useUpLoadDialogStore();
// // 上传组件的引用
// const upload = ref<UploadInstance>()
//
// // 文件列表
// const formfile: any = reactive<any>({
//   fileList: [],
// })
//
// const get_StudyAreaScope = async () => {
//   await upLoadDialogStore.get_StudyAreaScope_Data();
// }
//
// const handleExceed = (files: any) => {
//   ElMessage.warning('最多只能上传一个文件！');
//   upload.value!.clearFiles() // 清除文件列表
//   const file = files[0] as UploadRawFile
//   file.uid = genFileId() // 生成唯一文件ID
//   upload.value!.handleStart(file) // 开始上传文件
// }
//
// const options: any = ref([])
//
// const submitUpload = async () => {
//   let formData = new FormData();
//   formData.append('file', formfile.fileList[0].raw); // 添加文件数据到表单数据
//   let result: any = await upLoadDialogStore.upLoad_StudyAreaScope_Data(formData)
//   if (result.code == 1) {
//     showPages.value = 2
//     options.value = result.data.field_attributes
//   }
// }
//
//
// const form: any = reactive({
//   name: '',
//   area: '',
//   length: '',
// })
//
// const tableData: any = ref()
// const isLoading = ref(false)
// const submitForm = async () => {
//   isLoading.value = true;
//   let result: any = await upLoadDialogStore.create_StudyAreaScope_Table(form)
//
//   if (result.code == 1) {
//     isLoading.value = false;
//     showPages.value = 3
//     tableData.value = result.data.value
//   }
// }
//
// const innerVisible = ref(false)
// const formValue: any = reactive({
//   name: '',
//   area: '',
//   length: '',
//   fid: '',
//   index: 0,
// })
// const handleEdit = (index: number, row: any) => {
//   formValue.index = index
//   formValue.fid = row.fid
//   formValue.name = row.name
//   formValue.area = row.area
//   formValue.length = row.length
//   innerVisible.value = true
// }
//
// const updateLocal = async () => {
//   tableData.value[formValue.index].name = formValue.name
//   tableData.value[formValue.index].area = formValue.area
//   tableData.value[formValue.index].length = formValue.length
//
//   let result: any = await upLoadDialogStore.update_StudyAreaScope_Table(formValue)
//   console.log(result)
//   if (result.code == 1) {
//     innerVisible.value = false
//     ElMessage({
//       message: '数据修改成功',
//       type: 'success',
//     })
//   }
// }
//
// const publish_StudyAreaScope = async () => {
//   let result: any = await upLoadDialogStore.publish_StudyAreaScope_Data()
//   if (result.code == 1) {
//     upLoadDialogStore.StudyAreaScopeDialogVisible = false
//   }
// }

// 使用UpLoadDialogStore
const upLoadDialogStore = useUpLoadDialogStore();
// 上传组件的引用
const upload = ref<UploadInstance>()

// 文件列表
const formfile: any = reactive<any>({
  fileList: [],
})

const get_StudyAreaScope = async () => {
  await upLoadDialogStore.get_StudyAreaScope_Data();
}

const handleExceed = (files: any) => {
  ElMessage.warning('最多只能上传一个文件！');
  upload.value!.clearFiles() // 清除文件列表
  const file = files[0] as UploadRawFile
  file.uid = genFileId() // 生成唯一文件ID
  upload.value!.handleStart(file) // 开始上传文件
}

const isLoading = ref(false)

const submitUpload = async () => {
  let formData = new FormData();
  formData.append('file', formfile.fileList[0].raw); // 添加文件数据到表单数据

  isLoading.value = true;

  let result: any = await upLoadDialogStore.upLoad_StudyAreaScope_Data(formData)
  if (result.code == 1) {

    isLoading.value = false;

    ElMessage({
      message: '上传成功',
      type: 'success',
    })
    upLoadDialogStore.StudyAreaScopeDialogVisible = false
  } else {
    isLoading.value = false;
  }
}

</script>


<style scoped lang="scss">
</style>
<!--<template>-->
<!--  <el-dialog v-model="upLoadDialogStore.SWMMandEFDCInteractiveUnitDialogVisible" destroy-on-close>-->
<!--    &lt;!&ndash; 自定义标题栏 &ndash;&gt;-->
<!--    <template #header="{ titleId, titleClass }">-->
<!--      <div class="my-header">-->
<!--        <h4>{{ "空间离散数据-SWMM-EFDC交互单元" }}</h4>-->
<!--      </div>-->
<!--    </template>-->

<!--    <div v-if="showPages==1">-->
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

<!--      <el-form :model="form" label-width="140px" style="margin-top: 20px" :rules="rules">-->

<!--        <el-form-item label="HRU名称" prop="name">-->
<!--          <el-select v-model="form.name" placeholder="请选择名称字段">-->
<!--            <el-option-->
<!--                v-for="item in options"-->
<!--                :key="item.name"-->
<!--                :label="item.name"-->
<!--                :value="item.name"-->
<!--            />-->
<!--          </el-select>-->
<!--        </el-form-item>-->

<!--        <el-form-item label="EFDC单元序列" prop="cellindex">-->
<!--        <el-select v-model="form.cellindex" placeholder="请选择EFDC单元序列字段">-->
<!--          <el-option-->
<!--              v-for="item in options"-->
<!--              :key="item.name"-->
<!--              :label="item.name"-->
<!--              :value="item.name"-->
<!--          />-->
<!--        </el-select>-->
<!--        </el-form-item>-->

<!--        <el-form-item label="激活单元" prop="value">-->
<!--          <el-select v-model="form.value" placeholder="请选择激活单元字段">-->
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
<!--      <el-table :data="tableData" style="width: 100%" border max-height="500">-->
<!--        <el-table-column prop="fid" label="序号" width="100"/>-->
<!--        <el-table-column prop="name" label="HRU名称"/>-->
<!--        <el-table-column prop="cellindex" label="EFDC单元序列"/>-->
<!--        <el-table-column prop="value" label="激活单元"/>-->
<!--        <el-table-column label="修改" width="100">-->
<!--          <template #default="scope">-->
<!--            <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">-->
<!--              Edit-->
<!--            </el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--      </el-table>-->
<!--      <el-button type="primary" style="margin-top: 20px" @click="publish_SWMMandEFDCInteractiveUnit">-->
<!--        确定-->
<!--      </el-button>-->

<!--      <el-dialog-->
<!--          v-model="innerVisible"-->
<!--          width="500"-->
<!--          title="研究区属性更改"-->
<!--          append-to-body-->
<!--      >-->
<!--        <el-form :model="formValue" label-width="140px" style="margin-top: 30px">-->
<!--          <el-form-item label="HRU名称">-->
<!--            <el-input v-model="formValue.name"/>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="EFDC单元序列">-->
<!--            <el-input v-model="formValue.cellindex"/>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="激活单元">-->
<!--            <el-input v-model="formValue.value"/>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button type="primary" @click="updateLocal">修改</el-button>-->
<!--          </el-form-item>-->
<!--        </el-form>-->
<!--      </el-dialog>-->

<!--    </div>-->
<!--  </el-dialog>-->
<!--</template>-->

<!--<script setup lang="ts" name="SWMMandEFDCInteractiveUnitDialog">-->
<!--import {onBeforeUnmount, reactive, ref} from 'vue'-->
<!--import {ElMessage, ElMessageBox, type FormRules, genFileId} from 'element-plus'-->
<!--import type {UploadInstance, UploadRawFile} from 'element-plus'-->
<!--import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";-->

<!--let showPages: any = ref(1)-->

<!--// 使用UpLoadDialogStore-->
<!--const upLoadDialogStore = useUpLoadDialogStore();-->
<!--// 上传组件的引用-->
<!--const upload = ref<UploadInstance>()-->

<!--// 文件列表-->
<!--const formfile: any = reactive<any>({-->
<!--  fileList: [],-->
<!--})-->

<!--const handleExceed = (files: any) => {-->
<!--  ElMessage.warning('最多只能上传一个文件！');-->
<!--  upload.value!.clearFiles() // 清除文件列表-->
<!--  const file = files[0] as UploadRawFile-->
<!--  file.uid = genFileId() // 生成唯一文件ID-->
<!--  upload.value!.handleStart(file) // 开始上传文件-->
<!--}-->

<!--const options: any = ref([])-->

<!--const submitUpload = async () => {-->
<!--  let formData = new FormData();-->
<!--  formData.append('file', formfile.fileList[0].raw); // 添加文件数据到表单数据-->
<!--  let result: any = await upLoadDialogStore.upLoad_SWMMandEFDCInteractiveUnit_Data(formData)-->
<!--  if (result.code == 1) {-->
<!--    showPages.value = 2-->
<!--    options.value = result.data.field_attributes-->
<!--  }-->
<!--}-->


<!--interface RuleForm {-->
<!--  cellindex: string,-->
<!--  value: string,-->
<!--  name: string-->
<!--}-->

<!--const form: any = reactive<RuleForm>({-->
<!--  cellindex: '',-->
<!--  value: '',-->
<!--  name: '',-->
<!--})-->

<!--const rules = reactive<FormRules<RuleForm>>({-->
<!--  cellindex: [-->
<!--    {-->
<!--      required: true,-->
<!--      message: '请选择与名字对应的shp字段',-->
<!--      trigger: 'change',-->
<!--    },-->
<!--  ],-->
<!--  value: [-->
<!--    {-->
<!--      required: true,-->
<!--      message: '请选择与名字对应的shp字段',-->
<!--      trigger: 'change',-->
<!--    },-->
<!--  ],-->
<!--  name: [-->
<!--    {-->
<!--      required: true,-->
<!--      message: '请选择与名字对应的shp字段',-->
<!--      trigger: 'change',-->
<!--    },-->
<!--  ],-->
<!--})-->

<!--const tableData: any = ref()-->
<!--const isLoading = ref(false)-->
<!--const submitForm = async () => {-->
<!--  isLoading.value = true;-->
<!--  let result: any = await upLoadDialogStore.create_SWMMandEFDCInteractiveUnit_Table(form)-->
<!--  if (result.code == 1) {-->
<!--    isLoading.value = false;-->
<!--    showPages.value = 3-->
<!--    tableData.value = result.data.value-->
<!--  }-->
<!--}-->

<!--const innerVisible = ref(false)-->
<!--const formValue: any = reactive({-->
<!--  cellindex: '',-->
<!--  value: '',-->
<!--  fid: '',-->
<!--  name: '',-->
<!--  index: 0,-->
<!--})-->
<!--const handleEdit = (index: number, row: any) => {-->
<!--  formValue.index = index-->
<!--  formValue.fid = row.fid-->
<!--  formValue.cellindex = row.cellindex-->
<!--  formValue.value = row.value-->
<!--  formValue.name = row.name-->
<!--  innerVisible.value = true-->
<!--}-->

<!--const updateLocal = async () => {-->
<!--  tableData.value[formValue.index].name = formValue.name-->
<!--  tableData.value[formValue.index].cellindex = formValue.cellindex-->
<!--  tableData.value[formValue.index].value = formValue.value-->

<!--  let result: any = await upLoadDialogStore.update_SWMMandEFDCInteractiveUnit_Table(formValue)-->
<!--  console.log(result)-->
<!--  if (result.code == 1) {-->
<!--    innerVisible.value = false-->
<!--    ElMessage({-->
<!--      message: '数据修改成功',-->
<!--      type: 'success',-->
<!--    })-->
<!--  }-->
<!--}-->

<!--const publish_SWMMandEFDCInteractiveUnit = async () => {-->
<!--  let result: any = await upLoadDialogStore.publish_SWMMandEFDCInteractiveUnit_Data()-->
<!--  if (result.code == 1) {-->
<!--    upLoadDialogStore.SWMMandEFDCInteractiveUnitDialogVisible = false-->
<!--  }-->
<!--}-->

<!--</script>-->


<!--<style scoped lang="scss">-->
<!--</style>-->


<template>
  <el-dialog v-model="upLoadDialogStore.SWMMandEFDCInteractiveUnitDialogVisible" destroy-on-close>
    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "空间离散数据-SWMM-EFDC交互单元" }}</h4>
      </div>
    </template>

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

<script setup lang="ts" name="MODFLOWSpatialDiscreteDataDialog">
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

  let result: any = await upLoadDialogStore.upLoad_SWMMandEFDCInteractiveUnit_Data(formData)
  if (result.code == 1) {

    isLoading.value = false;

    ElMessage({
      message: '上传成功',
      type: 'success',
    })
    upLoadDialogStore.SWMMandEFDCInteractiveUnitDialogVisible = false
  } else {
    isLoading.value = false;
  }
}
</script>


<style scoped lang="scss">
</style>
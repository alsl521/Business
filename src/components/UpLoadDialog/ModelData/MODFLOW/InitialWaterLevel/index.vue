<!--<template>-->
<!--  <el-dialog v-model="upLoadDialogStore.MODFLOWInitialWaterLevelDialogVisible" destroy-on-close>-->
<!--    &lt;!&ndash; 自定义标题栏 &ndash;&gt;-->
<!--    <template #header="{ titleId, titleClass }">-->
<!--      <div class="my-header">-->
<!--        <h4>{{ "MODFLOW-初始水位" }}</h4>-->
<!--      </div>-->
<!--    </template>-->

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
<!--  </el-dialog>-->
<!--</template>-->

<!--<script setup lang="ts" name="MODFLOWInitialWaterLevelDialog">-->
<!--import {onBeforeUnmount, reactive, ref} from 'vue'-->
<!--import {ElMessage, ElMessageBox, genFileId} from 'element-plus'-->
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

<!--const get_StudyAreaScope = async () => {-->
<!--  await upLoadDialogStore.get_StudyAreaScope_Data();-->
<!--}-->

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
<!--  let result: any = await upLoadDialogStore.upLoad_StudyAreaScope_Data(formData)-->
<!--  if (result.code == 1) {-->
<!--    showPages.value = 2-->
<!--    options.value = result.data.field_attributes-->
<!--  }-->
<!--}-->


<!--const form: any = reactive({-->
<!--  name: '',-->
<!--  area: '',-->
<!--  length: '',-->
<!--})-->

<!--const tableData: any = ref()-->
<!--const isLoading = ref(false)-->
<!--const submitForm = async () => {-->
<!--  isLoading.value = true;-->
<!--  let result: any = await upLoadDialogStore.create_StudyAreaScope_Table(form)-->

<!--  if (result.code == 1) {-->
<!--    isLoading.value = false;-->
<!--    showPages.value = 3-->
<!--    tableData.value = result.data.value-->
<!--  }-->
<!--}-->

<!--const innerVisible = ref(false)-->
<!--const formValue: any = reactive({-->
<!--  name: '',-->
<!--  area: '',-->
<!--  length: '',-->
<!--  fid: '',-->
<!--  index: 0,-->
<!--})-->
<!--const handleEdit = (index: number, row: any) => {-->
<!--  formValue.index = index-->
<!--  formValue.fid = row.fid-->
<!--  formValue.name = row.name-->
<!--  formValue.area = row.area-->
<!--  formValue.length = row.length-->
<!--  innerVisible.value = true-->
<!--}-->

<!--const updateLocal = async () => {-->
<!--  tableData.value[formValue.index].name = formValue.name-->
<!--  tableData.value[formValue.index].area = formValue.area-->
<!--  tableData.value[formValue.index].length = formValue.length-->

<!--  let result: any = await upLoadDialogStore.update_StudyAreaScope_Table(formValue)-->
<!--  console.log(result)-->
<!--  if (result.code == 1) {-->
<!--    innerVisible.value = false-->
<!--    ElMessage({-->
<!--      message: '数据修改成功',-->
<!--      type: 'success',-->
<!--    })-->
<!--  }-->
<!--}-->

<!--const publish_StudyAreaScope = async () => {-->
<!--  let result: any = await upLoadDialogStore.publish_StudyAreaScope_Data()-->
<!--  if (result.code == 1) {-->
<!--    upLoadDialogStore.StudyAreaScopeDialogVisible = false-->
<!--  }-->
<!--}-->

<!--</script>-->


<!--<style scoped lang="scss">-->
<!--</style>-->

<template>
  <el-dialog v-model="upLoadDialogStore.MODFLOWInitialWaterLevelDialogVisible" destroy-on-close>
    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "地下水-初始水位" }}</h4>
      </div>
    </template>

    <div v-if="showPages==1">
      <el-button type="primary" @click="getInitialWaterLevel">
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
    </div>

    <div v-if="showPages==2">

      <div style="border: #bdc3c7 solid 0.5px">
        <el-table-v2
            :columns="columns"
            :data="MODFLOW_InitialWaterLevel"
            :width="460"
            :height="200"
            fixed
        />
      </div>


      <el-divider/>
      <div style="border: #bdc3c7 solid 0.5px">
        <el-table-v2
            :columns="columns_Observation"
            :data="MODFLOW_InitialWaterLevel_Observation"
            :width="800"
            :height="400"
            fixed
        />
      </div>

      <el-dialog v-model="dialogVisible" title="地下水-初始水位数据修改" width="800">
        <el-form :model="form" label-width="auto" style="max-width: 600px">

          <div v-for="(item, key) in form">
            <el-form-item :label="key" v-if="key !== 'geometry' && key !== 'table'">
              <el-input v-model="form[key]" placeholder="请输入需要修改的数据" clearable :disabled="key==='编号'"/>
            </el-form-item>

          </div>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

    </div>

  </el-dialog>
</template>

<script setup lang="tsx" name="MODFLOWInitialWaterLevelDialog">
import {reactive, ref} from 'vue'
import type {Column} from 'element-plus'
import {ElMessage, genFileId, TableV2FixedDir, ElButton, ElTag} from 'element-plus'
import type {UploadInstance, UploadRawFile} from 'element-plus'
import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";

const columns: Column<any>[] = [
  {
    key: 'fid',
    title: '索引',
    dataKey: 'fid',
    width: 150,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({cellData: fid}) => fid,
  },
  {
    key: 'name',
    title: '监测站点名称',
    dataKey: 'name',
    width: 150,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({cellData: name}) => name,
  },
  {
    key: 'operations',
    title: '编辑',
    cellRenderer: ({rowData}) => (
        <ElButton size="small" onClick={() => handleEdit(rowData)}>Edit</ElButton>
    ),
    width: 150,
    align: 'center',
  },
]

const columns_Observation: Column<any>[] = []

let showPages: any = ref(1)
// 使用UpLoadDialogStore
const upLoadDialogStore = useUpLoadDialogStore();

const MODFLOW_InitialWaterLevel = ref<any>([])
const MODFLOW_InitialWaterLevel_Observation = ref<any>([])

const getInitialWaterLevel = async () => {
  let result = await upLoadDialogStore.get_MODFLOWInitialWaterLevel_Data()
  if (result.code == 1) {
    MODFLOW_InitialWaterLevel.value = result.data[0].Admin_MODFLOW_InitialWaterLevel
    MODFLOW_InitialWaterLevel_Observation.value = result.data[1].Admin_MODFLOW_InitialWaterLevel_Observation
    x()
    showPages.value = 2
  }
}

const x = () => {

  for (const key in MODFLOW_InitialWaterLevel_Observation.value[0]) {
    columns_Observation.push({
      key: key,
      title: key,
      dataKey: key,
      width: 150,
      fixed: TableV2FixedDir.LEFT,
      cellRenderer: ({cellData: key}) => key,
    });
  }
  columns_Observation.push({
    key: 'operations',
    title: '编辑',
    cellRenderer: ({rowData}) => (
        <ElButton size="small" onClick={() => handleEdit(rowData)}>Edit</ElButton>
    ),
    width: 150,
    align: 'center',
  })
}

let dialogVisible = ref(false)

let form = ref({})

const fieldMapping = {
  fid: '编号',
  name: '名称'
};
const handleEdit = (scope: any) => {
  dialogVisible.value = true

  form.value = {}

  if (scope.hasOwnProperty("geometry")) {

    for (const key in scope) {
      if (scope.hasOwnProperty(key)) {
        if (fieldMapping.hasOwnProperty(key)) {
          form.value[fieldMapping[key]] = scope[key];
        }
      }
    }
  } else {
    // 对于没有 "geometry" 字段的情况，直接使用原始数据
    form.value = {...scope}
  }

};

const onSubmit = async () => {
  let flag = false
  for (const key in form.value) {
    if (Object.prototype.hasOwnProperty.call(form.value, key)) {
      if (key == 'geometry') {
        flag = true
      }
    }
  }

  if (flag) {
    form.value['table'] = 'MODFLOW_InitialWaterLevel';
  } else {
    form.value['table'] = 'MODFLOW_InitialWaterLevel_Observation';
  }

  let result = await upLoadDialogStore.modify_data(form.value)

  if (result.code == 1) {
    let result = await upLoadDialogStore.get_MODFLOWInitialWaterLevel_Data()
    dialogVisible.value = false
    if (result.code == 1) {
      MODFLOW_InitialWaterLevel.value = result.data[0].Admin_MODFLOW_InitialWaterLevel
      MODFLOW_InitialWaterLevel_Observation.value = result.data[1].Admin_MODFLOW_InitialWaterLevel_Observation
      x()
    }
  }
}

// 上传组件的引用
const upload = ref<UploadInstance>()

// 文件列表
const formfile: any = reactive<any>({
  fileList: [],
})

const isLoading = ref(false)

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
    let result: any = await upLoadDialogStore.upLoad_MODFLOWInitialWaterLevel_Data(formData)
    if (result.code == 1) {

      isLoading.value = false;

      ElMessage({
        message: '上传成功',
        type: 'success',
      })
      await getInitialWaterLevel()
      //upLoadDialogStore.MODFLOWInitialWaterLevelDialogVisible = false
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
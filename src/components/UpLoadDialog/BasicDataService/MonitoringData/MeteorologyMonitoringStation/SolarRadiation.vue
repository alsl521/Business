<!--<template>-->
<!--  <el-dialog v-model="upLoadDialogStore.SolarRadiationDialogVisible" destroy-on-close>-->
<!--    &lt;!&ndash; 自定义标题栏 &ndash;&gt;-->
<!--    <template #header="{ titleId, titleClass }">-->
<!--      <div class="my-header">-->
<!--        <h4>{{ "气象监测站点-太阳辐射" }}</h4>-->
<!--      </div>-->
<!--    </template>-->

<!--    <div v-if="showPages==1">-->
<!--      <el-button type="primary" @click="getSolarRadiation">-->
<!--        加载已有数据-->
<!--      </el-button>-->

<!--      <el-divider/>-->

<!--      <el-upload-->
<!--          ref="upload"-->
<!--          action=""-->
<!--          :limit="2"-->
<!--          :on-exceed="handleExceed"-->
<!--          :auto-upload="false"-->
<!--          accept=".zip,.rar,.7z,txt,.xlsx"-->
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
<!--            <div style="margin-top: 5px"></div>-->
<!--            <el-text type="primary">-->
<!--              请上传格式为.txt,.xls和.xlsx格式的观测记录文件,时间格式为YYYY/MM/DD HH:MM:SS-->
<!--            </el-text>-->
<!--          </div>-->
<!--        </template>-->

<!--      </el-upload>-->

<!--      <el-button type="success" @click="submitUpload" style="margin-top: 10px">-->
<!--        提交数据-->
<!--      </el-button>-->
<!--    </div>-->

<!--    <div v-if="showPages==2">-->
<!--      <el-form ref="ruleFormRef" :model="form" label-width="140px" style="margin-top: 20px" :rules="rules">-->
<!--        <el-form-item>-->
<!--          <el-text class="mx-1" type="primary">请选择相对应的shp字段，</el-text>-->
<!--          <el-text class="mx-1" type="danger">*</el-text>-->
<!--          <el-text class="mx-1" type="primary">为必选字段</el-text>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="监测站点名称" prop="shp_name">-->
<!--          <el-select v-model="form.shp_name" placeholder="请选择名称字段">-->
<!--            <el-option-->
<!--                v-for="item in shp_options"-->
<!--                :key="item.name"-->
<!--                :label="item.name"-->
<!--                :value="item.name"-->
<!--            />-->
<!--          </el-select>-->
<!--        </el-form-item>-->

<!--        <el-form-item>-->
<!--          <el-text class="mx-1" type="primary">请选择相对应的观测站点字段，</el-text>-->
<!--          <el-text class="mx-1" type="danger">*</el-text>-->
<!--          <el-text class="mx-1" type="primary">为必选字段</el-text>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="监测站点名称" prop="observation_name">-->
<!--          <el-select v-model="form.observation_name" placeholder="请选择名称字段">-->
<!--            <el-option-->
<!--                v-for="item in file_options"-->
<!--                :key="item"-->
<!--                :label="item"-->
<!--                :value="item"-->
<!--            />-->
<!--          </el-select>-->
<!--        </el-form-item>-->

<!--        <el-form-item label="监测时间序列" prop="observation_time">-->
<!--          <el-select v-model="form.observation_time" placeholder="请选择观测时间字段">-->
<!--            <el-option-->
<!--                v-for="item in file_options"-->
<!--                :key="item"-->
<!--                :label="item"-->
<!--                :value="item"-->
<!--            />-->
<!--          </el-select>-->
<!--        </el-form-item>-->

<!--        <el-form-item label="太阳辐射(W/m^2)" prop="observation_solarradiation">-->
<!--          <el-select v-model="form.observation_solarradiation" placeholder="请选择太阳辐射字段">-->
<!--            <el-option-->
<!--                v-for="item in file_options"-->
<!--                :key="item"-->
<!--                :label="item"-->
<!--                :value="item"-->
<!--            />-->
<!--          </el-select>-->
<!--        </el-form-item>-->

<!--        <el-form-item>-->
<!--          <el-button type="primary" @click="submitForm(ruleFormRef)" :loading="isLoading">-->
<!--            确定-->
<!--          </el-button>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--    </div>-->

<!--    <div v-if="showPages==3">-->
<!--      <el-text size="large" type="primary">太阳辐射监测点属性表</el-text>-->
<!--      <el-table :data="shp_Data" style="width: 100%;margin-bottom: 20px;margin-top: 10px" border max-height="200">-->
<!--        <el-table-column prop="fid" label="序号" width="100"/>-->
<!--        <el-table-column prop="name" label="监测站点名称"/>-->
<!--        <el-table-column label="编辑" width="100">-->
<!--          <template #default="scope">-->
<!--            <el-button type="primary" size="small"-->
<!--                       @click="handle_Monitoring_Point_Attribute_Edit(scope.$index, scope.row)">-->
<!--              Edit-->
<!--            </el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--      </el-table>-->

<!--      <el-text size="large" type="primary">太阳辐射观测记录表</el-text>-->
<!--      <el-table :data="observation_Data" style="width: 100%;margin-top: 10px" border height="200">-->
<!--        <el-table-column prop="fid" label="序号" width="100"/>-->
<!--        <el-table-column prop="name" label="监测站点名称"/>-->
<!--        <el-table-column prop="time" label="检测时间序列"/>-->
<!--        <el-table-column prop="solarradiation" label="太阳辐射(W/m^2)"/>-->
<!--        <el-table-column label="编辑" width="100">-->
<!--          <template #default="scope">-->
<!--            <el-button type="primary" size="small" @click="handle_Observation_Data_Edit(scope.$index, scope.row)">-->
<!--              Edit-->
<!--            </el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--      </el-table>-->

<!--      <el-button type="primary" style="margin-top: 20px" @click="publishSolarRadiation">-->
<!--        确定-->
<!--      </el-button>-->

<!--      <el-dialog-->
<!--          v-model="Monitoring_Point_Attribute_Modification_Visible"-->
<!--          width="500"-->
<!--          title="监测点属性更改"-->
<!--          append-to-body-->
<!--          destroy-on-close-->
<!--      >-->


<!--        <el-form :model="Monitoring_Point_Attribute_Modification_FormValue" label-width="120px"-->
<!--                 style="margin-top: 30px">-->
<!--          <el-form-item label="监测站点名称">-->
<!--            <el-input v-model="Monitoring_Point_Attribute_Modification_FormValue.name"/>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button type="primary" @click="updateLocal">修改</el-button>-->
<!--          </el-form-item>-->
<!--        </el-form>-->

<!--      </el-dialog>-->

<!--      <el-dialog-->
<!--          v-model="Observation_Data_Modification_Visible"-->
<!--          width="500"-->
<!--          title="观测数据更改"-->
<!--          append-to-body-->
<!--          destroy-on-close-->
<!--      >-->

<!--        <el-form :model="Observation_Data_Modification_FormValue" label-width="140px" style="margin-top: 30px">-->
<!--          <el-form-item label="监测站点名称">-->
<!--            <el-input v-model="Observation_Data_Modification_FormValue.name"/>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="监测时间序列">-->
<!--            <el-input v-model="Observation_Data_Modification_FormValue.time"/>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="太阳辐射(W/m^2)">-->
<!--            <el-input v-model="Observation_Data_Modification_FormValue.solarradiation"/>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button type="primary" @click="updateLocal">修改</el-button>-->
<!--          </el-form-item>-->
<!--        </el-form>-->

<!--      </el-dialog>-->

<!--    </div>-->
<!--  </el-dialog>-->
<!--</template>-->

<!--<script setup lang="ts" name="SolarRadiationDialog">-->
<!--import {reactive, ref, watch} from 'vue'-->
<!--import {ElMessage, type FormInstance, type FormRules, genFileId} from 'element-plus'-->
<!--import type {UploadInstance, UploadRawFile} from 'element-plus'-->
<!--import useUpLoadDialogStore from "@/stores/UpLoadFiles/UpLoadDialogStore";-->

<!--const ruleFormRef = ref<FormInstance>()-->
<!--let showPages: any = ref(1)-->

<!--// 使用UpLoadDialogStore-->
<!--const upLoadDialogStore = useUpLoadDialogStore();-->
<!--// 上传组件的引用-->
<!--const upload = ref<UploadInstance>()-->

<!--// 文件列表-->
<!--const formfile: any = reactive<any>({-->
<!--  fileList: [],-->
<!--})-->
<!--//直接获取数据-->
<!--const getSolarRadiation = async () => {-->
<!--  await upLoadDialogStore.get_SolarRadiation_Data();-->
<!--}-->

<!--// 上传文件后获取链接-->
<!--const handleExceed = (files: any) => {-->
<!--  ElMessage.warning('最多只能上传两个文件！');-->
<!--  const file1 = formfile.fileList[1].raw as UploadRawFile-->
<!--  const file2 = files[0] as UploadRawFile-->
<!--  upload.value!.clearFiles()-->
<!--  file1.uid = genFileId()-->
<!--  file2.uid = genFileId()-->
<!--  upload.value!.handleStart(file1)-->
<!--  upload.value!.handleStart(file2)-->
<!--}-->

<!--const shp_options: any = ref([])-->
<!--const file_options: any = ref([])-->

<!--const submitUpload = async () => {-->
<!--  if (formfile.fileList.length == 2 && formfile.fileList[0].raw != formfile.fileList[1].raw) {-->
<!--    let formData = new FormData();-->
<!--    formData.append('file1', formfile.fileList[0].raw); // 添加文件数据到表单数据-->
<!--    formData.append('file2', formfile.fileList[1].raw); // 添加文件数据到表单数据-->
<!--    let result: any = await upLoadDialogStore.upLoad_SolarRadiation_Data(formData)-->
<!--    if (result.code == 1) {-->
<!--      showPages.value = 2-->
<!--      shp_options.value = result.data.field_attributes-->
<!--      file_options.value = result.data.xlsx_attributes-->
<!--    }-->
<!--  } else {-->
<!--    ElMessage({-->
<!--      message: '请同时上传监测站点和监测数据',-->
<!--      type: 'warning',-->
<!--    })-->
<!--  }-->
<!--}-->

<!--//确定对应关系-->
<!--interface RuleForm {-->
<!--  shp_name: string-->
<!--  observation_name: string-->
<!--  observation_time: string-->
<!--  observation_solarradiation: string-->
<!--}-->

<!--const form: any = reactive<RuleForm>({-->
<!--  shp_name: '',-->
<!--  observation_name: '',-->
<!--  observation_time: '',-->
<!--  observation_solarradiation: '',-->
<!--})-->

<!--const rules = reactive<FormRules<RuleForm>>({-->
<!--  shp_name: [-->
<!--    {-->
<!--      required: true,-->
<!--      message: '请选择与名字对应的shp字段',-->
<!--      trigger: 'change',-->
<!--    },-->
<!--  ],-->
<!--  observation_name: [-->
<!--    {-->
<!--      required: true,-->
<!--      message: '请选择与观察点名称对应的字段',-->
<!--      trigger: 'change',-->
<!--    },-->
<!--  ],-->
<!--  observation_time: [-->
<!--    {-->
<!--      required: true,-->
<!--      message: '请选择与观察点时间对应的字段',-->
<!--      trigger: 'change',-->
<!--    },-->
<!--  ],-->
<!--  observation_solarradiation: [-->
<!--    {-->
<!--      required: true,-->
<!--      message: '请选择与观察点太阳辐射对应的字段',-->
<!--      trigger: 'change',-->
<!--    },-->
<!--  ],-->
<!--})-->

<!--const shp_Data: any = ref()-->
<!--const observation_Data: any = ref()-->
<!--const isLoading = ref(false)-->
<!--const submitForm = (formEl: FormInstance | undefined) => {-->
<!--  if (!formEl) return-->
<!--  formEl.validate(async (valid) => {-->
<!--    if (valid) {-->
<!--      isLoading.value = true;-->
<!--      let result: any = await upLoadDialogStore.create_SolarRadiation_Table(form)-->

<!--      if (result.code == 1) {-->
<!--        isLoading.value = false;-->
<!--        showPages.value = 3-->
<!--        shp_Data.value = result.data.shp_data-->
<!--        observation_Data.value = result.data.observation_data-->
<!--      }-->
<!--    } else {-->
<!--      console.log('error submit!')-->
<!--      return false-->
<!--    }-->
<!--  })-->
<!--}-->


<!--// 修改数据并发布-->
<!--const Monitoring_Point_Attribute_Modification_Visible = ref(false)-->
<!--const Observation_Data_Modification_Visible = ref(false)-->

<!--const Monitoring_Point_Attribute_Modification_FormValue: any = reactive({-->
<!--  FormName: 'Monitoring_Point_Attribute',-->
<!--  name: '',-->
<!--  fid: '',-->
<!--  index: 0,-->
<!--})-->

<!--const Observation_Data_Modification_FormValue: any = reactive({-->
<!--  FormName: 'Observation_Data',-->
<!--  name: '',-->
<!--  time: '',-->
<!--  solarradiation: '',-->
<!--  fid: '',-->
<!--  index: 0,-->
<!--})-->

<!--const handle_Monitoring_Point_Attribute_Edit = (index: number, row: any) => {-->
<!--  Monitoring_Point_Attribute_Modification_FormValue.index = index-->
<!--  Monitoring_Point_Attribute_Modification_FormValue.fid = row.fid-->
<!--  Monitoring_Point_Attribute_Modification_FormValue.name = row.name-->
<!--  Monitoring_Point_Attribute_Modification_Visible.value = true-->
<!--}-->

<!--const handle_Observation_Data_Edit = (index: number, row: any) => {-->
<!--  Observation_Data_Modification_FormValue.index = index-->
<!--  Observation_Data_Modification_FormValue.fid = row.fid-->
<!--  Observation_Data_Modification_FormValue.name = row.name-->
<!--  Observation_Data_Modification_FormValue.time = row.time-->
<!--  Observation_Data_Modification_FormValue.solarradiation = row.solarradiation-->
<!--  Observation_Data_Modification_Visible.value = true-->
<!--}-->

<!--const updateLocal = async () => {-->
<!--  if (Monitoring_Point_Attribute_Modification_Visible.value == true) {-->
<!--    shp_Data.value[Monitoring_Point_Attribute_Modification_FormValue.index].name = Monitoring_Point_Attribute_Modification_FormValue.name-->

<!--    let result: any = await upLoadDialogStore.update_SolarRadiation_Table(Monitoring_Point_Attribute_Modification_FormValue)-->
<!--    if (result.code == 1) {-->
<!--      Monitoring_Point_Attribute_Modification_Visible.value = false-->
<!--      ElMessage({-->
<!--        message: '数据修改成功',-->
<!--        type: 'success',-->
<!--      })-->
<!--    }-->
<!--  } else if (Observation_Data_Modification_Visible.value == true) {-->
<!--    observation_Data.value[Observation_Data_Modification_FormValue.index].name = Observation_Data_Modification_FormValue.name-->
<!--    observation_Data.value[Observation_Data_Modification_FormValue.index].time = Observation_Data_Modification_FormValue.time-->
<!--    observation_Data.value[Observation_Data_Modification_FormValue.index].solarradiation = Observation_Data_Modification_FormValue.solarradiation-->

<!--    let result: any = await upLoadDialogStore.update_SolarRadiation_Table(Observation_Data_Modification_FormValue)-->
<!--    if (result.code == 1) {-->
<!--      Observation_Data_Modification_Visible.value = false-->
<!--      ElMessage({-->
<!--        message: '数据修改成功',-->
<!--        type: 'success',-->
<!--      })-->
<!--    }-->
<!--  }-->
<!--}-->

<!--const publishSolarRadiation = async () => {-->
<!--  let result: any = await upLoadDialogStore.publish_SolarRadiation_Data()-->
<!--  console.log(result)-->
<!--  if (result.code == 1) {-->
<!--    upLoadDialogStore.SolarRadiationDialogVisible = false-->
<!--  }-->
<!--}-->
<!--</script>-->


<!--<style scoped lang="scss">-->
<!--</style>-->

<template>
  <el-dialog v-model="upLoadDialogStore.SolarRadiationDialogVisible" destroy-on-close>
    <!-- 自定义标题栏 -->
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ "气象监测站点-太阳辐射" }}</h4>
      </div>
    </template>

    <el-button type="primary" @click="getSolarRadiation">
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

<script setup lang="ts" name="SolarRadiationDialog">
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
const getSolarRadiation = async () => {
  await upLoadDialogStore.get_SolarRadiation_Data();
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
    let result: any = await upLoadDialogStore.upLoad_SolarRadiation_Data(formData)
    if (result.code == 1) {

      isLoading.value = false;

      ElMessage({
        message: '上传成功',
        type: 'success',
      })
      upLoadDialogStore.SolarRadiationDialogVisible = false
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
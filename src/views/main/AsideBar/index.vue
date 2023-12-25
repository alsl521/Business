<template>
  <div>
    <el-scrollbar class="scrollbar">
      <el-menu text-color="#fff"
               background-color="#006d87"
               class="el-menu-vertical-demo">
        <Menu :menuList="menuStore.selectModelsContent"></Menu>
      </el-menu>
    </el-scrollbar>
  </div>

  <el-dialog v-model="menuStore.dialogTableVisible" destroy-on-close>
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4>{{ menuStore.titleHeader }}</h4>
      </div>
    </template>
    <UpLoadFile :ModelName="menuStore.ModelName " :MenuName="menuStore.MenuName"
                :FileType="menuStore.FileType"></UpLoadFile>

  </el-dialog>
</template>

<script lang="ts" setup name="AsideBar">
import Menu from "../AsideBar/menu/index.vue"
import {useMenuStore} from "@/stores/modules/MenuStore";
import {ElMessage} from "element-plus";
import {onMounted} from "vue";
import UpLoadFile from "@/components/UpLoadFile/index.vue"

const menuStore = useMenuStore();//使用menuStore

//获取所有菜单名称
async function getSelectModels() {

  let formData = new FormData();
  formData.append('ModelName1', 'MODFLOW');
  formData.append('ModelName2', 'EFDC');
  formData.append('ModelName3', 'SWMM');

  let code = await menuStore.selectModels(formData)
  if (code == 1) {
    console.log(menuStore.selectModelsContent)
    ElMessage.success('导入数据成功！');
  } else {
    ElMessage.error('导入数据失败，请您重新上传！');
  }
}

//获取所有菜单名称
onMounted(() => {
  getSelectModels()
})


</script>

<style scoped lang="scss">
.scrollbar {
  width: 200px;
  height: calc(100vh - 60px);
  background: #006d87;
}
</style>

<template>
  <template v-for="(item,index) in menuList" :key="item.menu_name">
    <el-menu-item v-if="item.sub_menu_name==null" :index="item.index" @click="getMenuName">
      <template #title>
        <span>{{ item.menu_name }}</span>
      </template>
    </el-menu-item>

    <el-sub-menu v-if="item.sub_menu_name!=null" :index="item.index">
      <template #title>
        <span>{{ item.menu_name }}</span>
      </template>
      <Menu :menuList="item.sub_menu_name"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts" name="Menu">
defineProps(['menuList'])

//-------仅用来控制对话框
import {useMenuStore} from "@/stores/modules/MenuStore";

const menuStore = useMenuStore();//使用menuStore
//------

//获取index对应的菜单名称,并弹出对话框
const getMenuName = (vc) => {
  menuStore.getDialogInfo(vc.index)
  menuStore.dialogTableVisible = true
}

</script>

<style scoped lang="scss">
</style>


<template>
  <el-config-provider :locale="locale">
    <router-view v-if="isRouterAlive"></router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = zhCn;
const isRouterAlive = ref(true);
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};
provide("reload", reload);
</script>


<style scoped></style>

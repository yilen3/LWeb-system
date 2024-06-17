<template>
  <router-view v-if="isRouterAlive"></router-view>
</template>
<script setup lang="ts">
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

<template>
  <LinLayout>
    <template #header>
      <div id="LinHeader" class="p-20px">header</div>
    </template>
    <template #content>
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in" appear>
          <keep-alive>
            <component :is="Component" :key="$route.fullPath" />
          </keep-alive>
        </Transition>
      </router-view>
    </template>
    <template #footer>底部</template>
  </LinLayout>
</template>
<script lang="ts">
export default {
  name: 'LinLayout',
}
</script>
<script setup lang="ts">

</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
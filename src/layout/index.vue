<template>
  <LinLayout>
    <template #header>
      <div id="LinHeader" class="p-20px">header</div>
    </template>
    <template #tagView>tagView</template>
    <template #slider>
      <!-- 可拖动边框变换大小 -->
      <div v-dragResize="dragOption" ref="sliderRef" class="bg-green-400 h-full relative">
      </div>
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
    <template #footer>
      <el-button @click="router.push('/homePage')">cesium</el-button>
    </template>
  </LinLayout>
</template>
<script lang="ts">
export default {
  name: 'LinLayout',
}
</script>
<script setup lang="ts">
const route = useRoute()
const router = useRouter()
// 侧边栏ref
const sliderRef = ref<HTMLElement | null>(null)
const dragOption = ref({
  minWidth: 200,
  maxWidth: 800,
  direction: ['top', 'right', 'bottom', 'left'],
  minHeight: 200,
  maxHeight: 800,
})

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
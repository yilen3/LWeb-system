<template>
  <LinLayout>
    <template #header>
      <vue-resizable class="w-full sticky0000 shadow-xl shadow-gray-100" :maxHeight="100" :minHeight="50"
        :active="['b']">
        <div class="xac w-full h-80px">123</div>
      </vue-resizable>
    </template>
    <template #tagView>tagView</template>
    <template #slider>
      <!-- 可拖动边框变换大小 -->
      <vue-resizable class="shadow-xl shadow-gray-300 w-full" :minWidth="300" :maxWidth="500" :active="['r']">
        <el-scrollbar class="yct gap-10px">
          <div class="w-full flex-1" v-for="item in 100" :key="item">{{ item }}</div>
        </el-scrollbar>
      </vue-resizable>
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
      <el-button class="homePage" @click="router.push('/homePage')">cesium</el-button>
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
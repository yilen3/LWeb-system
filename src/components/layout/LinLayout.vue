<template>
  <!-- 整体布局，之后优化 -->
  <div class="yst w-full h-screen overflow-hidden gap-20px">
    <header class="w-full xac sticky0000">
      <slot name="header" />
    </header>
    <div class="flex-1 xbc gap-20px">
      <section class="py-10px h-full relative inline-table w-300px">
        <div class="relative h-full w-full">
          <div class="h-full flex flex-col">
            <vue-resizable class="shadow-xl shadow-gray-300 w-full flex-grow-1 h-0" :w="300" :minWidth="300"
              :maxWidth="500" :active="['r']">
              <el-scrollbar class="h-full overflow-x-hidden">
                <slot name="slider" />
              </el-scrollbar>
            </vue-resizable>
          </div>
        </div>
      </section>
      <!-- 三部分，tagView，content，footer -->
      <div class="flex-1 h-full yst">
        <div v-if="$slots.tagView" class="tag-view w-full gap-1rem xlc px-20px py-10px">
          <slot name="tagView" />
        </div>
        <!-- 主要内容部分 -->
        <div class="flex-1 p-15px">
          <div class="relative h-full w-full">
            <div class="h-full yst">
              <div class="flex-grow-1 h-0">
                <el-scrollbar class="h-full overflow-auto overflow-hidden">
                  <slot name="content" />
                </el-scrollbar>
              </div>
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <section v-if="$slots.footer" class="w-full sticky0000">
          <slot name="footer" />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LinLayout',
}
</script>
<script setup lang="ts">
</script>

<style lang="scss" scoped></style>
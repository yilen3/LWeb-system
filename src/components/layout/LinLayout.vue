<template>
  <!-- 整体布局，之后优化 -->
  <div class="yst w-full h-screen overflow-hidden gap-20px">
    <header class="w-full xac sticky0000">
      <slot name="header" />
    </header>
    <div class="flex-1 xbc gap-20px">
      <section class="h-full relative inline-table w-300px">
        <slot name="slider" />
      </section>
      <!-- 三部分，tagView，content，footer -->
      <div class="flex-1 h-full yst">
        <div v-if="$slots.tagView" class="tag-view w-full gap-1rem xlc px-20px py-10px">
          <slot name="tagView" />
        </div>
        <!-- 主要内容部分 -->
        <div class="flex-1 w-full p-15px">
          <slot name="content" />
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
<template>
  <div class="ylt gap-10px" v-if="clock">
    <span>{{ clock.format('YYYY年') }}</span>
    <span>{{ clock.format('YYYY年MM月') }}</span>
    <span>{{ clock.format('YYYY年MM月DD日') }}</span>
    <span>{{ clock.format('YYYY年MM月DD日 hh时') }}</span>
    <span>{{ clock.format('YYYY年MM月DD日 hh时mm分') }}</span>
    <span>{{ clock.format('YYYY年MM月DD日 hh时mm分ss秒') }}</span>
  </div>
</template>

<script setup lang="ts">
const clock = ref()
const timestamps = useTimestamp()
watch(() => timestamps, (newValue, oldValue) => {
  clock.value = dayjs(newValue.value)
}, { deep: true })
</script>

<style scoped></style>
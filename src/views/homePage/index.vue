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
import axios from 'axios'
const clock = ref()
const timestamps = useTimestamp()
watch(() => timestamps, (newValue, oldValue) => {
  clock.value = dayjs(newValue.value)
}, { deep: true })
onMounted(() => {
  getJSON()
})
const getJSON = async () => {
  const res = await axios.get('http://localhost:8081/lineData')
  console.log('%c [ res ]-24', 'font-size:13px; background:pink; color:#bf2c9f;', res)
}

</script>

<style scoped></style>
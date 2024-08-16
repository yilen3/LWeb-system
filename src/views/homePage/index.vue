<template>
  <div class="ylt gap-10px w-50%">
    <div v-for="item in 100" :key="item"> {{ item }}</div>
    <!-- <span>{{ clock.format('YYYY年') }}</span>
    <span>{{ clock.format('YYYY年MM月') }}</span>
    <span>{{ clock.format('YYYY年MM月DD日') }}</span>
    <span>{{ clock.format('YYYY年MM月DD日 hh时') }}</span>
    <span>{{ clock.format('YYYY年MM月DD日 hh时mm分') }}</span>
    <span>{{ clock.format('YYYY年MM月DD日 hh时mm分ss秒') }}</span> -->
    <input type="date">
    <input type="time">
    <input type="datetime-local">
    <!-- <button @click="dialogShow()">打开弹窗</button> -->
    <el-button @click="dialogShowL()">打开L弹窗</el-button>
  </div>
  <dialog id="dialog">
    <form method="dialog">
      <p>Hi, I am dialog</p>
      <button>OK</button>
    </form>
  </dialog>
  <LDialog draggable append-to-body v-model:set="LDSet">
    <vue-resizable class="w-full bg-dark-100" :active="['t', 'r', 'b', 'l']" :w="300" :minWidth="300">
      123123
    </vue-resizable>
  </LDialog>
</template>

<script setup lang="ts">
import axios from 'axios'
const LDSet = ref()
const clock = ref()
const timestamps = useTimestamp()
// watch(() => timestamps, (newValue, oldValue) => {
//   clock.value = dayjs(newValue.value)
// }, { deep: true })
onMounted(() => {
})
const getJSON = async () => {
  const res = await axios.get('http://localhost:8080/scoreList')
}
// const dialogShow = () => {
//   dialog.show()
// }
const dialogShowL = () => {
  LDSet.value.open({ title: '1111', data: {} })
}


</script>

<style scoped></style>
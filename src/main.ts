import 'uno.css';
import '@/style/index.scss'
import '@unocss/reset/normalize.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useDragResize } from './utils/tool'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
import VueECharts from 'vue-echarts'
const app = createApp(App)
app.component('v-chart', VueECharts)
app.component('echarts', echarts)
app.use(createPinia())
app.use(ElementPlus, {
  locale: zhCn,
})
// 创建拖拽改变大小的指令
// el:绑定的节点，binding：绑定命令的值
app.directive('dragResize', (el: HTMLElement, binding: any, vNode: any, prevNode: any) => {
  useDragResize(el, binding, vNode, prevNode)
})
app.use(router)

app.mount('#app')

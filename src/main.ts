import 'uno.css';
import '@/style/index.scss'
import '@unocss/reset/normalize.css';
import './utils/mouseActive'
import './utils/driver.ts'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
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
import VueResizable from 'vue-resizable'
const app = createApp(App)
app.component('v-chart', VueECharts)
app.component('echarts', echarts)
app.component('VueResizable', VueResizable)
app.use(createPinia())
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
app.mount('#app')

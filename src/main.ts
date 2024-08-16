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
import "cesium/Build/Cesium/Widgets/widgets.css";
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
import VueECharts from 'vue-echarts'
import VueResizable from 'vue-resizable'
import * as Cesium from 'cesium'
const app = createApp(App)
app.config.globalProperties.Cesium = Cesium
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDZiNWFhYS01Zjk5LTQ5ZjktYWY5OC0xYzY5ZTNmODRhZjUiLCJpZCI6MTg1MDE5LCJpYXQiOjE3MDI4NzI5OTN9.lCUQNRQxVIdftGR1USgw22HPpvflB_LC_6bylIuUMN8'
app.component('v-chart', VueECharts)
app.component('echarts', echarts)
app.component('VueResizable', VueResizable)
app.use(createPinia())
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
app.mount('#app')
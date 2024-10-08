import Layout from "../layout/index.vue";
import pages from "~pages";
export const router = ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: pages
    },
    {
      path: '/cesium',
      name: 'cesium',
      component: () => import('@/views/cesium/cesiumDemo/index.vue')
      // children: [
      //   {
      //     path: '/cesium/cesiumDemo',
      //     name: 'cesiumDemo',
      //   },
      // ]
    }
  ]
})
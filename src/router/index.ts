import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import { router as defaultRouter } from './default'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 设置随机进度条颜色
const styles = `
  #nprogress .bar {
    background: ${useRandomColor()};
    height: 4px
  }
  #nprogress .spinner-icon {
    border-top-color: ${useRandomColor()};
    border-left-color: ${useRandomColor()};
  }
`;
const nProgressStyle = document.createElement("style");
nProgressStyle.innerText = styles;
document.head.appendChild(nProgressStyle);
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载icon
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
})
const routes: Array<RouteRecordRaw> = [
  ...defaultRouter.routes,
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  // const loginInfo = loginInfoStore();
  NProgress.start()
  next()
  // if (whiteList.includes(to.path)) {
  //   next();
  // } else if (loginInfo.access_token) {
  //   next();
  // } else if (to.path === "/login") {
  //   console.log("/login");
  //   next();
  // } else {
  //   console.log("unauthed into login");
  //   next({
  //     path: "/login",
  //     query: { redirect: to.fullPath }
  //   });
  // }
});

// 向tagViews中添加打开的路由
router.afterEach((to, from, failure) => {
  // const navTab = navTabStore(); // nav_tabs使用
  NProgress.done()
  // navTab.add(to);
});
export default router

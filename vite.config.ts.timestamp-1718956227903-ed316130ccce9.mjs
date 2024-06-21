// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/CODE/MyCode/LWeb-system/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/CODE/MyCode/LWeb-system/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/CODE/MyCode/LWeb-system/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueDevTools from "file:///D:/CODE/MyCode/LWeb-system/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import AutoImport from "file:///D:/CODE/MyCode/LWeb-system/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/CODE/MyCode/LWeb-system/node_modules/unplugin-vue-components/dist/vite.js";
import Icons from "file:///D:/CODE/MyCode/LWeb-system/node_modules/unplugin-icons/dist/vite.js";
import viteCompression from "file:///D:/CODE/MyCode/LWeb-system/node_modules/vite-plugin-compression/dist/index.mjs";
import { ElementPlusResolver } from "file:///D:/CODE/MyCode/LWeb-system/node_modules/unplugin-vue-components/dist/resolvers.js";
import UnoCSS from "file:///D:/CODE/MyCode/LWeb-system/node_modules/unocss/dist/vite.mjs";
import presetIcons from "file:///D:/CODE/MyCode/LWeb-system/node_modules/@unocss/preset-icons/dist/index.mjs";
import cesium from "file:///D:/CODE/MyCode/LWeb-system/node_modules/vite-plugin-cesium/dist/index.mjs";
import { presetAttributify, presetUno, presetWebFonts } from "file:///D:/CODE/MyCode/LWeb-system/node_modules/unocss/dist/index.mjs";

// unocssCustom/flex.ts
var flex_default = {
  xlt: "flex items-start",
  xlc: "flex items-center",
  xlb: "flex items-end",
  xls: "flex items-stretch",
  xlBaseline: "flex items-baseline",
  xct: "flex justify-center ",
  xcc: "flex justify-center items-center",
  xcb: "flex justify-center items-end",
  xcs: "flex justify-center items-stretch",
  xcBaseline: "flex justify-center items-baseline",
  xrt: "flex justify-end ",
  xrc: "flex justify-end items-center",
  xrb: "flex justify-end items-end",
  xrs: "flex justify-end items-stretch",
  xrBaseline: "flex justify-end items-baseline",
  xbt: "flex justify-between ",
  xbc: "flex justify-between items-center",
  xbb: "flex justify-between items-end",
  xbs: "flex justify-between items-stretch",
  xbBaseline: "flex justify-between items-baseline",
  rxbc: "flex justify-between items-center flex-row-reverse",
  xat: "flex justify-around ",
  xac: "flex justify-around items-center",
  xab: "flex justify-around items-end",
  xas: "flex justify-around items-stretch",
  xaBaseline: "flex justify-around items-baseline",
  xet: "flex justify-evenly ",
  xec: "flex justify-evenly items-center",
  xeb: "flex justify-evenly items-end",
  xes: "flex justify-evenly items-stretch",
  xeBaseline: "flex justify-evenly items-baseline",
  ylt: "flex flex-col ",
  ylc: "flex flex-col justify-center",
  ylb: "flex flex-col justify-end",
  ylbe: "flex flex-col justify-between",
  ylar: "flex flex-col justify-around",
  yle: "flex flex-col justify-evenly",
  yct: "flex flex-col items-center",
  ycc: "flex flex-col items-center justify-center",
  ycb: "flex flex-col items-center justify-end",
  ycbe: "flex flex-col items-center justify-between",
  ycar: "flex flex-col items-center justify-around",
  yce: "flex flex-col items-center justify-evenly",
  yrt: "flex flex-col items-end",
  yrc: "flex flex-col items-end justify-center",
  yrb: "flex flex-col items-end justify-end",
  yrbe: "flex flex-col items-end justify-between",
  yrar: "flex flex-col items-end justify-around",
  yre: "flex flex-col items-end justify-evenly",
  yst: "flex flex-col items-stretch",
  ysc: "flex flex-col items-stretch justify-center",
  ysb: "flex flex-col items-stretch justify-end",
  ysbe: "flex flex-col items-stretch justify-between",
  ysar: "flex flex-col items-stretch justify-around",
  yse: "flex flex-col items-stretch justify-evenly",
  ybat: "flex flex-col items-baseline",
  ybac: "flex flex-col items-baseline justify-center",
  ybab: "flex flex-col items-baseline justify-end",
  ybabe: "flex flex-col items-baseline justify-between",
  ybaar: "flex flex-col items-baseline justify-around",
  ybae: "flex flex-col items-baseline justify-evenly"
};

// unocssCustom/position.ts
var position_default = {
  "wh-full": "w-full h-full",
  "wh-screen": "w-screen h-screen",
  absolute0000: "absolute inset-x-0 inset-y-0",
  fixed0000: "fixed inset-x-0 inset-y-0",
  sticky0000: "sticky inset-x-0 inset-y-0",
  ac: "absolute -translate-x-1/2 left-1/2",
  acc: "absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2",
  ac23: "absolute -translate-x-1/2 -translate-y-2/3 left-1/2 top-1/2"
};

// unocssCustom/index.ts
var roseCss = { ...flex_default, ...position_default };
var unocssCustom_default = roseCss;

// vite.config.ts
import removeConsole from "file:///D:/CODE/MyCode/LWeb-system/node_modules/vite-plugin-remove-console/dist/index.mjs";
import Pages from "file:///D:/CODE/MyCode/LWeb-system/node_modules/vite-plugin-pages/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/CODE/MyCode/LWeb-system/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    removeConsole(),
    cesium(),
    Icons({ compiler: "vue3" }),
    UnoCSS({
      presets: [
        presetAttributify({}),
        presetUno(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle"
          }
        }),
        presetWebFonts({
          provider: "google",
          // default provider
          fonts: {
            // these will extend the default theme
            // zcool: 'ZCOOL QingKe HuangYou',
            // mono: ['Fira Code', 'Fira Mono:400,700'],
          }
        })
        // presetScrollbar({
        //   // config
        // }),
      ],
      shortcuts: { ...unocssCustom_default }
    }),
    Pages({
      dirs: [
        { dir: "src/views", baseRoute: "/" }
      ],
      extensions: ["vue"],
      //文件后缀
      exclude: ["**/*components*/**", "**/*copy*", "**/*bak*", "**/_bak*", "**/\u526F\u672C*", "**/*\u5907\u4EFD*"]
      //排除包含components目录的文件
    }),
    viteCompression({
      verbose: true,
      // 是否在控制台中输出压缩结果
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
      // 对超过10k的数据压缩
      deleteOriginFile: false
      // 压缩后是否删除源文件
    }),
    AutoImport({
      dirs: ["./src/store", "./src/utils"],
      resolvers: [ElementPlusResolver()],
      imports: [
        "vue",
        "@vueuse/core",
        "pinia",
        "vue-router",
        {
          "@vueuse/motion": ["useMotion", "useMotions", "useMotionProperties", "useMotionTransitions", "useElementStyle", "useElementTransform"],
          dayjs: [
            ["default", "dayjs"]
            // import { default as dayjs } from 'axios',
          ],
          axios: [
            ["default", "axios"]
            // import { default as axios } from 'axios',
          ]
        },
        { "@/utils/request.ts": ["http", "isLoading"] }
      ],
      dts: "src/auto-import.d.ts"
      // 生成在src路径下名为auto-import.d.ts的声明文件
    }),
    Components({
      dirs: ["src/components"],
      deep: true,
      dts: "src/components.d.ts",
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    },
    open: true,
    host: "0.0.0.0",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidW5vY3NzQ3VzdG9tL2ZsZXgudHMiLCAidW5vY3NzQ3VzdG9tL3Bvc2l0aW9uLnRzIiwgInVub2Nzc0N1c3RvbS9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXENPREVcXFxcTXlDb2RlXFxcXExXZWItc3lzdGVtXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDT0RFXFxcXE15Q29kZVxcXFxMV2ViLXN5c3RlbVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ09ERS9NeUNvZGUvTFdlYi1zeXN0ZW0vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBwcmVzZXRJY29ucyBmcm9tICdAdW5vY3NzL3ByZXNldC1pY29ucyc7XG5pbXBvcnQgY2VzaXVtIGZyb20gJ3ZpdGUtcGx1Z2luLWNlc2l1bSc7XG5pbXBvcnQgeyBwcmVzZXRBdHRyaWJ1dGlmeSwgcHJlc2V0VW5vLCBwcmVzZXRXZWJGb250cyB9IGZyb20gJ3Vub2Nzcyc7XG5pbXBvcnQgY3VzdG9tQ3NzIGZyb20gJy4vdW5vY3NzQ3VzdG9tL2luZGV4JztcbmltcG9ydCByZW1vdmVDb25zb2xlIGZyb20gXCJ2aXRlLXBsdWdpbi1yZW1vdmUtY29uc29sZVwiO1xuaW1wb3J0IFBhZ2VzIGZyb20gXCJ2aXRlLXBsdWdpbi1wYWdlc1wiOyAgLy8gXHU1MkE4XHU2MDAxXHU4REVGXHU4ODY4XHU4M0I3XHU1M0Q2XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIFZ1ZURldlRvb2xzKCksXG4gICAgcmVtb3ZlQ29uc29sZSgpLFxuICAgIGNlc2l1bSgpLFxuICAgIEljb25zKHsgY29tcGlsZXI6ICd2dWUzJyB9KSxcbiAgICBVbm9DU1Moe1xuICAgICAgcHJlc2V0czogW1xuICAgICAgICBwcmVzZXRBdHRyaWJ1dGlmeSh7fSksXG4gICAgICAgIHByZXNldFVubygpLFxuICAgICAgICBwcmVzZXRJY29ucyh7XG4gICAgICAgICAgZXh0cmFQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnXG4gICAgICAgICAgfVxuICAgICAgICB9KSBhcyBhbnksXG4gICAgICAgIHByZXNldFdlYkZvbnRzKHtcbiAgICAgICAgICBwcm92aWRlcjogJ2dvb2dsZScsIC8vIGRlZmF1bHQgcHJvdmlkZXJcbiAgICAgICAgICBmb250czoge1xuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBleHRlbmQgdGhlIGRlZmF1bHQgdGhlbWVcbiAgICAgICAgICAgIC8vIHpjb29sOiAnWkNPT0wgUWluZ0tlIEh1YW5nWW91JyxcbiAgICAgICAgICAgIC8vIG1vbm86IFsnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubzo0MDAsNzAwJ10sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIC8vIHByZXNldFNjcm9sbGJhcih7XG4gICAgICAgIC8vICAgLy8gY29uZmlnXG4gICAgICAgIC8vIH0pLFxuICAgICAgXSxcbiAgICAgIHNob3J0Y3V0czogeyAuLi5jdXN0b21Dc3MgfVxuICAgIH0pLFxuICAgIFBhZ2VzKHtcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgeyBkaXI6ICdzcmMvdmlld3MnLCBiYXNlUm91dGU6ICcvJyB9LFxuICAgICAgXSxcbiAgICAgIGV4dGVuc2lvbnM6IFtcInZ1ZVwiXSwvL1x1NjU4N1x1NEVGNlx1NTQwRVx1N0YwMFxuICAgICAgZXhjbHVkZTogW1wiKiovKmNvbXBvbmVudHMqLyoqXCIsIFwiKiovKmNvcHkqXCIsIFwiKiovKmJhaypcIiwgXCIqKi9fYmFrKlwiLCBcIioqL1x1NTI2Rlx1NjcyQypcIiwgXCIqKi8qXHU1OTA3XHU0RUZEKlwiXSAvL1x1NjM5Mlx1OTY2NFx1NTMwNVx1NTQyQmNvbXBvbmVudHNcdTc2RUVcdTVGNTVcdTc2ODRcdTY1ODdcdTRFRjZcbiAgICB9KSxcbiAgICB2aXRlQ29tcHJlc3Npb24oe1xuICAgICAgdmVyYm9zZTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NzI4XHU2M0E3XHU1MjM2XHU1M0YwXHU0RTJEXHU4RjkzXHU1MUZBXHU1MzhCXHU3RjI5XHU3RUQzXHU2NzlDXG4gICAgICBhbGdvcml0aG06ICdnemlwJyxcbiAgICAgIGV4dDogJy5neicsXG4gICAgICB0aHJlc2hvbGQ6IDEwMjQwLCAvLyBcdTVCRjlcdThEODVcdThGQzcxMGtcdTc2ODRcdTY1NzBcdTYzNkVcdTUzOEJcdTdGMjlcbiAgICAgIGRlbGV0ZU9yaWdpbkZpbGU6IGZhbHNlICAvLyBcdTUzOEJcdTdGMjlcdTU0MEVcdTY2MkZcdTU0MjZcdTUyMjBcdTk2NjRcdTZFOTBcdTY1ODdcdTRFRjZcbiAgICB9KSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGRpcnM6IFsnLi9zcmMvc3RvcmUnLCAnLi9zcmMvdXRpbHMnXSxcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFwidnVlXCIsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICAncGluaWEnLFxuICAgICAgICBcInZ1ZS1yb3V0ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgICdAdnVldXNlL21vdGlvbic6IFsndXNlTW90aW9uJywgJ3VzZU1vdGlvbnMnLCAndXNlTW90aW9uUHJvcGVydGllcycsICd1c2VNb3Rpb25UcmFuc2l0aW9ucycsICd1c2VFbGVtZW50U3R5bGUnLCAndXNlRWxlbWVudFRyYW5zZm9ybSddLFxuICAgICAgICAgIGRheWpzOiBbXG4gICAgICAgICAgICBbJ2RlZmF1bHQnLCAnZGF5anMnXSAvLyBpbXBvcnQgeyBkZWZhdWx0IGFzIGRheWpzIH0gZnJvbSAnYXhpb3MnLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXhpb3M6IFtcbiAgICAgICAgICAgIFsnZGVmYXVsdCcsICdheGlvcyddLCAvLyBpbXBvcnQgeyBkZWZhdWx0IGFzIGF4aW9zIH0gZnJvbSAnYXhpb3MnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHsgJ0AvdXRpbHMvcmVxdWVzdC50cyc6IFsnaHR0cCcsICdpc0xvYWRpbmcnXSB9XG4gICAgICBdLFxuICAgICAgZHRzOiBcInNyYy9hdXRvLWltcG9ydC5kLnRzXCIsIC8vIFx1NzUxRlx1NjIxMFx1NTcyOHNyY1x1OERFRlx1NUY4NFx1NEUwQlx1NTQwRFx1NEUzQWF1dG8taW1wb3J0LmQudHNcdTc2ODRcdTU4RjBcdTY2MEVcdTY1ODdcdTRFRjZcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnXSxcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgICBkdHM6IFwic3JjL2NvbXBvbmVudHMuZC50c1wiLFxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJylcbiAgICAgIH1cbiAgICB9LFxuICAgIG9wZW46IHRydWUsXG4gICAgaG9zdDogJzAuMC4wLjAnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgfVxuICB9LFxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcQ09ERVxcXFxNeUNvZGVcXFxcTFdlYi1zeXN0ZW1cXFxcdW5vY3NzQ3VzdG9tXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDT0RFXFxcXE15Q29kZVxcXFxMV2ViLXN5c3RlbVxcXFx1bm9jc3NDdXN0b21cXFxcZmxleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ09ERS9NeUNvZGUvTFdlYi1zeXN0ZW0vdW5vY3NzQ3VzdG9tL2ZsZXgudHNcIjtleHBvcnQgZGVmYXVsdCB7XHJcbiAgeGx0OiAnZmxleCBpdGVtcy1zdGFydCcsXHJcbiAgeGxjOiAnZmxleCBpdGVtcy1jZW50ZXInLFxyXG4gIHhsYjogJ2ZsZXggaXRlbXMtZW5kJyxcclxuICB4bHM6ICdmbGV4IGl0ZW1zLXN0cmV0Y2gnLFxyXG4gIHhsQmFzZWxpbmU6ICdmbGV4IGl0ZW1zLWJhc2VsaW5lJyxcclxuXHJcbiAgeGN0OiAnZmxleCBqdXN0aWZ5LWNlbnRlciAnLFxyXG4gIHhjYzogJ2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJyxcclxuICB4Y2I6ICdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWVuZCcsXHJcbiAgeGNzOiAnZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdHJldGNoJyxcclxuICB4Y0Jhc2VsaW5lOiAnZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1iYXNlbGluZScsXHJcblxyXG4gIHhydDogJ2ZsZXgganVzdGlmeS1lbmQgJyxcclxuICB4cmM6ICdmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcicsXHJcbiAgeHJiOiAnZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1lbmQnLFxyXG4gIHhyczogJ2ZsZXgganVzdGlmeS1lbmQgaXRlbXMtc3RyZXRjaCcsXHJcbiAgeHJCYXNlbGluZTogJ2ZsZXgganVzdGlmeS1lbmQgaXRlbXMtYmFzZWxpbmUnLFxyXG5cclxuICB4YnQ6ICdmbGV4IGp1c3RpZnktYmV0d2VlbiAnLFxyXG4gIHhiYzogJ2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcicsXHJcbiAgeGJiOiAnZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kJyxcclxuICB4YnM6ICdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdHJldGNoJyxcclxuICB4YkJhc2VsaW5lOiAnZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtYmFzZWxpbmUnLFxyXG4gIHJ4YmM6ICdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZmxleC1yb3ctcmV2ZXJzZScsXHJcblxyXG4gIHhhdDogJ2ZsZXgganVzdGlmeS1hcm91bmQgJyxcclxuICB4YWM6ICdmbGV4IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlcicsXHJcbiAgeGFiOiAnZmxleCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1lbmQnLFxyXG4gIHhhczogJ2ZsZXgganVzdGlmeS1hcm91bmQgaXRlbXMtc3RyZXRjaCcsXHJcbiAgeGFCYXNlbGluZTogJ2ZsZXgganVzdGlmeS1hcm91bmQgaXRlbXMtYmFzZWxpbmUnLFxyXG5cclxuICB4ZXQ6ICdmbGV4IGp1c3RpZnktZXZlbmx5ICcsXHJcbiAgeGVjOiAnZmxleCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXInLFxyXG4gIHhlYjogJ2ZsZXgganVzdGlmeS1ldmVubHkgaXRlbXMtZW5kJyxcclxuICB4ZXM6ICdmbGV4IGp1c3RpZnktZXZlbmx5IGl0ZW1zLXN0cmV0Y2gnLFxyXG4gIHhlQmFzZWxpbmU6ICdmbGV4IGp1c3RpZnktZXZlbmx5IGl0ZW1zLWJhc2VsaW5lJyxcclxuXHJcbiAgeWx0OiAnZmxleCBmbGV4LWNvbCAnLFxyXG4gIHlsYzogJ2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXInLFxyXG4gIHlsYjogJ2ZsZXggZmxleC1jb2wganVzdGlmeS1lbmQnLFxyXG4gIHlsYmU6ICdmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbicsXHJcbiAgeWxhcjogJ2ZsZXggZmxleC1jb2wganVzdGlmeS1hcm91bmQnLFxyXG4gIHlsZTogJ2ZsZXggZmxleC1jb2wganVzdGlmeS1ldmVubHknLFxyXG5cclxuICB5Y3Q6ICdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcicsXHJcbiAgeWNjOiAnZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInLFxyXG4gIHljYjogJ2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kJyxcclxuICB5Y2JlOiAnZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJyxcclxuICB5Y2FyOiAnZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQnLFxyXG4gIHljZTogJ2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5JyxcclxuXHJcbiAgeXJ0OiAnZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQnLFxyXG4gIHlyYzogJ2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyJyxcclxuICB5cmI6ICdmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWVuZCcsXHJcbiAgeXJiZTogJ2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbicsXHJcbiAgeXJhcjogJ2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktYXJvdW5kJyxcclxuICB5cmU6ICdmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWV2ZW5seScsXHJcblxyXG4gIHlzdDogJ2ZsZXggZmxleC1jb2wgaXRlbXMtc3RyZXRjaCcsXHJcbiAgeXNjOiAnZmxleCBmbGV4LWNvbCBpdGVtcy1zdHJldGNoIGp1c3RpZnktY2VudGVyJyxcclxuICB5c2I6ICdmbGV4IGZsZXgtY29sIGl0ZW1zLXN0cmV0Y2gganVzdGlmeS1lbmQnLFxyXG4gIHlzYmU6ICdmbGV4IGZsZXgtY29sIGl0ZW1zLXN0cmV0Y2gganVzdGlmeS1iZXR3ZWVuJyxcclxuICB5c2FyOiAnZmxleCBmbGV4LWNvbCBpdGVtcy1zdHJldGNoIGp1c3RpZnktYXJvdW5kJyxcclxuICB5c2U6ICdmbGV4IGZsZXgtY29sIGl0ZW1zLXN0cmV0Y2gganVzdGlmeS1ldmVubHknLFxyXG5cclxuICB5YmF0OiAnZmxleCBmbGV4LWNvbCBpdGVtcy1iYXNlbGluZScsXHJcbiAgeWJhYzogJ2ZsZXggZmxleC1jb2wgaXRlbXMtYmFzZWxpbmUganVzdGlmeS1jZW50ZXInLFxyXG4gIHliYWI6ICdmbGV4IGZsZXgtY29sIGl0ZW1zLWJhc2VsaW5lIGp1c3RpZnktZW5kJyxcclxuICB5YmFiZTogJ2ZsZXggZmxleC1jb2wgaXRlbXMtYmFzZWxpbmUganVzdGlmeS1iZXR3ZWVuJyxcclxuICB5YmFhcjogJ2ZsZXggZmxleC1jb2wgaXRlbXMtYmFzZWxpbmUganVzdGlmeS1hcm91bmQnLFxyXG4gIHliYWU6ICdmbGV4IGZsZXgtY29sIGl0ZW1zLWJhc2VsaW5lIGp1c3RpZnktZXZlbmx5J1xyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXENPREVcXFxcTXlDb2RlXFxcXExXZWItc3lzdGVtXFxcXHVub2Nzc0N1c3RvbVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ09ERVxcXFxNeUNvZGVcXFxcTFdlYi1zeXN0ZW1cXFxcdW5vY3NzQ3VzdG9tXFxcXHBvc2l0aW9uLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9DT0RFL015Q29kZS9MV2ViLXN5c3RlbS91bm9jc3NDdXN0b20vcG9zaXRpb24udHNcIjtleHBvcnQgZGVmYXVsdCB7XHJcbiAgJ3doLWZ1bGwnOiAndy1mdWxsIGgtZnVsbCcsXHJcbiAgJ3doLXNjcmVlbic6ICd3LXNjcmVlbiBoLXNjcmVlbicsXHJcbiAgYWJzb2x1dGUwMDAwOiAnYWJzb2x1dGUgaW5zZXQteC0wIGluc2V0LXktMCcsXHJcbiAgZml4ZWQwMDAwOiAnZml4ZWQgaW5zZXQteC0wIGluc2V0LXktMCcsXHJcbiAgc3RpY2t5MDAwMDogJ3N0aWNreSBpbnNldC14LTAgaW5zZXQteS0wJyxcclxuICBhYzogJ2Fic29sdXRlIC10cmFuc2xhdGUteC0xLzIgbGVmdC0xLzInLFxyXG4gIGFjYzogJ2Fic29sdXRlIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBsZWZ0LTEvMiB0b3AtMS8yJyxcclxuICBhYzIzOiAnYWJzb2x1dGUgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMi8zIGxlZnQtMS8yIHRvcC0xLzInXHJcbn07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcQ09ERVxcXFxNeUNvZGVcXFxcTFdlYi1zeXN0ZW1cXFxcdW5vY3NzQ3VzdG9tXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDT0RFXFxcXE15Q29kZVxcXFxMV2ViLXN5c3RlbVxcXFx1bm9jc3NDdXN0b21cXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NPREUvTXlDb2RlL0xXZWItc3lzdGVtL3Vub2Nzc0N1c3RvbS9pbmRleC50c1wiO2ltcG9ydCBmbGV4IGZyb20gJy4vZmxleCdcclxuaW1wb3J0IHBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24nXHJcblxyXG5jb25zdCByb3NlQ3NzID0geyAuLi5mbGV4LCAuLi5wb3NpdGlvbiB9XHJcbmV4cG9ydCBkZWZhdWx0IHJvc2VDc3NcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3USxTQUFTLGVBQWUsV0FBVztBQUMzUyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUNsQixPQUFPLHFCQUFxQjtBQUM1QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLFlBQVk7QUFDbkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsbUJBQW1CLFdBQVcsc0JBQXNCOzs7QUNic08sSUFBTyxlQUFRO0FBQUEsRUFDaFQsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsWUFBWTtBQUFBLEVBRVosS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsWUFBWTtBQUFBLEVBRVosS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsWUFBWTtBQUFBLEVBRVosS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUFBLEVBRU4sS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsWUFBWTtBQUFBLEVBRVosS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsWUFBWTtBQUFBLEVBRVosS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sS0FBSztBQUFBLEVBRUwsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sS0FBSztBQUFBLEVBRUwsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sS0FBSztBQUFBLEVBRUwsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sS0FBSztBQUFBLEVBRUwsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSOzs7QUN4RTJTLElBQU8sbUJBQVE7QUFBQSxFQUN4VCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixJQUFJO0FBQUEsRUFDSixLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQ1I7OztBQ05BLElBQU0sVUFBVSxFQUFFLEdBQUcsY0FBTSxHQUFHLGlCQUFTO0FBQ3ZDLElBQU8sdUJBQVE7OztBSFdmLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sV0FBVztBQWhCaUosSUFBTSwyQ0FBMkM7QUFrQnBOLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLGNBQWM7QUFBQSxJQUNkLE9BQU87QUFBQSxJQUNQLE1BQU0sRUFBRSxVQUFVLE9BQU8sQ0FBQztBQUFBLElBQzFCLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLGtCQUFrQixDQUFDLENBQUM7QUFBQSxRQUNwQixVQUFVO0FBQUEsUUFDVixZQUFZO0FBQUEsVUFDVixpQkFBaUI7QUFBQSxZQUNmLFNBQVM7QUFBQSxZQUNULGtCQUFrQjtBQUFBLFVBQ3BCO0FBQUEsUUFDRixDQUFDO0FBQUEsUUFDRCxlQUFlO0FBQUEsVUFDYixVQUFVO0FBQUE7QUFBQSxVQUNWLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlQO0FBQUEsUUFDRixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJSDtBQUFBLE1BQ0EsV0FBVyxFQUFFLEdBQUcscUJBQVU7QUFBQSxJQUM1QixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsUUFDSixFQUFFLEtBQUssYUFBYSxXQUFXLElBQUk7QUFBQSxNQUNyQztBQUFBLE1BQ0EsWUFBWSxDQUFDLEtBQUs7QUFBQTtBQUFBLE1BQ2xCLFNBQVMsQ0FBQyxzQkFBc0IsYUFBYSxZQUFZLFlBQVksb0JBQVUsbUJBQVM7QUFBQTtBQUFBLElBQzFGLENBQUM7QUFBQSxJQUNELGdCQUFnQjtBQUFBLE1BQ2QsU0FBUztBQUFBO0FBQUEsTUFDVCxXQUFXO0FBQUEsTUFDWCxLQUFLO0FBQUEsTUFDTCxXQUFXO0FBQUE7QUFBQSxNQUNYLGtCQUFrQjtBQUFBO0FBQUEsSUFDcEIsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsTUFBTSxDQUFDLGVBQWUsYUFBYTtBQUFBLE1BQ25DLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ2pDLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFVBQ0Usa0JBQWtCLENBQUMsYUFBYSxjQUFjLHVCQUF1Qix3QkFBd0IsbUJBQW1CLHFCQUFxQjtBQUFBLFVBQ3JJLE9BQU87QUFBQSxZQUNMLENBQUMsV0FBVyxPQUFPO0FBQUE7QUFBQSxVQUNyQjtBQUFBLFVBQ0EsT0FBTztBQUFBLFlBQ0wsQ0FBQyxXQUFXLE9BQU87QUFBQTtBQUFBLFVBQ3JCO0FBQUEsUUFDRjtBQUFBLFFBQ0EsRUFBRSxzQkFBc0IsQ0FBQyxRQUFRLFdBQVcsRUFBRTtBQUFBLE1BQ2hEO0FBQUEsTUFDQSxLQUFLO0FBQUE7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULE1BQU0sQ0FBQyxnQkFBZ0I7QUFBQSxNQUN2QixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLCtCQUErQjtBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

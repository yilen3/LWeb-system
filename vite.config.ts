import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import viteCompression from 'vite-plugin-compression';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons';
import cesium from 'vite-plugin-cesium';
import { presetAttributify, presetUno, presetWebFonts } from 'unocss';
import customCss from './unocssCustom/index';
import removeConsole from "vite-plugin-remove-console";
import Pages from "vite-plugin-pages";  // 动态路表获取
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    removeConsole(),
    cesium(),
    Icons({ compiler: 'vue3' }),
    UnoCSS({
      presets: [
        presetAttributify({}),
        presetUno(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle'
          }
        }) as any,
        presetWebFonts({
          provider: 'google', // default provider
          fonts: {
            // these will extend the default theme
            // zcool: 'ZCOOL QingKe HuangYou',
            // mono: ['Fira Code', 'Fira Mono:400,700'],
          },
        }),
        // presetScrollbar({
        //   // config
        // }),
      ],
      shortcuts: { ...customCss }
    }),
    Pages({
      dirs: [
        { dir: 'src/views', baseRoute: '/' },
      ],
      extensions: ["vue"],//文件后缀
      exclude: ["**/*components*/**", "**/*copy*", "**/*bak*", "**/_bak*", "**/副本*", "**/*备份*"] //排除包含components目录的文件
    }),
    viteCompression({
      verbose: true, // 是否在控制台中输出压缩结果
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // 对超过10k的数据压缩
      deleteOriginFile: false  // 压缩后是否删除源文件
    }),
    AutoImport({
      dirs: ['./src/store', './src/utils'],
      resolvers: [ElementPlusResolver()],
      imports: [
        "vue",
        '@vueuse/core',
        'pinia',
        "vue-router",
        {
          '@vueuse/motion': ['useMotion', 'useMotions', 'useMotionProperties', 'useMotionTransitions', 'useElementStyle', 'useElementTransform'],
          dayjs: [
            ['default', 'dayjs'] // import { default as dayjs } from 'axios',
          ],
          axios: [
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
        },
        { '@/utils/request.ts': ['http', 'isLoading'] }
      ],
      dts: "src/auto-import.d.ts", // 生成在src路径下名为auto-import.d.ts的声明文件
    }),
    Components({
      dirs: ['src/components'],
      deep: true,
      dts: "src/components.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

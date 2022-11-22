import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
  plugins: [vue(), Unocss(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    },
    ),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
      dirs: ['src/components'],
      importPathTransform: v => v,
      extensions: ['vue'],
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
})

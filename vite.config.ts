import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: `${__dirname}/src` }],
  },
  // SCSS 전역 사용
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./src/scss/main.scss";',
  //     },
  //   },
  // },
})

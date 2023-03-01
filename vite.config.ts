import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  // 添加库模式配置
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: resolve(__dirname, './src/entry.ts'),
      name: "ZombieUI",
      fileName: "zombie-ui",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
  },
  plugins: [vue(),vueJsx()],
})

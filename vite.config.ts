import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
    exports: "named",
  },
};

export default defineConfig({
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: "esbuild",
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "./src/entry.ts"),
      name: "ZombieUI",
      fileName: "zombie-ui",
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons({
      autoInstall: true,
      compiler: "vue3",
    }),
  ],
});

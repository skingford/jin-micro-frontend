/*
 * @Author: kingford
 * @Date: 2021-12-06 19:22:55
 * @LastEditTime: 2021-12-06 19:53:56
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ViteVueMicroApp子应用名，主应用注册时AppName需保持一致
    qiankun("ViteVueMicroApp", { useDevMode: true }),
  ],
  // 生产环境需要指定运行域名作为base
  //base: 'http://xxx.com/',
  server: {
    port: 10400,
    open: false,
  },
});

/*
 * @Author: kingford
 * @Date: 2021-11-23 14:34:34
 * @LastEditTime: 2021-12-08 14:31:16
 */
import "./styles/index.scss";

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { setupRouter, router } from "./router";

import startQiankun from "./micro";
import { useNaive } from "@/hooks";

async function bootstrap() {
  const app = createApp(App);

  // 注册乾坤微服务
  startQiankun();

  // 注册naive ui
  useNaive(app);

  setupRouter(app);

  await router.isReady();

  app.mount("#main-app");
}

bootstrap();

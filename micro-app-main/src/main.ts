/*
 * @Author: kingford
 * @Date: 2021-11-23 14:34:34
 * @LastEditTime: 2021-12-07 16:48:49
 */
import "./styles/index.scss";

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import startQiankun from "./micro";
import { useNaive } from "@/hooks";

function bootstrap(): void {
  const app = createApp(App);

  // 注册乾坤微服务
  startQiankun();

  // 注册naive ui
  useNaive(app);

  app.use(store).use(router).mount("#main-app");
}

bootstrap();

/*
 * @Author: kingford
 * @Date: 2021-11-23 14:34:34
 * @LastEditTime: 2021-11-23 15:47:39
 */
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import startQiankun from "./micro";

function bootstrap(): void {
  startQiankun();

  createApp(App).use(store).use(router).mount("#main-app");
}

bootstrap();

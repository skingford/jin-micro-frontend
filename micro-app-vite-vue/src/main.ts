/*
 * @Author: kingford
 * @Date: 2021-12-06 19:22:55
 * @LastEditTime: 2021-12-06 19:51:08
 */
import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app: any;

function render(props: any = {}) {
  const { container, routerBase = "/vite-vue" } = props;

  console.log("routerBase:", routerBase);

  const router = createRouter({
    routes,
    history: createWebHistory(
      (window as any).__POWERED_BY_QIANKUN__ ? "/vite-vue" : "/"
    ),
  });

  app = createApp(App);
  app.use(router).mount(container || "#app");
}

console.log("vite micro qiankunWindow:", qiankunWindow);

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderWithQiankun({
    bootstrap() {
      console.log("vite micro start");
    },
    mount(props) {
      console.log("vite micro mount props", props);
      props.onGlobalStateChange = (state: any, prev: any) => {
        console.log(state, prev);
      };

      render(props);
    },
    unmount() {
      console.log("vite micro unmount");
      app.unmount();
      app = null;
    },
  });
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log("独立运行");
  render();
}

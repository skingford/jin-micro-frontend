/*
 * @Author: kingford
 * @Date: 2021-12-06 19:22:55
 * @LastEditTime: 2021-12-07 09:13:52
 */
import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app: any = null;
let router = null;

function render(props: any = {}) {
  const { container, routerBase = "/vite-vue" } = props;

  app = createApp(App);
  console.log("routerBase:", routerBase);

  router = createRouter({
    routes,
    history: createWebHistory(
      (window as any).__POWERED_BY_QIANKUN__ ? "/vite-vue" : "/"
    ),
  });

  app.use(router).mount(container ? container.querySelector("#app") : "#app");
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
      router = null;
      app = null;
    },
  });
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log("独立运行");
  render();
}

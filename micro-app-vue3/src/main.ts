/*
 * @Author: kingford
 * @Date: 2021-12-06 16:47:05
 * @LastEditTime: 2021-12-07 09:10:34
 */
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import { routes } from "./router";
import { createRouter, createWebHistory } from "vue-router";

import store from "./store";
import "./public-path";

// 应用挂载,注意卸载时要清空应用否则会出现多次挂载，导致$router出错
let app: any = null;
let router: any = null;

function render(props: any) {
  const { container } = props;

  app = createApp(App);

  router = createRouter({
    history: createWebHistory(
      (window as any).__POWERED_BY_QIANKUN__ ? "/vue3" : "/"
    ),
    routes,
  });

  app
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log("vue3 bootstrap");
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props: any) {
  console.log("vue3 mount", props);
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  console.log("vue3 unmount");
  app.unmount();
  app = null;
  router = null;
}

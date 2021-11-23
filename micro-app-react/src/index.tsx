/*
 * @Author: kingford
 * @Date: 2021-11-23 14:38:23
 * @LastEditTime: 2021-11-23 20:44:16
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "./public-path";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function render(props: any = {}) {
  const { container } = props;
  console.log("render.container:", container);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("ReactMicroApp bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  console.log("ReactMicroApp mount", props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: any) {
  console.log("ReactMicroApp unmount");
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

// if (process.env.NODE_ENV === "development") {
//   window["ReactMicroApp"] = {};
//   window["ReactMicroApp"].bootstrap = bootstrap;
//   window["ReactMicroApp"].mount = mount;
//   window["ReactMicroApp"].unmount = unmount;
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
 * @Author: kingford
 * @Date: 2021-11-23 15:17:27
 * @LastEditTime: 2021-12-06 18:00:32
 */
if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

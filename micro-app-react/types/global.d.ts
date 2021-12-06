/*
 * @Author: kingford
 * @Date: 2021-11-23 17:25:20
 * @LastEditTime: 2021-12-06 19:04:21
 */
// declare global {
//   interface Window {
//     __POWERED_BY_QIANKUN__: boolean;
//   }
// }

let __webpack_public_path__: any;

interface IReactMicroApp {
  bootstrap?: () => void;
  mount?: (props: any) => void;
  unmount?: (props: any) => void;
}

interface Window {
  __POWERED_BY_QIANKUN__: boolean;
  ReactMicroApp: IReactMicroApp;
}

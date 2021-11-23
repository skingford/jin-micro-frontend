/*
 * @Author: kingford
 * @Date: 2021-11-23 17:25:20
 * @LastEditTime: 2021-11-23 17:51:20
 */
// declare global {
//   interface Window {
//     __POWERED_BY_QIANKUN__: boolean;
//   }
// }

declare global {}

interface IReactMicroApp {
  bootstrap?: () => void;
  mount?: (props: any) => void;
  unmount?: (props: any) => void;
}

interface Window {
  __POWERED_BY_QIANKUN__: boolean;
  ReactMicroApp: IReactMicroApp;
}

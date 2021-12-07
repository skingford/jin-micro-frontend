/*
 * @Author: kingford
 * @Date: 2021-12-07 11:46:33
 * @LastEditTime: 2021-12-07 11:50:11
 */
type Config = {
  REACT_MICRO_APP: string;
  VUE_MICRO_APP: string;
  VUE3_MICRO_APP: string;
  VITE_VUE_MICRO_APP: string;
};

const config: Config = {
  REACT_MICRO_APP: process.env.VUE_APP_REACT_MICRO_APP,
  VUE_MICRO_APP: process.env.VUE_APP_VUE_MICRO_APP,
  VUE3_MICRO_APP: process.env.VUE_APP_VUE3_MICRO_APP,
  VITE_VUE_MICRO_APP: process.env.VUE_APP_VITE_VUE_MICRO_APP,
};

// 导出当前环境的配置，默认为 dev 环境
export { config };

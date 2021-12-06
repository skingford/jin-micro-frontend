/*
 * @Author: kingford
 * @Date: 2021-11-23 14:50:34
 * @LastEditTime: 2021-12-06 19:26:08
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
export default config;

/*
 * @Author: kingford
 * @Date: 2021-11-23 14:50:34
 * @LastEditTime: 2021-11-23 14:50:35
 */
type Config = {
  REACT_MICRO_APP: string;
  VUE_MICRO_APP: string;
};

const config: Config = {
  REACT_MICRO_APP: process.env.VUE_APP_REACT_MICRO_APP,
  VUE_MICRO_APP: process.env.VUE_APP_VUE_MICRO_APP,
};

// 导出当前环境的配置，默认为 dev 环境
export default config;

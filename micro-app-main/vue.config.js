/*
 * @Author: kingford
 * @Date: 2021-12-07 20:32:08
 * @LastEditTime: 2021-12-07 20:41:20
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  devServer: {
    host: "192.168.10.209",
    port: 9999,
    open: true,
    //clientLogLevel: "info",
    // disableHostCheck: true,
  },
});

/*
 * @Author: kingford
 * @Date: 2021-12-07 20:32:08
 * @LastEditTime: 2021-12-07 20:49:52
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
  // https://webpack.docschina.org/configuration/dev-server/
  devServer: {
    host: "0.0.0.0",
    port: 9999,
    open: false,
    client: {
      logging: "info",
    },
    //clientLogLevel: "info",
    // disableHostCheck: true,
  },
});

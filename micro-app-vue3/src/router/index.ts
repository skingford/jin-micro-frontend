/*
 * @Author: kingford
 * @Date: 2021-12-06 16:47:05
 * @LastEditTime: 2021-12-06 19:36:16
 */
import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

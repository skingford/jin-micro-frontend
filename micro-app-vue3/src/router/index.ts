/*
 * @Author: kingford
 * @Date: 2021-12-06 16:47:05
 * @LastEditTime: 2021-12-06 16:54:34
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

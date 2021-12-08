/*
 * @Author: kingford
 * @Date: 2021-11-23 14:34:34
 * @LastEditTime: 2021-12-08 15:37:21
 */

import { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { REDIRECT_NAME } from "./constant";
import { basicRoutes } from "./routes";

const WHITE_NAME_LIST = [REDIRECT_NAME];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: basicRoutes as Array<RouteRecordRaw>,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export function setupRouter(app: App<Element>) {
  app.use(router);
}

// import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "Layout",
//     component: () => import("@/layout/index.vue"),
//     redirect: "/home",
//     children: [
//       {
//         path: "home",
//         name: "LayoutHome",
//         component: () => import("@/views/Home.vue"),
//       },
//     ],
//   },
//   {
//     path: "/login",
//     name: "Login",
//     component: () => import("../views/Login.vue"),
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;

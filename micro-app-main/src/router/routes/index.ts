/*
 * @Author: kingford
 * @Date: 2021-12-08 11:52:05
 * @LastEditTime: 2021-12-08 15:59:23
 */
import {
  RootRoute,
  LoginRoute,
  REDIRECT_ROUTE,
  ERROR_LOG_ROUTE,
  routeModuleList,
  // PAGE_NOT_FOUND_ROUTE, // 微前端主应用不需要404页面
} from "./base";

export const asyncRoutes = [...routeModuleList];

export const basicRoutes = [
  RootRoute,
  LoginRoute,
  ERROR_LOG_ROUTE,
  ...asyncRoutes,
  // PAGE_NOT_FOUND_ROUTE,
  REDIRECT_ROUTE,
];

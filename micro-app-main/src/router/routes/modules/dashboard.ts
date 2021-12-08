/*
 * @Author: kingford
 * @Date: 2021-07-16 00:36:38
 * @LastEditTime: 2021-12-08 16:55:53
 */
import type { AppRouteModule } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const dashboard: AppRouteModule = {
  path: "/dashboard",
  name: "Dashboard",
  component: LAYOUT,
  redirect: "/dashboard/analysis",
  meta: {
    orderNo: 1,
    title: "数据面板",
    icon: "el-icon-copy-document",
    roles: [],
  },
  children: [
    {
      path: "analysis",
      name: "DashboardAnalysis",
      component: () => import("@/views/Home.vue"),
      meta: {
        title: "数据看板",
        roles: [],
      },
    },
  ],
};

export default dashboard;

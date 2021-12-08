/*
 * @Author: kingford
 * @Date: 2021-12-07 11:42:24
 * @LastEditTime: 2021-12-08 16:34:40
 */
import "vfonts/FiraCode.css";
import type { App } from "vue";
import {
  // create naive ui
  create,
  // component
  NButton,
  NLayout,
  NLayoutSider,
} from "naive-ui";

const components: any[] = [NButton, NLayout, NLayoutSider];

export function useNaive(app: App<Element>): void {
  const naive = create({
    components,
  });
  app.use(naive);
}

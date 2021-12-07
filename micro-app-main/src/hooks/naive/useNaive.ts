/*
 * @Author: kingford
 * @Date: 2021-12-07 11:42:24
 * @LastEditTime: 2021-12-07 16:44:19
 */
import "vfonts/FiraCode.css";
import type { App } from "vue";
import {
  // create naive ui
  create,
  // component
  NButton,
} from "naive-ui";

const components: any[] = [NButton];

export function useNaive(app: App<Element>): void {
  const naive = create({
    components,
  });
  app.use(naive);
}

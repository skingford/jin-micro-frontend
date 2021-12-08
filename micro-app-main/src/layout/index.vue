<!--
 * @Author: kingford
 * @Date: 2021-12-08 11:26:06
 * @LastEditTime: 2021-12-08 16:55:28
-->
<template>
  <n-layout class="layout" :position="fixedMenu" has-sider>
    <n-layout-sider
      show-trigger="bar"
      collapse-mode="width"
      :collapsed-width="64"
      :native-scrollbar="false"
      :inverted="true"
      class="layout-sider"
    >
      <div>
        <router-link to="/vue">vue</router-link> <br />
        <router-link to="/vue3">vue3</router-link> <br />
        <router-link to="/vite-vue">vite-vue</router-link>
      </div>
      <div><router-link to="/react">react</router-link></div>
      <div><router-link to="/react/list">react list</router-link></div>
      <div><router-link to="/login">login</router-link></div>
      <n-button>naive-ui</n-button>
    </n-layout-sider>

    <n-layout :inverted="true">
      <n-layout-header :inverted="true" :position="true">
        header
      </n-layout-header>

      <n-layout-content class="layout-content">
        <div class="layout-content-main">
          <div class="main-view">
            <router-view />
          </div>
        </div>
      </n-layout-content>
      <n-back-top :right="100" />
    </n-layout>
  </n-layout>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { EmptyRouter, MicroBase } from "./components";

export default defineComponent({
  name: "Layout",
  comments: {
    EmptyRouter,
    MicroBase,
  },
  setup() {
    const fixedMenu = computed(() => {
      const fixed = true;
      return fixed ? "absolute" : "static";
    });

    return { fixedMenu };
  },
});
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
  flex: auto;

  &-default-background {
    background: #f5f7f9;
  }

  .layout-sider {
    min-height: 100vh;
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    position: relative;
    z-index: 13;
    transition: all 0.2s ease-in-out;
  }

  .layout-sider-fix {
    position: fixed;
    top: 0;
    left: 0;
  }

  .ant-layout {
    overflow: hidden;
  }

  .layout-right-fix {
    overflow-x: hidden;
    padding-left: 200px;
    min-height: 100vh;
    transition: all 0.2s ease-in-out;
  }

  .layout-content {
    flex: auto;
    min-height: 100vh;
  }

  .n-layout-header.n-layout-header--absolute-positioned {
    z-index: 11;
  }

  .n-layout-footer {
    background: none;
  }
}

.layout-content-main {
  margin: 0 10px 10px;
  position: relative;
  padding-top: 64px;
}

.layout-content-main-fix {
  padding-top: 64px;
}

.fluid-header {
  padding-top: 0px;
}

.main-view-fix {
  padding-top: 44px;
}

.noMultiTabs {
  padding-top: 0;
}
</style>

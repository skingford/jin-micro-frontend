<!--
 * @Author: kingford
 * @Date: 2021-12-08 11:26:06
 * @LastEditTime: 2021-12-08 11:46:31
-->
<template>
  <div>
    <div>
      <div>
        <router-link to="/vue">vue</router-link> <br />
        <router-link to="/vue3">vue3</router-link> <br />
        <router-link to="/vite-vue">vite-vue</router-link>
      </div>
      <div><router-link to="/react">react</router-link></div>
      <div><router-link to="/react/list">react list</router-link></div>
      <div><router-link to="/login">login</router-link></div>
      <n-button>naive-ui</n-button>
    </div>

    <router-view />
    <!-- <MicroMain></MicroMain> -->
    <div>footer</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { EmptyRouter, MicroBase } from "./components";

export default defineComponent({
  name: "Layout",
  comments: {
    EmptyRouter,
    MicroBase,
  },
  setup() {
    return {};
  },
});
</script>

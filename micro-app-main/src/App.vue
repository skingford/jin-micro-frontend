<!--
 * @Author: kingford
 * @Date: 2021-11-23 14:34:34
 * @LastEditTime: 2021-12-06 19:42:49
-->
<template>
  <div>
    <router-link to="/vue">vue</router-link> <br />
    <router-link to="/vue3">vue3</router-link> <br />
    <router-link to="/vite-vue">vite-vue</router-link>
  </div>
  <div><router-link to="/react">react</router-link></div>
  <div><router-link to="/react/list">react list</router-link></div>

  <p>name:{{ $route }}</p>
  <p>name:{{ $route.name }}</p>

  <router-view v-show="$route && $route.name" />
  <div v-show="!$route || !$route.name" id="frame"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

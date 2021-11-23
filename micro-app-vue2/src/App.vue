<!--
 * @Author: kingford
 * @Date: 2021-11-23 14:56:41
 * @LastEditTime: 2021-11-23 16:32:47
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Micro Vue2 Home</router-link> |
      <router-link to="/about">Micro Vue2 About</router-link>
    </div>
    <router-view />
  </div>
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

<template>
  <div id="app">
    <menu-bar></menu-bar>
      <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar";
export default {
  name: "App",
  components: {
    MenuBar,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>

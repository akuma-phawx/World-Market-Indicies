<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "Home",
  components: {
    Navigation,
  },
};
</script>

<style>
* {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}
</style>

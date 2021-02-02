<template>
  <div class="home">
    <h1>Welcome :)</h1>
    <h3>Select Market ID</h3>
    <Dropdown />
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  name: "Home",
  components: {
    Dropdown,
  },
};
</script>

<style>
.home {
  margin: 50px;
}
h1 {
  color: black;
  padding-top: 25px;
}
</style>

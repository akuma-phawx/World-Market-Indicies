<template>
  <div>
    <!-- <div id="nav"><router-link to="/">Home</router-link></div> -->
    <b-navbar toggleable="lg" type="dark" variant="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Login</b-button
          >
          <b-button size="sm" class="my-2 my-sm-0 ml-2" type="submit"
            >Sign Up</b-button
          >
          <b-button size="sm" class="my-2 my-sm-0 ml-2" type="submit"
            >Logout</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style></style>

<template>
  <div>
    <select @change="onChange($event)" v-model="selectedIndex" name="index">
      <option v-for="ind in indicies" :value="ind.id" :key="ind.id">
        {{ ind.id }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    indicies() {
      return this.$store.state.indicies;
    },
  },
  data() {
    return {
      selectedIndex: "hiii",
    };
  },
  mounted() {
    console.log("Fetcing Data..");
    this.$store.dispatch("loadIndicies");
  },

  methods: {
    onChange(event) {
      this.$router.push(`/${event.target.value}`);
    },
  },
};
</script>

<style></style>

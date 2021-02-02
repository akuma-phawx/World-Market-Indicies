<template>
  <div class="contentBox">
    <!-- <div v-if="this.$store.state.isLoggedIn"> -->
    <!-- https://codepen.io/heypablete/pen/qdIsm -->
    <!-- {{ $route.params.id }} -->
    <h1>
      ID Selected: <span class="red">{{ $route.params.id }} </span>||
      <span class="blue">{{ shortName }}</span>
    </h1>
    <div class="tableContent">
      <table class="container">
        <thead>
          <tr>
            <th><h1>ID</h1></th>
            <th><h1>Name</h1></th>
            <th><h1>Market</h1></th>
            <th><h1>ISIN</h1></th>
            <th><h1>WKN</h1></th>
            <th><h1>Instr. ID</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in content" :key="c.id">
            <td>{{ c.id }}</td>
            <td>{{ c.instrument.shortName }}</td>
            <td>{{ c.market.name }}</td>
            <td>{{ c.instrument.isin }}</td>
            <td>{{ c.instrument.nsin.wkn }}</td>
            <td>{{ c.instrument.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- </div> -->
    <!-- <div v-else>
      <h2>You have to be logged in</h2>
    </div> -->
  </div>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.content;
    },
    shortName() {
      const selectedIdx = this.$store.state.indicies.filter((idx) => {
        return idx.id === this.$route.params.id;
      });
      return selectedIdx[0].shortName;
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("loadContent", this.$route.params.id);
  },
};
</script>

<style>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>

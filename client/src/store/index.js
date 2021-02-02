import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Indicies array
    indicies: [],
    //Array to store content of each id.
    idContent: [],
    //To check if user is logged in
    isLoggedIn: false,
  },
  mutations: {
    loadIndicies(state, payload) {
      state.indicies = payload;
      // console.log(state.indicies); //FOR TESTING PURPOSES
    },
    loadContent(state, payload) {
      state.content = payload;
      console.log(state.content);
    },
  },
  actions: {
    //Loading all IDS from Json File with API Call (from my phpsymfonybackend)
    async loadIndicies({ commit }) {
      // console.log(this.state.indicies);//FOR TESTING PURPOSES
      await axios.get("http://localhost:7000/market/").then((res) => {
        commit("loadIndicies", res.data);
      });
      // console.log(this.state.indicies);//FOR TESTING PURPOSES
    },
    //Loading all content of each id (as before with api call on dynamic endpoint)
    async loadContent({ commit }, id) {
      await axios.get(`http://localhost:7000/market/${id}`).then((res) => {
        commit("loadContent", res.data);
      });
    },
  },
  modules: {},
});

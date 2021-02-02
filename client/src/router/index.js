import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import IndexContent from "../components/IndexContent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "IndexContent",
    component: IndexContent,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

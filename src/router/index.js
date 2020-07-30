import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Oils from "../views/Oils.vue";
import Gearboxes from "../views/Gearboxes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/oleje",
    component: Oils
  },
  {
    path: "/prevodovky",
    component: Gearboxes
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

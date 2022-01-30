import Vue from "vue";
import VueRouter from "vue-router";
import Contacts from "../views/Contacts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/aontactInformation",
    name: "ContactInformation",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactInformation.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

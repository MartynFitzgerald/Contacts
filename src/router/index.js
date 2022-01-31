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
    path: "/:id",
    name: "ContactInformation",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactInformation.vue"),
    props: (route) => {
      return { ...route.params };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //Set document title to route name if contact details are not pass through parameters.
  document.title = to.params.contact
    ? to.params.contact.name.first + " " + to.params.contact.name.last
    : to.name;
  next();
});
export default router;

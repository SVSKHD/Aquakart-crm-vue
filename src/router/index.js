import { createRouter, createWebHistory } from "vue-router";
// Layout
import Layout from "../Layout/Layout";
//pages
import Home from "../views/Home.vue";
import Invoice from "../views/Invoice/Invoice";
import Contact from "../views/users/contact";

const routes = [
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    children: [
      { path: "/", name: "Home", component: Home },
      //invoices
      { path: "/invoices", name: "Invoices", component: Invoice },
      //contacts
      { path: "/contacts", name: "Contacts", component: Contact },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

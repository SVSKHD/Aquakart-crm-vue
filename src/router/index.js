import { createRouter, createWebHistory } from "vue-router";
// Layout
import Layout from "../Layout/Layout";
//pages
import Home from "../views/Home.vue";
//invoices
import Invoice from "../views/Invoice/Invoice";
import Invoices from "../views/Invoice/invoices"
import Contact from "../views/users/contact";

const routes = [
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    children: [
      { path: "/", name: "Home", component: Home },
      //invoices
      { path: "/invoice-create", name: "Invoice-create", component: Invoice },
      { path: "/invoices" , name:"Invoices" , component:Invoices},
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

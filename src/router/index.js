import { createRouter, createWebHistory } from "vue-router";
// Layout
import Layout from "../Layout/Layout";
//pages
import Home from "../views/Home.vue";
//invoices
import Invoice from "../views/Invoice/Invoice";
import Invoices from "../views/Invoice/invoices";
import IndividualInvoice from "../views/Invoice/individualInvoice";
import UpdateInvoice from "../views/Invoice/editInvoice";
import Contact from "../views/users/contact";
import contactIndividual from "../views/users/contactindividual"
//Aqua 
import Blogs from "../views/Aqua/Blog/Blog"


const routes = [
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    children: [
      { path: "/", name: "Home", component: Home },
      //invoices
      { path: "/invoice-create", name: "Invoice-create", component: Invoice },
      {
        path: "/invoice-update/:name",
        name: "Update-Invoice",
        component: UpdateInvoice,
      },
      { path: "/invoices", name: "Invoices", component: Invoices },
      //Aquamenu-
      { path : "/blogs", name: "Blogs" , component : Blogs},
      //contacts
      { path: "/contacts", name: "Contacts", component: Contact },
      { path: "/contact/:name" , name:"Contact" , component :contactIndividual  }
    ],
  },
  //indovidual Invoices
  {
    path: "/invoice/:name",
    name: "InvoiceName",
    component: IndividualInvoice,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

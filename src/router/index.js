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
import contactIndividual from "../views/users/contactindividual";
import Quotation from "../views/quotations/quotation";
//Aqua
import Blog from "../views/Aqua/Blog/BlogOperations";
//categories
import Categories from "../views/Aqua/categories/categories";
//products
import Products from "../views/Aqua/products/products";
//sub-categories
import SubCate from "../views/Aqua/subcategories/sub-categories";

//Auth
//import AuthScreen from "../views/Auth/AuthScreen";
const routes = [
  // { path: "/", name: "Aquakart Auth", component: AuthScreen },
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
      //quotation
      { path: "/quotations", name: "quotations", component: Quotation },
      //contacts
      { path: "/contacts", name: "Contacts", component: Contact },
      { path: "/contact/:name", name: "Contact", component: contactIndividual },
      //Aquamenu-
      { path: "/blogoperations", name: "Blogs", component: Blog },
      //categories
      { path: "/categories", name: "Categories", component: Categories },
      //subcategories
      { path: "/sub-categories", name: "Sub-Categories", component: SubCate },
      //products
      { path: "/products", name: "Products", component: Products },
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

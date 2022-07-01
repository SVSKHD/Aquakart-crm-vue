import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from "../Layout/MainLayout"


//invoice
import Invoices from "../views/Invoices/invoices"
import IndividualInvoice from "../views/Invoices/individualInvoice"
//contact
import Contact from "../views/Contact/index"
//auth
import Signin from "../views/Auth/Signin"


const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Signin
  },
  {
    path:"/layout",
    name:"Layout",
    component:MainLayout,
    children:[
      {path:"/home", name:"Home" , component:HomeView},
      //invoices
      {path:"/invoices" , name:"Invoices" , component : Invoices},
      //contact
      {path:"/contacts" , name:"Contacts" , component:Contact}
    ]
  },
  {
    path:"/liveinvoice/:name",
    name:"Invoice",
    component:IndividualInvoice
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

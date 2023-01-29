import { createApp } from 'vue'
import {createHead} from "@vueuse/head"
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import controls from "./components/commonComponents/control"
import VueCookies from 'vue3-cookies'
import "@/assets/app.css"

const AQ = createApp(App)
const head = createHead()
controls(AQ)
AQ
.use(Quasar, quasarUserOptions)
.use(store)
.use(head)
.use(VueCookies)
.use(router)
.mount('#app')

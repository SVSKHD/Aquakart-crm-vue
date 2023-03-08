<template>
  <div>
    <div container>
      <div class="row">
        <div class="col-md-3 col-lg-1 col-xs-12 col-xs-12">
          <div class="q-pa-md">
            <greet-card :name="userName" role="admin" />
          </div>
        </div>
        <div class="col-md-9 col-lg-11 col-xs-12 col-xs-12">
          <div class="q-pa-md">
            <stock-card />
          </div>
        </div>
      </div>
    </div>

    <!-- dialog -->

    <div class="row">
      <div class="col-md-6 col-lg-6 col-xs-12 col-xs-12">
        <div class="text-h6 text-center">Crm Offline Operations</div>
        <hr />
        <div class="row">
          <template v-for="(item, index) in menu" :key="index">
            <div class="col-md-6 col-lg-4 col-xs-12 col-sm-12 q-pa-xs">
              <div class="q-pa-md">
                <q-card :to="item.path" class="my-card" flat bordered>
                  <q-card-section horizontal>
                    <q-card-section>
                      <div class="q-pa-xs">
                        <q-icon
                          style="color: #243a73"
                          size="3rem"
                          :name="item.icon"
                        />
                      </div>
                    </q-card-section>

                    <q-separator vertical />

                    <q-card-section>
                      <div class="q-pa-md">
                        <b>{{ item.name }}</b>
                      </div>
                    </q-card-section>
                  </q-card-section>
                  <q-separator />
                  <q-card-actions>
                    <q-btn
                      :to="item.path"
                      flat
                      icon="open_in_new"
                      label="navigate"
                    />
                  </q-card-actions>
                </q-card>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xs-12 col-xs-12">
        <div class="text-h6 text-center">Aqua Online Operations</div>
        <hr />
        <div class="row">
          <template v-for="(item, index) in onlineMenu" :key="index">
            <div class="col-md-6 col-lg-4 col-xs-12 col-sm-12 q-pa-xs">
              <div class="q-pa-md">
                <q-card :to="item.path" class="my-card" flat bordered>
                  <q-card-section horizontal>
                    <q-card-section>
                      <div class="q-pa-xs">
                        <q-icon
                          style="color: #243a73"
                          size="3rem"
                          :name="item.icon"
                        />
                      </div>
                    </q-card-section>

                    <q-separator vertical />

                    <q-card-section>
                      <div class="q-pa-md">
                        <b>{{ item.name }}</b>
                      </div>
                    </q-card-section>
                  </q-card-section>
                  <q-separator />
                  <q-card-actions>
                    <q-btn
                      :to="item.path"
                      flat
                      icon="open_in_new"
                      label="navigate"
                    />
                  </q-card-actions>
                </q-card>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  setup() {
    const Store = useStore();
    let userName = computed(()=>Store.getters.username);
    let changeDetails = ref(false);
    let menu = ref([
      { name: "Invoices", path: "/invoices", icon: "text_snippet" },
      { name: "Quotations", path: "/quotations", icon: "inventory" },
      { name: "Contacts", path: "/contacts", icon: "people" },
      { name: "reminders", path: "/reminders", icon: "task" },
      { name: "transit", path: "/transit", icon: "fas fa-truck" },
      { name: "Stock", path: "/stock", icon: "fas fa-shopping-bag" },
    ]);
    let onlineMenu = ref([
      { name: "Products", path: "/aqua/products", icon: "fas fa-shopping-bag" },
      { name: "Categories", path: "/aqua/categories", icon: "fas fa-bookmark" },
      {
        name: "Sub-categories",
        path: "/aqua/sub-categories",
        icon: "fas fa-mail-bulk",
      },
      { name: "Orders", path: "/aqua/orders", icon: "fas fa-shopping-cart" },
      { name: "Users", path: "/aqua/users", icon: "fas fa-user-friends" },
    ]);
    return {
      userName,
      //variables
      menu,
      onlineMenu,
      changeDetails,
      //functions
   
    };
  },
};
</script>

<template>
<div>
  <div container>
  <!-- <q-card>
    <q-card-section>
      {{name.name}}
    </q-card-section>
  </q-card> -->
  </div>
  <div class="row">
    <div class="col-md-6 col-lg-6 col-xs-12 col-xs-12">
      <div class="row">
      <template v-for="(item , index) in menu" :key="index">
      <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12 q-pa-xs">
      <q-card :to="item.path"  class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <div class="q-pa-xs">
            <q-icon style="color:#243a73" size="3rem" :name="item.icon" />
            </div>
          </q-card-section>

          <q-separator vertical />

          <q-card-section>
            <div class="q-pa-md">
            <b>{{item.name}}</b>
            </div>  
            
          </q-card-section>
          
        </q-card-section>
        <q-separator />
        <q-card-actions>
   <q-btn :to="item.path" flat icon="open_in_new" label="navigate"/>    
          </q-card-actions>
      </q-card>
      </div>
      </template>
    </div>
    </div>
    <div class="col-md-6 col-lg-6 col-xs-12 col-xs-12"></div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {},
  setup() {
    let namedetails = localStorage.getItem('user')
    let name = ref(namedetails)
    console.log("name" , name.value.name)
    let menu = ref([
      { name: "Invoices", path: "/invoices", icon: "text_snippet" },
      { name: "Quotations", path: "/quotations", icon: "inventory" },
      { name: "Contacts", path: "/contacts", icon: "people" },
      { name: "reminders", path: "/reminders", icon: "task" },
    ]);
    return {
      //variables
      menu,
      name,
      namedetails
    };
  },
};
</script>

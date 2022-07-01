<template>
  <div class="row">
    <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12 q-pa-md">
      <q-card>
        <q-card-section
          style="
            background-color: #243a73;
            color: aliceblue;
            border-radius: 0rem;
          "
        >
          <div class="text-h6">{{ name }}</div>
        </q-card-section>
        <q-card-section>
          <q-input outlined dense label="Name" />
          <br />
          <q-input outlined dense type="textarea" label="type" />
          <br />
          <q-input outlined dense label="email" />
          <br />
          <q-input outlined dense label="phone" />
          <br />
          <q-input outlined dense label="Product" />
          <br />
        </q-card-section>
        <q-card-actions>
          <q-btn
            style="background-color: #243a73; color: aliceblue"
            flat
            :label="name"
          />
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12 q-pa-md">
      <q-card>
        <q-card-section
          style="
            background-color: #243a73;
            color: aliceblue;
            border-radius: 0rem;
          "
        >
          <div class="text-h6">{{ invoiceStatus }}</div>
        </q-card-section>
        <q-card-section> </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Acontact",
  components: {},
  setup() {
    let name = ref("Create-Contact");
    let invoiceStatus = ref("Invoice Status");
    let invoiceData = ref({
        name:"",
        phone:"",
        email:"",
        type:"",
        product:""        
    })
    //functions
    // const submitContact = () =>{
        
    // }
    return {
      //variables
      name,
      invoiceStatus,
      invoiceData,
      //functions

    };
  },
};
</script>

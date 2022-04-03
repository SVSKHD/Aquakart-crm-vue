<template>
  <div class="q-pa-md">
    <q-input label="Search Name" outlined dense />
    <br />
    <div class="row">
      <div class="col-3" v-for="(item, index) in data" :key="index">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ item.name }}</div>
            <div class="text-subtitle2">{{ item.phone }}</div>
          </q-card-section>

          <q-separator dark inset />

<<<<<<< HEAD
          <q-card-actions>
            <q-btn-group outline>
              <q-btn outline color="green" icon="print" />
              <q-btn outline color="green" icon="document" />
            </q-btn-group>
          </q-card-actions>
        </q-card>
      </div>
    </div>
=======
      <q-card-actions>
        <q-btn @click="redirectToIndividualInvoice(item.name)" flat icon="print" />
      </q-card-actions>
    </q-card>
>>>>>>> f62f12acfdaa5a4e7770b1484e6d82917994ca39
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import invoiceCrud from "../Invoice/composables/Invoice";
import router from '../../router';
//import Axios  from 'axios'
export default {
  setup() {
    const { loadInvoice } = invoiceCrud();
    let data = ref([]);
    const loadInvoices = onBeforeMount(() => {
      loadInvoice().then((invoicedata) => {
        data.value = invoicedata.data;
      });
    });
    const redirectToIndividualInvoice = (name) =>{
      router.push(`/invoice/${name}`)
    }
    return {
      //variables
      data,
      //functions
      loadInvoices,
      redirectToIndividualInvoice
    };
  },
};
</script>

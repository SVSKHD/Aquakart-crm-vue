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

          <q-card-actions>
            <q-btn-group outline>
              <q-btn outline color="green" icon="print" />
              <q-btn outline color="green" icon="document" />
            </q-btn-group>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import invoiceCrud from "../Invoice/composables/Invoice";
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
    console.log("data", data.value);
    return {
      //variables
      data,
      //functions
      loadInvoices,
    };
  },
};
</script>

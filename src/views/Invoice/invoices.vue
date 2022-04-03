<template>
  <div class="q-pa-md">
    <q-input label="Search Name" outlined dense />
    <br />
    <div class="text-center" v-if="Loading">
        <q-spinner color="primary" size="3em" />
      </div>
      <div v-else>
    <div class="row">
        <div class="col-3" v-for="(item, index) in data" :key="index">
          <q-card>
            <q-card-section>
              <div class="text-h6">{{ item.name }}</div>
              <div class="text-subtitle2">{{ item.phone }}</div>
            </q-card-section>

            <q-separator dark inset />

            <q-card-actions>
              <q-btn
                @click="redirectToIndividualInvoice(item.name)"
                flat
                icon="print"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import invoiceCrud from "../Invoice/composables/Invoice";
import router from "../../router";
//import Axios  from 'axios'
export default {
  setup() {
    const { loadInvoice } = invoiceCrud();
    let data = ref([]);
    let Loading = ref(false);
    const loadInvoices = onBeforeMount(() => {
      loadInvoice()
        .then((invoicedata) => {
          Loading.value = true;
          data.value = invoicedata.data;
        })
        .then(() => (Loading.value = false));
    });
    const redirectToIndividualInvoice = (name) => {
      router.push(`/invoice/${name}`);
    };
    return {
      //variables
      data,
      //functions
      loadInvoices,
      redirectToIndividualInvoice,
    };
  },
};
</script>

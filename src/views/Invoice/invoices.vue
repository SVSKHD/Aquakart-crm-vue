<template>
  <div class="q-pa-md">
    <div class="row justify-evenly">
      <div class="col-5">
        <q-input label="Search Name" outlined dense />
      </div>
      <div class="col-5">
        <q-btn-group spread>
          <q-btn
            dense
            style="background: #041562; color: white;"
            to="/invoice-create"
            label="Create Invoice"
            icon="timeline"
          />
          <q-btn
            dense
            style="background: #041562; color: white;"
            to="/invoice-update"
            label="Update Invoice"
            icon="visibility"
          />
        </q-btn-group>
      </div>
    </div>
    <br />
    <div class="text-center" v-if="Loading">
      <q-spinner color="primary" size="3em" />
    </div>
    <div v-else>
      <div class="row">
        <div class="col-3" v-for="(item, index) in data" :key="index">
          <div class="q-pa-md">
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
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import invoiceCrud from "../Invoice/composables/Invoice";
import router from "../../router";
export default {
  setup() {
    const { loadInvoice } = invoiceCrud();
    let data = ref([]);
    let Loading = ref(false);
    const loadInvoices = onMounted(() => {
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

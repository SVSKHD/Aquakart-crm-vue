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

    <q-tabs
      v-model="tab"
      dense
      class="head text-grey"
      active-color="white"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="invoices" label="Invoices" />
      <q-tab name="gst-invoices" label="GST Invoices" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="invoices">
        <div class="text-h6">Invoices</div>
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
                <q-btn
                  @click="redirectToIndividualInvoice(item.name)"
                  flat
                  icon="print"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="gst-invoices">
        <div class="text-h6">GST-Invoices</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>

    <!-- tabs end -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import invoiceCrud from "../Invoice/composables/Invoice";
import router from "../../router";


export default {
  setup() {
    let tab = ref("invoices");
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
      tab,
      //functions
      loadInvoices,
      redirectToIndividualInvoice,
    };
  },
};
</script>

<style>
.head {
  background-color: #041562;
  border-radius: 0.5rem;
}
</style>

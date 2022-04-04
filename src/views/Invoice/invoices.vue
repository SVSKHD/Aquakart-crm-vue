<template>
  <div class="q-pa-md">
    <!-- tabs start -->

    <div class="text-left">
      <q-btn-dropdown
        split
        class="head text-white"
        push
        no-caps
        @click="onMainClick"
      >
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <div class="text-center">Invoice Operations</div>
          </div>
        </template>

        <q-list>
          <q-item clickable v-close-popup @click="onCreateClick">
            <q-item-section>
              <q-item-label>Create Invoice</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="table_chart" />
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onEditClick">
            <q-item-section>
              <q-item-label>Edit Invoice</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="pages" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
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
import { ref, onBeforeMount } from "vue";
import invoiceCrud from "../Invoice/composables/Invoice";
import router from "../../router";
export default {
  setup() {
    let tab = ref("invoices");
    const { loadInvoice } = invoiceCrud();
    let data = ref([]);
    const onCreateClick = () => {
      router.push("/invoice-create");
    };
    const onEditClick = () => {
      router.push("/invoice-edit");
    };
    const loadInvoices = onBeforeMount(() => {
      loadInvoice().then((invoicedata) => {
        data.value = invoicedata.data;
      });
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
      onCreateClick,
      onEditClick,
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

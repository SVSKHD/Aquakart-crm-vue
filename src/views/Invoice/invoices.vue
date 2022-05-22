<template>
  <div class="q-pa-md">
    <div>
      <q-btn
        dense
        style="background: #041562; color: white"
        to="/invoice-create"
        label="Create Invoice"
        icon="timeline"
      />
    </div>
    <br />

    <div class="text-center" v-if="Loading">
      <q-spinner color="primary" size="3em" />
    </div>
    <div v-else>
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
          <br />
          <q-table
            title="Invoices"
            :rows="rows"
            :columns="columns"
            row-key="name"
            dark
            color="amber"
            separator="separator"
            :filter="filter"
            :loading="loading"
          >
            <template #body-cell-name="props">
              <q-td :props="props">
                <q-btn-group flat>
                  <q-btn
                    flat
                    @click="redirectToIndividualInvoice(props.value)"
                    icon="print"
                  />
                  <q-btn
                    flat
                    @click="redirectToEditInvoice(props.value)"
                    icon="edit"
                  />
                  <q-btn
                    flat
                    @click="deleteInvoiceAction(props.value)"
                    icon="delete"
                    :label="props.value"
                  />
                </q-btn-group>
              </q-td>
            </template>
            <template v-slot:top-right>
              <q-input
                bg-color="white"
                dense
                outlined
                v-model="filter"
                label="Search by Name"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
        </q-tab-panel>

        <q-tab-panel name="gst-invoices">
          <div class="text-h6">GST-Invoices</div>
           <q-table
            title="Invoices"
            :rows="gstrows"
            :columns="gstcolumns"
            row-key="name"
            dark
            color="amber"
            separator="separator"
            :filter="filter"
            :loading="loading"
          >
            <template #body-cell-name="props">
              <q-td :props="props">
                <q-btn-group flat>
                  <q-btn
                    flat
                    @click="redirectToIndividualInvoice(props.value)"
                    icon="print"
                  />
                  <q-btn
                    flat
                    @click="redirectToEditInvoice(props.value)"
                    icon="edit"
                  />
                  <q-btn
                    flat
                    @click="deleteInvoiceAction(props.value)"
                    icon="delete"
                    :label="props.value"
                  />
                </q-btn-group>
              </q-td>
            </template>
            <template v-slot:top-right>
              <q-input
                bg-color="white"
                dense
                outlined
                v-model="filter"
                label="Search by Name"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
        </q-tab-panel>
      </q-tab-panels>
    </div>
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
    const { loadInvoice, loadgstInvoice ,deleteInvoice } = invoiceCrud();
    let data = ref([]);
    let separator = ref("vertical");
    let filter = ref("");
    let Loading = ref(false);

    const columns = ref([
      {
        name: "name",
        required: true,
        label: "Customer-Name",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      { name: "protein", label: "Phone", field: "phone" },
      { name: "sodium", label: "Email", field: "email" },
      {
        name: "Price",
        align: "center",
        label: "Product",
        field: "product",
        sortable: true,
      },
      { name: "carbs", label: "Price", field: "price" },
      {
        name: "calcium",
        label: "Quantity",
        field: "quantity",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "iron",
        label: "Serial",
        field: "serial",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
    ]);

    const rows = ref([]);

     const gstcolumns = ref([
      {
        name: "name",
        required: true,
        label: "Customer-Name",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      { name: "protein", label: "Phone", field: "phone" },
      { name: "sodium", label: "Email", field: "email" },
      {
        name: "Price",
        align: "center",
        label: "Product",
        field: "product",
        sortable: true,
      },
      { name: "carbs", label: "Price", field: "price" },
      {
        name: "calcium",
        label: "Quantity",
        field: "quantity",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "iron",
        label: "Serial",
        field: "serial",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
    ]);

    const gstrows = ref([]);

    const loadInvoices = onBeforeMount(() => {
      loadInvoice().then((invoicedata) => {
        Loading.value = true;
        data.value = invoicedata.data;
        rows.value = invoicedata.data;
        console.log(rows.value);
        Loading.value = false;
      });
    });

    const redirectToIndividualInvoice = (name) => {
      router.push(`/invoice/${name}`);
    };
    const redirectToEditInvoice = (name) => {
      router.push(`/invoice-update/${name}`);
    };
    const deleteInvoiceAction = (name) => {
      deleteInvoice(name).then(() => {
        Loading.value = true;
        loadInvoices();
        Loading.value = false;
      });
    };
    const loadGstInvoiceData = onBeforeMount(() =>{
      loadgstInvoice().then((gstdata)=>{
        gstrows.value = gstdata.data
      })
    })
    return {
      //variables
      data,
      tab,
      Loading,
      columns,
      rows,
      gstcolumns,
      gstrows,
      separator,
      filter,
      //functions
      loadInvoices,
      loadGstInvoiceData,
      redirectToIndividualInvoice,
      redirectToEditInvoice,
      deleteInvoiceAction,
    };
  },
};
</script>

<style>
.head {
  background-color: #041562;
  border-radius: 0.5rem;
}
.margin {
  margin: 5px;
}
</style>

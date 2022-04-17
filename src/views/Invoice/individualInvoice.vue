<template>
  <div class="q-pa-md">
    <q-toolbar class="head text-white q-my-md shadow-2">
      <q-btn stretch flat icon="home" to="/" />
      <q-space />
      <q-separator dark vertical />
      <q-btn stretch flat label="Print" />
      <q-separator dark vertical />
      <q-btn stretch flat label="Download" />
    </q-toolbar>

    <div class="q-pa-md">
      <br />
      <div>
        <q-btn-group spread>
          <q-btn
            @click="generatePrint"
            style="background: #041562; color: white"
            label="Print Invoice"
            icon="print"
          />
          <q-btn
            @click="generatePdf"
            style="background: #041562; color: white"
            label="Download PDF"
            icon="document"
          />
        </q-btn-group>
        <hr />
        <q-card>
          <q-card-section>
            <div ref="content">
              <div class="row">
                <div class="col-6">
                  <h5>Invoice No : {{ userData.invoiceNo }}</h5>
                </div>
                <div class="col-6 text-right">
                  <h5>Date : {{ userData.date }}</h5>
                </div>
              </div>
              <hr />
              <div class="row justify-evenly">
                <div class="col-5">
                  <div class="text-left">
                    <div class="text-h6">
                      Name : <b>{{ userData.name }}</b>
                    </div>
                    <div class="text-subtitle">
                      Address : <b>{{ userData.address }}</b>
                    </div>
                    <div class="text-subtitle">
                      Phone : <b>{{ userData.phone }}</b>
                    </div>
                  </div>
                </div>
                <div class="col-5">
                  <div v-if="userData.gst">
                    <div class="text-h6">
                      Gst-Registered Name : <b>{{ userData.gstName }}</b>
                    </div>
                    <div class="text-subtitle">
                      Gst-No : <b>{{ userData.gstNo }}</b>
                    </div>
                    <div class="text-subtitle">
                      Gst-Address : <b>{{ userData.gstAddress }}</b>
                    </div>
                  </div>
                  <div v-else>
                    <div class="text-h6">No GST Input Given</div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <div class="row justify-evenly">
                <div class="col-2"><b>Product Name</b></div>
                <div class="col-2"><b>Quantity</b></div>
                <div class="col-2"><b>GST-(18%)</b></div>
                <div class="col-2"><b>Price</b></div>
              </div>
              <hr />
              <div class="row justify-evenly">
                <div class="col-2">
                  Product Name - {{ userData.productname }}
                </div>
                <div class="col-2">{{ userData.quantity }}</div>
                <div class="col-2">{{ gstValueGenerate() }} ₹ /-</div>
                <div class="col-2">{{ userData.price }} ₹ /-</div>
              </div>
              <hr />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
//import { jsPDF } from "jspdf";
import { useRoute } from "vue-router";
import invoiceCrud from "./composables/Invoice";
export default {
  setup() {
    const route = useRoute();
    let gst = ref("");
    let content = ref("");
    let data = route.params.name;
    let userData = ref({
      invoiceNo: "",
      date: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      productname: "",
      quantity: "",
      serial: "",
      price: "",
      paymenttype: "",
      gst: "",
      gstNo: "",
      gstAddress: "",
      gstPhone: "",
      gstName: "",
    });
    const { filterInvoice } = invoiceCrud();

    const gstValueGenerate = () => {
      let price = userData.value.price;
      let rawValue = Math.round(price * 0.18);
      return rawValue;
    };

    const generatePrint = () => {
      window.print();
    };

    const generatePdf = () => {
      //const doc = jsPDF()
      console.log(content.value);
    };

    const loadIndividualInvoice = onMounted(() => {
      filterInvoice(data).then((item) => {
        const dataHold = item.data;
        dataHold.map((itemData) => {
          userData.value.invoiceNo = itemData.InvoiceNo;
          userData.value.date = itemData.date;
          userData.value.name = itemData.name;
          userData.value.email = itemData.email;
          userData.value.phone = itemData.phone;
          userData.value.address = itemData.address;
          userData.value.gst = itemData.gstInvoice;
          userData.value.gstNo = itemData.Gst;
          userData.value.gstAddress = itemData.businessAddress;
          userData.value.gstPhone = itemData.phone;
          userData.value.gstName = itemData.businessName;
          userData.value.productname = itemData.product;
          userData.value.price = itemData.price;
          userData.value.quantity = itemData.quantity;
          console.log("item data", itemData);
        });
      });
    });
    console.log("userData", userData.value);
    return {
      //variables
      gst,
      data,
      content,
      userData,
      //functions
      loadIndividualInvoice,
      gstValueGenerate,
      generatePrint,
      generatePdf,
    };
  },
};
</script>

<style>
.head {
  background-color: #041562;
}
</style>

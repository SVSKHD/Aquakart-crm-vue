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
        <q-card>
          <q-card-section>
            <div ref="content">
              <div class="row justify-evenly">
                <div class="col-5">
                  <h5>Date : {{ userData.date }}</h5>
                </div>
                <div class="col-5">
                  <h5>Invoice No : -- {{ userData.invoiceNo }}</h5>
                </div>
              </div>
              <hr />
              <div class="row justifu-evenly">
                <div class="col-5">
                  <div class="text-left">
                    <div class="text-h6">
                      Name : <b>{{ userData.name }}</b>
                    </div>
                     <div class="text-subtitle">
                      Id : <b>{{ userData.id }}</b>
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
                    <div class="text-h6">GST : {{userData.gstNo}}</div>
                    <div class="text-subtitle">GST Name : {{userData.gstName}}</div>
                    <div class="text-subtitle">GST Address : {{userData.gstAddress}}</div>
                  </div>
                  <div v-else>
                    <div class="align">
                      <div class="text-h6">No Gst Inputs</div>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <!-- product details -->
              <div>

              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
//import { jsPDF } from "jspdf";
import { useRoute } from "vue-router";
import invoiceCrud from "./composables/Invoice";
export default {
  setup() {
    const route = useRoute();
    let data = route.params.name;
    let userData = ref({
      invoiceNo: "",
      date: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      id:"",
      productname: "",
      quantity: "",
      serial: "",
      price: "",
      paymenttype: "",
      gst: "",
      gstName: "",
      gstNo: "",
      gstAddress: "",
      product:"",
      productSerial:"",
      productQuantity:"",
      
    });
    const { filterInvoice } = invoiceCrud();
    const loadIndividualInvoice = onBeforeMount(() => {
      filterInvoice(data).then((item) => {
        const dataHold = item.data;
        dataHold.map((itemData) => {
          userData.value.invoiceNo = itemData.InvoiceNo;
          userData.value.date = itemData.date;
          userData.value.name = itemData.name;
          userData.value.email = itemData.email;
          userData.value.phone = itemData.phone;
          userData.value.id = itemData.Id
          userData.value.address = itemData.address;
          userData.value.gst = itemData.gstInvoice;
          userData.value.gstNo = itemData.Gst;
          userData.value.gstAddress = itemData.businessAddress;
          userData.value.gstName = itemData.businessName
          userData.value.product = itemData.product
          userData.value.productSerial = itemData.serial
          userData.value.productQuantity = itemData.quantity
          console.log("item data", itemData);
        });
      });
    });
    console.log("userData", userData.value);



    return {
      //variables
      data,
      userData,
      //functions
      loadIndividualInvoice,
    };
  },
};
</script>

<style>
.head {
  background-color: #041562;
}
.align{
  text-align: center;
}
</style>

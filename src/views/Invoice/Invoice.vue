<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <h2>Kundana Enterprises</h2>
        <hr />
      </q-card-section>
      <q-card-section>
        <!-- //date and invoice section -->
        <div class="row justify-evenly">
          <div class="col-6">
            <div class="row justify-content-evenly">
              <div class="col-4"><p class="p-align">Date :</p></div>
              <div class="col-4">
                <div class="align">
                <p class="p-align-date">{{`${date} -  ${month} - ${year}`}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row justify-content-evenly">
              <div class="col-4"><p class="p-align">Invoice :</p></div>
              <div class="col-4">
                <div class="align">
                  <q-input class="align" dense outlined label="Invoice No" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- customer details and if gst details -->
        <div class="row justify-evenly">
          <div class="col-5">
            <h6 class="customerhead">Customer Details</h6>
            <hr />
            <div class="row">
              <!-- customer details -->
              <div class="col-5 margin">
                <q-input v-model="invoiceData.name" dense label="name" outlined />
                <br />
                <q-input
                  dense
                  outlined
                  v-model="invoiceData.address"
                  type="textarea"
                  label="Address"
                />
                <br />
                <q-input v-model="invoiceData.phone" dense label="Phone" outlined />
                <br/>
                  <q-input v-model="invoiceData.email" dense label="Email" outlined />
              </div>
              <!-- gst details -->
              <div class="col-5 margin">
                <q-toggle size="xl" v-model="gst" val="xl" />
                <div v-if="gst">
                  <p>GST Field</p>
                  <hr />
                  <q-input v-model="invoiceData.businessName" dense outlined label="Business Name" />
                  <br />
                  <q-input dense outlined v-model="invoiceData.Gst" label="GST" />
                  <br />
                  <q-input
                    dense
                    outlined
                    v-model="invoiceData.businessAddress"
                    type="textarea"
                    label="Registered Address"
                  />
                </div>
                <div v-else>
                  <h4>No GST for Customer</h4>
                </div>
              </div>
            </div>
          </div>
          <!-- product details -->
          <div class="col-5">
            <h6 class="customerhead">Product Details</h6>
            <hr />
            <div class="row justify-evenly">
              <div class="col-5">
                <q-input dense v-model="invoiceData.product" outlined label="Product-name" />
                <br />
                <q-input dense v-model="invoiceData.quantity" outlined label="Product-Quantity" />
                <br />
                <q-input dense v-model="invoiceData.serial" outlined label="Product-Serial" />
                <br />
              </div>
              <div class="col-5">
                <h4>Quantity : {{invoiceData.quantity}}</h4>
                <h5>Serial : {{invoiceData.serial}}</h5>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <!-- //product price details -->
        <div class="row justify-evenly">
          <div class="col-5">
            <q-input v-model="invoiceData.price" dense outlined label="Price" />
            <br />
            <q-input v-model="invoiceData.paymentType" dense outlined label="Payment Type" />
          </div>
          <div class="col-5">
            <h5>Payment : {{ invoiceData.price }}</h5>
            <h6>Payment Type : {{ invoiceData.paymentType }}</h6>
          </div>
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn
          @click="invoiceSubmit"
          style="background: #041562; color: white"
          label="Submit"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import Router from "../../router/index"
import invoiceCrud from "./composables/Invoice"
export default {
  name: "Invoices",
  setup() {
    let gst = ref(false);
    let testArray = ref([])
    let date = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    const {createInvoice} = invoiceCrud()
    let invoiceData = ref({
      name: "",
      email: "",
      phone: "",
      address: "",
      gstInvoice: gst.value,
      Gst: "",
      businessName: "",
      businessAddress: "",
      product: "",
      serial: "",
      quantity: "",
      price: "",
      paymentType: "",
    });
    //functions
    const invoiceSubmit = () => {
      console.log("test-Array" , testArray.value)
      createInvoice(invoiceData.value) 
      Router.push("/invoices")
    };
    return {
      //variables
      gst,
      date,
      month, 
      year,
      testArray,
      invoiceData,
      //functions
      invoiceSubmit,
    };
  },
};
</script>

<style>
.p-align {
  font-size: 2rem;
  font-weight: bolder;
}
.p-align-date{
  font-size: 2rem;
  font-weight: bolder;
  color: darkcyan;
}
.align {
  text-align: left;
}
.customerhead {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
}
.margin {
  margin: 2rem;
}

</style>

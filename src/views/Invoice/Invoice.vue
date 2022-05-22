<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <h2>Kundana Enterprises</h2>
        <hr />
      </q-card-section>
      <form @submit.prevent="invoiceSubmit">
        <q-card-section>
          <!-- //date and invoice section -->

          <div class="text-center">
            <p class="p-align-date">
              <b>DATE</b> : {{ `${date} -  ${month} - ${year}` }}
            </p>
          </div>

          <!-- customer details and if gst details -->
          <div class="row justify-evenly">
            <div class="col-5 col-md-5 col-xs-12 col-sm-12">
              <h6 class="customerhead">Customer Details</h6>
              <hr />
              <div class="row justify-evenly">
                <!-- customer details -->
                <div class="col-5 col-md-5 col-xs-12 col-sm-12">
                  <q-input
                    v-model="invoiceData.name"
                    dense
                    label="name"
                    outlined
                  />
                  <br />
                  <q-input
                    dense
                    outlined
                    v-model="invoiceData.address"
                    type="textarea"
                    label="Address"
                  />
                  <br />
                  <q-input
                    v-model="invoiceData.phone"
                    dense
                    label="Phone"
                    outlined
                  />
                  <br />
                  <q-input
                    v-model="invoiceData.email"
                    dense
                    label="Email"
                    outlined
                  />
                </div>
                <!-- gst details -->
                <div class="col-5 col-md-5 col-xs-12 col-sm-12">
                  <q-toggle
                    size="xl"
                    v-model="gstValue"
                    @update:model-value="(val) => manipulateGst(val)"
                    val="xl"
                    label="GST Status"
                  />

                  <div class="q-pa-md">
                  <div v-if="gstValue">
                    <p>GST Field</p>
                    <hr />
                    <q-input
                      v-model="invoiceData.businessName"
                      dense
                      outlined
                      label="Business Name"
                    />
                    <br />
                    <q-input
                      dense
                      outlined
                      v-model="invoiceData.Gst"
                      label="GST"
                    />
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
            </div>
            <!-- product details -->
            <div class="col-5 col-md-5 col-xs-12 col-sm-12">
              <h6 class="customerhead">Product Details</h6>
              <hr />
              <div class="row justify-evenly">
                <div class="col-5 col-md-5 col-xs-12 col-sm-12">
                  <h4>Quantity : {{ invoiceData.quantity }}</h4>
                  <h5>Serial : {{ invoiceData.serial }}</h5>
                </div>
                <div class="col-5 col-md-5 col-xs-12 col-sm-12">
                  <q-input
                    dense
                    v-model="invoiceData.product"
                    outlined
                    label="Product-name"
                  />
                  <br />
                  <q-input
                    dense
                    v-model="invoiceData.quantity"
                    outlined
                    label="Product-Quantity"
                  />
                  <br />
                  <q-input
                    dense
                    v-model="invoiceData.serial"
                    outlined
                    label="Product-Serial"
                  />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <br />
          <div class="text-h6">Payment Details</div>
          <!-- //product price details -->
          <div class="row justify-evenly">
            <div class="col-5 col-md-5 col-xs-12 col-sm-12">
              <q-input
                v-model="invoiceData.price"
                dense
                outlined
                label="Price"
              />
              <br />
              <q-input
                v-model="invoiceData.paymentType"
                dense
                outlined
                label="Payment Type"
              />
            </div>
            <div class="col-5 col-md-5 col-xs-12 col-sm-12">
              <h5>Payment : {{ invoiceData.price }}</h5>
              <h6>Payment Type : {{ invoiceData.paymentType }}</h6>
            </div>
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn
            type="submit"
            style="background: #041562; color: white"
            label="Submit"
          />
        </q-card-actions>
      </form>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import Router from "../../router/index";
import invoiceCrud from "./composables/Invoice";
//import Axios from "axios"
export default {
  name: "Invoices",
  setup() {
    let gstValue = ref(false);
    let testArray = ref([]);
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    const { createInvoices } = invoiceCrud();

    let invoiceData = ref({
      name: "",
      email: "",
      phone: "",
      address: "",
      product: "",
      paymentType: "",
      gstInvoice: gstValue.value,
      Gst: "",
      businessName: "",
      businessAddress: "",
      Type: "",
      serial: "",
      price: "",
      quantity: "",
      aquakartuser: "",
    });
    //functions
    const manipulateGst = (val) => {
      console.log("gst value", val);
      invoiceData.value.gstInvoice = val;
    };

    const invoiceSubmit = () => {
      createInvoices(invoiceData.value);
      Router.push("/invoices");
    };
    return {
      //variables
      date,
      month,
      year,
      testArray,
      invoiceData,
      gstValue,
      //functions
      invoiceSubmit,
      manipulateGst,
    };
  },
};
</script>

<style>
.p-align {
  font-size: 2rem;
  font-weight: bolder;
}
.p-align-date {
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

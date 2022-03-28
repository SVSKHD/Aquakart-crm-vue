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
                  <q-input dense class="align" outlined label="Date" />
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
                <q-input dense label="name" outlined />
                <br />
                <q-input
                  dense
                  outlined
                  v-model="text"
                  type="textarea"
                  label="Address"
                />
                <br />
                <q-input dense label="Phone" outlined />
              </div>
              <!-- gst details -->
              <div class="col-5 margin">
                <q-toggle size="xl" v-model="gst" val="xl" />
                <div v-if="gst">
                  <p>GST Field</p>
                  <hr />
                  <q-input dense outlined v-model="text" label="GST" />
                  <br />
                  <q-input
                    dense
                    outlined
                    v-model="text"
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

          <div class="col-5">
            <h6 class="customerhead">Product Details</h6>
            <hr />
            <div class="row justify-evenly">
              <div class="col-5">
                <q-input outlined />
              </div>
              <div class="col-5">
                <q-input outlined />
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Invoices",
  setup() {
    let gst = ref(false);
    return {
      gst,
    };
  },
};
</script>

<style>
.p-align {
  font-size: 2rem;
  font-weight: bolder;
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

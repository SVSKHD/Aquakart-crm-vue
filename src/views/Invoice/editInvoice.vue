<template>
  <div>
    <br />
    <div class="text-h2">Invoice update</div>
    <hr />
    <div v-if="submit">
      <div class="text-green">Succesfully Submitted</div>
    </div>
    <div v-else>
      <div v-if="Loading">
        <div class="text-center">
          <q-spinner color="primary" size="3em" />
        </div>
      </div>
      <div v-else>
        <q-card>
          <div class="q-pa-md">
            <!-- date & invoice No -->
            <div class="row">
              <div class="col-6">
                <q-input dense outlined v-model="updateData.date">
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                </q-input>
              </div>
              <div class="col-6">
                <div class="text-h4">invoice : {{ updateData.No }}</div>
              </div>
            </div>
            <br />
            <hr />
            <!-- user details -->
            <div class="row">
              <!-- customer details -->
              <div class="col-5 margin">
                <q-input
                  v-model="updateData.name"
                  dense
                  label="name"
                  outlined
                />
                <br />
                <q-input
                  dense
                  outlined
                  v-model="updateData.address"
                  type="textarea"
                  label="Address"
                />
                <br />
                <q-input
                  v-model="updateData.phone"
                  dense
                  label="Phone"
                  outlined
                />
                <br />
                <q-input
                  v-model="updateData.email"
                  dense
                  label="Email"
                  outlined
                />
              </div>
              <!-- gst details -->
              <div class="row justify-evenly">
                <div class="col-5">
                  <q-toggle
                    size="xl"
                    v-model="updateData.gst"
                    @update:model-value="(val) => manipulateGst(val)"
                    val="xl"
                  />
                  {{ gstValue }}
                </div>

                <div class="col-5">
                  <div v-if="updateData.gst">
                    <p>GST Field</p>
                    <hr />
                    <q-input
                      v-model="updateData.businessName"
                      dense
                      outlined
                      label="Business Name"
                    />
                    <br />
                    <q-input
                      dense
                      outlined
                      v-model="updateData.Gst"
                      label="GST"
                    />
                    <br />
                    <q-input
                      dense
                      outlined
                      v-model="updateData.businessAddress"
                      type="textarea"
                      label="Registered Address"
                    />
                  </div>
                  <div v-else>
                    <h4>No GST for Customer</h4>
                  </div>
                </div>

                <hr />
              </div>
            </div>
            <hr />
            <!-- product details -->
            <div class="text-h2">Product Details</div>
            <hr />
            <div class="row justify-evenly">
              <div class="col-5">
                <q-input
                  dense
                  v-model="updateData.productname"
                  outlined
                  label="Product-name"
                />
                <br />
                <q-input
                  dense
                  v-model="updateData.quantity"
                  outlined
                  label="Product-Quantity"
                />
                <br />
                <q-input
                  dense
                  v-model="updateData.serial"
                  outlined
                  label="Product-Serial"
                />
                <br />
              </div>
              <div class="col-5">
                <h4>Quantity : {{ updateData.quantity }}</h4>
                <h5>Serial : {{ updateData.serial }}</h5>
              </div>
            </div>
            <hr />
            <!-- price details -->
            <div class="text-h2">Payment Details</div>
            <hr />
            <div class="row justify-evenly">
              <div class="col-5">
                <q-input
                  v-model="updateData.price"
                  dense
                  outlined
                  label="Price"
                />
                <br />
                <q-input
                  v-model="updateData.paymenttype"
                  dense
                  outlined
                  label="Payment Type"
                />
              </div>
              <div class="col-5">
                <h5>Payment : {{ updateData.price }}</h5>
                <h6>Payment Type : {{ updateData.paymenttype }}</h6>
              </div>
            </div>
          </div>
          <q-card-actions>
            <q-btn
              style="background: #041562; color: white"
              @click="handleSubmit"
              label="update"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import invoiceCrud from "./composables/Invoice";
import { useRoute } from "vue-router";
export default {
  name: "UpdateInvoice",
  setup() {
    let route = useRoute();
    let match = route.params.name;
    let Loading = ref(false);
    let submit = ref(false);
    let updateData = ref({
      No: "",
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
    const { updateInvoice, updateInvoiceData } = invoiceCrud();
    const handleSubmit = () => {
        console.log("updatedata",updateData.value)
      updateInvoiceData(match, updateData.value).then(() => {
        submit.value = true;
      });
    };

    const manipulateGst = (val) => {
      console.log("val", val);
    };

    const loadData = onBeforeMount(() => {
      Loading.value = true;
      updateInvoice(match)
        .then((data) => {
          let info = data.data;
          updateData.value.No = info.InvoiceNo;
          updateData.value.date = info.date;
          updateData.value.name = info.name;
          updateData.value.phone = info.phone;
          updateData.value.address = info.address;
          updateData.value.email = info.email;
          updateData.value.gst = info.gstInvoice;
          updateData.value.gstNo = info.GST;
          updateData.value.gstAddress = info.businessAddress;
          updateData.value.gstPhone = info.phone;
          updateData.value.productname = info.product;
          updateData.value.quantity = info.quantity;
          updateData.value.price = info.price;
          updateData.value.serial = info.serial;
          updateData.value.paymenttype = info.paymentType;
        })
        .then(() => {
          Loading.value = false;
        });
    });

    return {
      //variables
      updateData,
      Loading,
      submit,
      //functions
      handleSubmit,
      loadData,
      manipulateGst,
    };
  },
};
</script>

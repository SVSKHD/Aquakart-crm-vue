<template>
  <div>
    <div class="text-center" v-if="Loading">
      <div class="q-pa-md">
        <q-spinner-hourglass style="color: #243a73" size="4em" />
      </div>
    </div>
    <div v-else class="q-pa-md">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-xs-12 col-sm-12">
          <div class="text-right q-pa-md">
            <q-btn flat dense @click="invoicePrint" icon="print" />
          </div>
        </div>

        <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
          <q-card @dblclick="invoicePrint">
            <q-card-section>
              <!-- //intro -->
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                  <q-img
                    src="../../assets/logo.png"
                    style="height: 140px; max-width: 150px"
                  />
                  <div class="text-h5">Kundana Enterprises</div>
                  <div class="text-subtext2">GST:36AMUPB4451C1Z7</div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
                  <div class="q-pa-md">
                    <div class="text-h6" style="color: #243a73">
                      Date : {{ date }}
                    </div>
                    <div class="text-h6" style="color: #243a73">
                      Invoice No : {{ Data.invoiceNo }}
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div class="row q-pa-md">
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" />
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-left">
                  <div class="text-h4">Customer Details</div>
                  <br />
                  <div class="q-pa-sm text-left">
                    <div class="text-h6">name : {{ Data.name }}</div>
                    <div class="text-subtext">
                      <b>Address : </b>{{ Data.address }}
                    </div>
                    <div class="text-subtext2">
                      <b>Phone :</b> {{ Data.phone }}
                    </div>
                  </div>
                </div>
                <div
                  v-if="gst"
                  class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center"
                >
                  <div class="text-h4 text-left">Business Details</div>
                  <br />
                  <div class="q-pa-sm text-left">
                    <div class="text-h6">Business Name: {{ Data.gstName }}</div>
                    <div class="text-h6">Business No: {{ Data.gstNo }}</div>
                    <div class="text-subtext">
                      Business Address : {{ Data.gstAddress }}
                    </div>
                    <div class="text-subtext2">
                      Business Phone : {{ Data.phone }}
                    </div>
                  </div>
                </div>

                <div
                  v-else
                  class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center"
                ></div>
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" />
              </div>
              <hr />
              <q-table
                title="Product Details"
                :rows="rows"
                :columns="columns"
                row-key="name"
                :hide-pagination="true"
              >
              </q-table>
              <hr />
              <div class="text-h6 text-center">
                Serials : {{ Data.productSerialNo }}
              </div>
              <hr />
              <div>
                <div class="text-h6 text-red">Terms & Conditions</div>
                <q-list
                  light
                  bordered
                  separator
                  dense
                  padding
                  class="rounded-borders"
                >
                  <q-item
                    v-for="item in termsAndConditions"
                    :key="item"
                    clickable
                    v-ripple
                  >
                    <q-item-section
                      ><b class="text-red">{{ item.title }}</b></q-item-section
                    >
                    <q-item-section
                      ><b>{{ item.description }}</b></q-item-section
                    >
                  </q-item>
                </q-list>
              </div>
              <div class="row q-pa-md">
                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 text-left">
                  <div class="text-h6">Kent Customer Care</div>
                  <div class="text-subtext2">
                    <a class="linkstyle" href="tel:09278912345">
                      09278912345
                    </a>
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-6 col-sm-12 col-xs-12 text-center"
                ></div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-lg-2 col-md-2 col-xs-12 col-sm-12"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import InvoiceOperations from "./invoice";
export default {
  setup() {
    const Route = useRoute();
    const { individualInvoice } = InvoiceOperations();
    let match = Route.params.name;
    let date = ref("");
    let Loading = ref(false);
    let gst = ref(false);
    let basePrice = ref("");
    const columns = [
      {
        name: "name",
        required: true,
        label: "Product Name",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "calories",
        align: "center",
        label: "Product Quantity",
        field: "calories",
        sortable: true,
      },
      { name: "fat", label: "Product-Base-Price", field: "basePrice" },
      { name: "fat", label: "GST(18%)", field: "gst", sortable: true },

      { name: "carbs", label: "Price", field: "carbs" },
    ];

    const rows = ref([]);
    let Data = ref({
      invoiceNo: "",
      //customer
      name: "",
      phone: "",
      address: "",
      email: "",
      //gst
      gst: true,
      gstNo: "",
      gstAddress: "",
      gstEmail: "",
      gstName: "",
      //product
      productName: "",
      productPrice: "",
      productBasePrice: "",
      productQuantity: "",
      productSerialNo: "",
      //payment
      paymentType: "",
      paymentDetails: "",
      paidAmount: "",
      deliveredBy: "",
      deliveryStatus: "",
    });
    console.log("invoice", Data.value);
    let termsAndConditions = ref([
      {
        title: "Transport",
        description:
          "TRANSPORT / LIFTING CHARGES WILL BE BORN BY THE CUSTOMER.",
      },
      {
        title: "Plumber",
        description:
          " PLUMBER SHOULD BE PROVIDED AT THE TIME OF INSTALLATION (OR) OUR PLUMBERS MIGHT ATTRACT PLUMBING CHARGES.",
      },
      {
        title: "Plumbing Material",
        description:
          "PLUMBING MATERIALS / ELECTRICAL CONNECTION BY CUSTOMER, Plumbing MATERIAL.",
      },
      {
        title: "Electric Socket If purchased Auto Softener",
        description:
          "ONE ELECTRIC SOCKET HAS TO BE PROVIDED AT THE TIME OF INSTALLATION, IF PRESSURE BOOSTER THEN TWO ELECTRIC SOCKETS.",
      },
      {
        title: "Delivery and Installation policy",
        description:
          "DELIVERY / INSTALLATION COMPLETED WITHIN 7 WORKING DAYS. ",
      },
      { title: "Advance policy", description: "100% ADVANCE ALONG WITH PO." },
      {
        title: "Work Monitoring",
        description: "PLUMBING WORK MONITORING WILL BE DONE BY OUR ENGINEERS",
      },
    ]);

    //functions
    const getData = onBeforeMount(() => {
      Loading.value = true;
      individualInvoice(match).then((data) => {
        let apiData = data.data;
        Data.value.invoiceNo = apiData[0].invoiceSerialNo;
        Data.value.name = apiData[0].name;
        Data.value.address = apiData[0].address;
        Data.value.phone = apiData[0].phone;
        Data.value.email = apiData[0].email;
        gst.value = apiData[0].gst;
        Data.value.gstName = apiData[0].gstName;
        Data.value.gstAddress = apiData[0].gstAddress;
        Data.value.gstNo = apiData[0].gstNo;
        Data.value.paidAmount = apiData[0].paidAmount;
        Data.value.paymentDetails = apiData[0].paymentDetails;
        Data.value.paymentType = apiData[0].paymentType;
        Data.value.productName = apiData[0].productName;
        Data.value.productPrice = apiData[0].productPrice;
        Data.value.productBasePrice = Math.floor(
          apiData[0].paidAmount * 0.8474594
        );
        Data.value.productQuantity = apiData[0].productQuantity;
        Data.value.productSerialNo = apiData[0].productSerialNo;
        date.value = apiData[0].date;
        Loading.value = false;
        rows.value.push({
          name: apiData[0].productName,
          calories: apiData[0].productQuantity,
          basePrice: `₹ ${Math.floor(apiData[0].paidAmount * 0.8474594)}/-`,
          gst: `₹ ${gstValueGenerate()} /-`,
          carbs: `₹ ${apiData[0].productPrice} /-`,
        });
      });
    });

    const gstValueGenerate = () => {
      let basePrice = Math.floor(Data.value.paidAmount * 0.8474594);
      let gst = Math.floor(basePrice * 0.18);
      return gst;
    };

    const invoicePrint = () => {
      window.print();
    };
    return {
      //variables
      match,
      termsAndConditions,
      basePrice,
      Data,
      gst,
      date,
      Loading,
      columns,
      rows,
      //functions
      invoicePrint,
      getData,
      gstValueGenerate,
    };
  },
};
</script>

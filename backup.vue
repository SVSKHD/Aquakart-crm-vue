<!-- <template>
  <div class="q-pa-md">
    <div class="row">
      <div
        v-if="editStatus"
        class="col-lg-4 col-md-4 col-xs-12 col-sm-12 q-pa-sm"
      >
        <q-card>
          <q-item>
            <q-item-section>
              <q-toolbar-title class="text-center">Update-Form</q-toolbar-title>
            </q-item-section>
          </q-item>
          <q-card-section>
            <div class="text-h5">Customer Details</div>
            <hr />
            <div class="row">
              <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                <q-input v-model="invoiceUpdate.name" outlined dense label="Customer Name ">
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                <q-input v-model="invoiceUpdate.phone" outlined dense maxlength="10" label="Customer Phone">
                  <template v-slot:prepend>
                    <q-icon name="phone" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  outlined
                  dense
                  v-model="invoiceUpdate.address"
                  label="Customer Address"
                  type="textarea"
                >
                  <template v-slot:prepend>
                    <q-icon name="add_location_alt" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                <q-input v-mdeol="invoiceUpdate.email" outlined dense label="Customer Email">
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
              </div>
            </div>
            <q-toggle
              name="music_active"
              v-model="gst"
              label="If GST Required"
            />

            <div v-if="gst">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                  <q-input v-model="invoiceUpdate.gstName" outlined dense label="Customer GST Name">
                    <template v-slot:prepend>
                      <q-icon name="text_snippet" />
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                  <q-input v-model="invoiceUpdate.gstNo" outlined dense label="Customer GST NO">
                    <template v-slot:prepend>
                      <q-icon name="confirmation_number" />
                    </template>
                  </q-input>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                  <q-input
                    outlined
                    dense
                    v-model="invoiceUpdate.gstAddress"
                    label="Customer GST Address"
                    type="textarea"
                  >
                    <template v-slot:prepend>
                      <q-icon name="add_location_alt" />
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                  <q-input v-mdeol="invoiceUpdate.email" outlined dense label="Customer Email">
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
            <div v-else class="q-pa-md"></div>

            <div class="text-h5">Product Details</div>
            <hr />
            <div class="row">
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input v-model="invoiceUpdate.productName" outlined dense label="Product Name ">
                  <template v-slot:prepend>
                    <q-icon name="shopping_bag" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input v-model="invoiceUpdate.productQuantity" outlined dense label="Product Quantity">
                  <template v-slot:prepend>
                    <q-icon name=" format_list_numbered" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input v-model="invoiceUpdate.productPrice" outlined dense label="Product Price">
                  <template v-slot:prepend>
                    <q-icon name="price_change" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input v-model="invoiceUpdate.productSerialNo" outlined dense label="Product Serial No">
                  <template v-slot:prepend>
                    <q-icon name="confirmation_number" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="text-h5">Payment Details</div>
            <hr />
            <div class="row">
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceUpdate.paidAmount"
                  outlined
                  dense
                  label="Paid Amount"
                >
                  <template v-slot:prepend>
                    <q-icon name="money" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceUpdate.paymentType"
                  outlined
                  dense
                  label="Payment Type"
                >
                  <template v-slot:prepend>
                    <q-icon name="add_task" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceUpdate.paymentDetails"
                  outlined
                  dense
                  label="Payment Details"
                >
                  <template v-slot:prepend>
                    <q-icon name="document_scanner" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceUpdate.deliveredBy"
                  outlined
                  dense
                  label="Delivered By"
                >
                  <template v-slot:prepend>
                    <q-icon name="delivery_dining" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
              <q-select dense outlined v-model="invoiceUpdate.deliveryStatus" :options="options" label="delivery status" />
              </div>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn
              style="background: #243a73; color: aliceblue"
              flat
              label="Update"
            />
          </q-card-actions>
        </q-card>
      </div>
      <div v-else class="col-lg-4 col-md-4 col-xs-12 col-sm-12 q-pa-sm">
        <q-card>
          <q-item>
            <q-item-section>
              <q-toolbar-title class="text-center"
                >Invoice-Form</q-toolbar-title
              >
            </q-item-section>
          </q-item>
          <q-card-section>
            <div class="text-h5">Customer Details</div>
            <hr />
            <div class="row">
              <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.name"
                  outlined
                  dense
                  label="Customer Name "
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.phone"
                  outlined
                  dense
                  maxlength="10"
                  label="Customer Phone"
                >
                  <template v-slot:prepend>
                    <q-icon name="phone" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  outlined
                  dense
                  v-model="invoiceCreate.address"
                  label="Customer Address"
                  type="textarea"
                >
                  <template v-slot:prepend>
                    <q-icon name="add_location_alt" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.email"
                  outlined
                  dense
                  label="Customer Email"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
              </div>
            </div>
            <q-toggle
              name="music_active"
              v-model="gst"
              label="If GST Required"
            />

            <div v-if="gst">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                  <q-input
                    v-model="invoiceCreate.gstName"
                    outlined
                    dense
                    label="Customer GST Name"
                  >
                    <template v-slot:prepend>
                      <q-icon name="text_snippet" />
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                  <q-input
                    v-model="invoiceCreate.gstNo"
                    outlined
                    dense
                    label="Customer GST NO"
                  >
                    <template v-slot:prepend>
                      <q-icon name=" confirmation_number" />
                    </template>
                  </q-input>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                  <q-input
                    outlined
                    v-model="invoiceCreate.gstAddress"
                    dense
                    label="Customer GST Address"
                    type="textarea"
                  >
                    <template v-slot:prepend>
                      <q-icon name="add_location_alt" />
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 q-pa-md">
                  <q-input
                    v-model="invoiceCreate.email"
                    outlined
                    dense
                    label="Customer Email"
                  >
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
            <div v-else class="q-pa-md"></div>

            <div class="text-h5">Product Details</div>
            <hr />
            <div class="row">
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.productName"
                  outlined
                  dense
                  label="Product Name "
                >
                  <template v-slot:prepend>
                    <q-icon name="shopping_bag" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.productQuantity"
                  outlined
                  dense
                  label="Product Quantity"
                >
                  <template v-slot:prepend>
                    <q-icon name=" format_list_numbered" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.productPrice"
                  outlined
                  dense
                  label="Product Price"
                >
                  <template v-slot:prepend>
                    <q-icon name="price_change" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.productSerialNo"
                  outlined
                  dense
                  label="Product Serial No"
                >
                  <template v-slot:prepend>
                    <q-icon name="confirmation_number" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="text-h5">Payment Details</div>
            <hr />
            <div class="row">
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.paidAmount"
                  outlined
                  dense
                  label="Paid Amount"
                >
                  <template v-slot:prepend>
                    <q-icon name="money" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.paymentType"
                  outlined
                  dense
                  label="Payment Type"
                >
                  <template v-slot:prepend>
                    <q-icon name="add_task" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.paymentDetails"
                  outlined
                  dense
                  label="Payment Details"
                >
                  <template v-slot:prepend>
                    <q-icon name="document_scanner" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
                <q-input
                  v-model="invoiceCreate.deliveredBy"
                  outlined
                  dense
                  label="Delivered By"
                >
                  <template v-slot:prepend>
                    <q-icon name="delivery_dining" />
                  </template>
                </q-input>
              </div>
              <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12 q-pa-md">
              <q-select dense outlined v-model="invoiceCreate.deliveryStatus" :options="options" label="delivery status" />
              </div>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn
              style="background: #243a73; color: aliceblue"
              @click="SubmitInvoice"
              flat
              label="submit"
            />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12 q-pa-sm">
        <div>
          <q-card :style="invoiceBorder">
            <q-card-section
              :class="invoiceStatusColor"
              style="background-color: #243a73"
            >
              <div class="text-h6">{{ invoiceStatus }}</div>
            </q-card-section>
            <q-card-section>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <q-img
                    src="../../assets/logo.png"
                    style="height: 140px; max-width: 150px"
                  />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div class="q-pa-md">
                    <div class="text-h6 text-right" style="color: #243a73">
                      Date : {{ date }}/{{ month }}/{{ year }}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <!-- customer and gst details -->
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                  <div class="text-h4">Customer Details</div>
                  <br />
                  <div class="q-pa-sm text-center">
                    <div class="text-h6">name : {{ invoiceCreate.name }}</div>
                    <div class="text-subtext">
                      Address : {{ invoiceCreate.address }}
                    </div>
                    <div class="text-subtext2">
                      Phone : {{ invoiceCreate.phone }}
                    </div>
                  </div>
                </div>
                <div
                  v-if="gst"
                  class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center"
                >
                  <div class="text-h4 text-center">Business Details</div>
                  <br />
                  <div class="q-pa-sm text-center">
                    <div class="text-h6">
                      Business Name: {{ invoiceCreate.gstName }}
                    </div>
                    <div class="text-h6">
                      Business No: {{ invoiceCreate.gstNo }}
                    </div>
                    <div class="text-subtext">
                      Business Address : {{ invoiceCreate.gstAddress }}
                    </div>
                    <div class="text-subtext2">
                      Business Phone : {{ invoiceCreate.phone }}
                    </div>
                  </div>
                </div>
                <div
                  v-else
                  class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center"
                >
                  <div class="text-h4">No GST Details yet</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-2 col-lg-3 col-sm-12 col-xs-12 text-center">
                 <b> Product-Name</b>
                </div>
                <div class="col-md-2 col-lg-3 col-sm-12 col-xs-12 text-center">
                  <b>Product-Quantity</b>
                </div>
                <div class="col-md-2 col-lg-3 col-sm-12 col-xs-12 text-center">
                 <b> GST </b>
                </div>
                 <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center">
                  <b>Product-Price</b>
                </div>
              </div>
              <hr />
               <div class="row">
                <div class="col-md-2 col-lg-3 col-sm-12 col-xs-12 text-center">
                 <b>{{invoiceCreate.productName}}</b>
                </div>
                <div class="col-md-2 col-lg-3 col-sm-12 col-xs-12 text-center">
                  <b>{{invoiceCreate.productQuantity}}</b>
                </div>
                <div class="col-md-2 col-lg-3 col-sm-12 col-xs-12 text-center">
                 <b>{{gstValueGenerate()}}</b>
                </div>
                 <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center">
                  <b class="text-green">₹  {{invoiceCreate.productPrice}} /-</b>
                </div>
              </div>
              <hr/>
              <div class="text-h6 text-center">Serials : {{invoiceCreate.productSerialNo}}</div>
              <hr/>
              <div>
                <div class="text-h6 text-red">Terms & Conditions</div>
                 <q-list light bordered separator dense padding class="rounded-borders">
                  <q-item v-for="item in termsAndConditions" :key="item" clickable v-ripple>
                    <q-item-section><b class="text-red">{{item.title}}</b></q-item-section>
                     <q-item-section><b>{{item.description}}</b></q-item-section>
                  </q-item>
                </q-list>
              </div>
              <br/>
               <div>
                <div class="text-h6 text-indigo-9">Customer Care</div>
              </div>
              <hr />
              <div class="row">
                <div
                  class="col-md-6 col-lg-6 col-sm-12 col-xs-12 text-left"
                >
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
        <br />
        <div>
          <q-card>
            <!-- tabs -->
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="mails" label="Invoices" />
              <q-tab name="alarms" label="Gst Invoices" />
            </q-tabs>

            <q-separator />
            <!-- tab panels -->
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                <q-table title="Invoices" />
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <q-table title="GST Invoices" />
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref ,watch, onMounted } from "vue";
import InvoiceOperations from "./invoice";
import NotificationHelper from "@/helpers/NotificationHelper";
export default {
  setup() {
    let invoiceStatus = ref("Invoice Preview");
    let invoiceStatusColor = ref("text-white text-center");
    let invoiceBorder = ref(
      "border-color: #243a73;border-style: solid; border-width:5px;border-radius: 0px!important;"
    );
    let invoiceSubmit = ref(false);
    let gst = ref(false);
    let tab = ref("mails");
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let editStatus = ref(false);
    const { createInvoice } = InvoiceOperations();

    watch(gst,()=>{
      if(gst.value === true){
        invoiceCreate.value.gst=true
      }else{
        invoiceCreate.value.gst=false
      }
    })

    let options = ref(["delivered" , "not yet delivered"])

    let invoiceCreate = ref({
      //customer
      name: "",
      phone: "",
      address: "",
      email: "",
      //gst
      gst: "",
      gstNo: "",
      gstAddress: "",
      gstEmail: "",
      gstName: "",
      //product
      productName: "",
      productPrice: "",
      productQuantity: "",
      productSerialNo: "",
      //payment
      paymentType: "",
      paymentDetails: "",
      paidAmount: "",
      deliveredBy: "",
      deliveryStatus: "",
    });

     let invoiceUpdate = ref({
      //customer
      name: "",
      phone: "",
      address: "",
      email: "",
      //gst
      gst: "",
      gstNo: "",
      gstAddress: "",
      gstEmail: "",
      gstName: "",
      //product
      productName: "",
      productPrice: "",
      productQuantity: "",
      productSerialNo: "",
      //payment
      paymentType: "",
      paymentDetails: "",
      paidAmount: "",
      deliveredBy: "",
      deliveryStatus: "",
    });

    let termsAndConditions = ref([
     {title:"Transport" , description:"TRANSPORT/LIFTING CHARGES WILL BE BORN BY THE CUSTOMER.(1000/-)"},
     {title:"Plumber" , description:" PLUMBER SHOULD BE PROVIDED AT THE TIME OF INSTALLATION (OR) OUR PLUMBERS MIGHT ATTRACT PLUMBING CHARGES. (1500-3500/-)"},
     {title:"Plumbing Material" , description:"PLUMBING MATERIALS / ELECTRICAL CONNECTION BY CUSTOMER, Plumbing MATERIAL(5000-6000/-) Approx."},
     {title:"Electric Socket If purchased Auto Softener" , description:"ONE ELECTRIC SOCKET HAS TO BE PROVIDED AT THE TIME OF INSTALLATION, IF PRESSURE BOOSTER THEN TWO ELECTRIC SOCKETS."},
     {title:"Delivery and Installation policy" , description:"DELIVERY / INSTALLATION COMPLETED WITHIN 7 WORKING DAYS. "},
     {title:"Advance policy" , description:"100% ADVANCE ALONG WITH PO."},
     {title:"Work Monitoring" , description:"PLUMBING WORK MONITORING WILL BE DONE BY OUR ENGINEERS"}
    ])

    const SubmitInvoice = () => {
      console.log("invoice", invoiceCreate.value);
      createInvoice(invoiceCreate.value).then(() => {
        invoiceSubmit.value = true;
        if (invoiceSubmit.value === true) {
          invoiceStatus.value = "Succesfully Created";
          invoiceStatusColor.value = "bg-green-8 text-white text-center";
          invoiceBorder.value =
            "border-color: #388e3c;border-style:solid; border-width:5px;border-radius: 0px!important;";
        NotificationHelper.createSuccessNotification("Succesfully Invoice Created") 
        gstValueGenerate()
        }
      })
      .catch(()=>{
        invoiceSubmit.value = false;
         if (invoiceSubmit.value === false) {
          invoiceStatus.value = "Please Try Again";
          invoiceStatusColor.value = "bg-red-8 text-white text-center";
          invoiceBorder.value =
            "border-color: #b71c1c;border-style:solid; border-width:5px;border-radius: 0px!important;";
        NotificationHelper.createErrorNotification("!Something Went Wrong , Please try again") 
        }
      })
    };

   const gstValueGenerate = onMounted(() => {
      let price = invoiceCreate.value.price;
      let rawValue = price - Math.round(price * 0.18);
      let gstPrice = Math.round(rawValue * 0.18);
      return gstPrice;
    })

    const editStatusButton = () => {
      editStatus.value = true;
    };

    return {
      //variables
      gst,
      tab,
      invoiceStatus,
      invoiceBorder,
      invoiceStatusColor,
      invoiceCreate,
      invoiceUpdate,
      options,
      date,
      year,
      month,
      editStatus,
      termsAndConditions,
      //functions
      SubmitInvoice,
      gstValueGenerate,
      editStatusButton,
    };
  },
};
</script>

<style>
.custbtn {
  background-color: #243a73 !important;
}
.cardborder {
  border-color: #243a73;
  border-style: groove;
  border-radius: 0px !important;
}
</style> -->



<template>
  <div class="row">
    <div class="col-md-6 col-lg-6 col-xs-12 col-xs-12">
      <div class="row">
      <template v-for="(item , index) in menu" :key="index">
      <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12 q-pa-xs">
      <q-card :to="item.path"  class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <div class="q-pa-xs">
            <q-icon style="color:#243a73" size="3rem" :name="item.icon" />
            </div>
          </q-card-section>

          <q-separator vertical />

          <q-card-section>
            <div class="q-pa-md">
            <b>{{item.name}}</b>
            </div>  
            
          </q-card-section>
          
        </q-card-section>
        <q-separator />
        <q-card-actions>
   <q-btn :to="item.path" flat icon="open_in_new" label="navigate"/>    
          </q-card-actions>
      </q-card>
      </div>
      </template>
    </div>
    </div>
    <div class="col-md-6 col-lg-6 col-xs-12 col-xs-12"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {},
  setup() {
    let menu = ref([
      { name: "Invoices", path: "/invoices", icon: "text_snippet" },
      { name: "Quotations", path: "/quotations", icon: "inventory" },
      { name: "Contacts", path: "/contacts", icon: "people" },
      { name: "reminders", path: "/reminders", icon: "task" },
    ]);
    return {
      menu,
    };
  },
};
</script>

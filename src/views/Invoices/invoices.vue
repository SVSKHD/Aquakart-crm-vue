<template>
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
                <q-input
                  v-model="invoiceUpdate.name"
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
                  v-model="invoiceUpdate.phone"
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
                <q-input
                  v-model="invoiceUpdate.email"
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
                    v-model="invoiceUpdate.gstName"
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
                    v-model="invoiceUpdate.gstNo"
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
                    v-model="invoiceUpdate.gstAddress"
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
                    v-model="invoiceUpdate.email"
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
                  v-model="invoiceUpdate.productName"
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
                  v-model="invoiceUpdate.productQuantity"
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
                  v-model="invoiceUpdate.productPrice"
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
                  v-model="invoiceUpdate.productSerialNo"
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
                <q-select
                  dense
                  outlined
                  v-model="invoiceUpdate.deliveryStatus"
                  :options="options"
                  label="delivery status"
                />
              </div>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn
              style="background: #243a73; color: aliceblue"
              @click="updateInvoiceSubmit"
              flat
              label="submit"
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
                <q-select
                  dense
                  outlined
                  v-model="invoiceCreate.deliveryStatus"
                  :options="options"
                  label="delivery status"
                />
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
                  <div class="text-h4">No Customer GST Details yet</div>
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
                  <b>{{ invoiceCreate.productName }}</b>
                </div>
                <div class="col-md-2 col-lg-3 col-sm-12 col-xs-12 text-center">
                  <b>{{ invoiceCreate.productQuantity }}</b>
                </div>
                <div class="col-md-2 col-lg-3 col-sm-12 col-xs-12 text-center">
                  <b>{{ gstValueGenerate() }}</b>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center">
                  <b class="text-green"
                    >₹ {{ invoiceCreate.productPrice }} /-</b
                  >
                </div>
              </div>
              <hr />
              <div class="text-h6 text-center">
                Serials : {{ invoiceCreate.productSerialNo }}
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
              <br />
              <div>
                <div class="text-h6 text-indigo-9">Customer Care</div>
              </div>
              <hr />
              <div class="row">
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
        <br />
        <div>
          <q-card>
            <!-- tabs -->
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              style="background-color: #243a73"
              active-color="white"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="invoices" label="Invoices" />
              <q-tab name="gstinvoices" label="Gst Invoices" />
            </q-tabs>

            <q-separator />
            <!-- tab panels -->
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="invoices">
                <!-- new table -->
                <div v-if="invoicesLoad">
                <InvoiceLoader/>
                </div>
                <div v-else>
                <q-table
                  title="Invoices"
                  :rows="rows"
                  :columns="columns"
                  row-key="name"
                  :filter="search"
                  :loading="Loading"
                >
                  <template v-slot:top-right>
                    <q-input
                      outlined
                      dense
                      debounce="300"
                      v-model="search"
                      placeholder="Search"
                    >
                      <template v-slot:append>
                        <q-icon name="search" />
                      </template>
                    </q-input>
                  </template>
                  <template v-slot:header="props">
                    <q-tr :props="props">
                      <q-th auto-width />
                      <q-th
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.label }}
                      </q-th>
                    </q-tr>
                  </template>

                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td auto-width>
                        <q-btn
                          flat
                          dense
                          @click="props.expand = !props.expand"
                          :icon="props.expand ? 'expand_more' : 'expand_less'"
                        />
                      </q-td>
                      <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.value }}
                      </q-td>
                    </q-tr>
                    <q-tr v-show="props.expand" :props="props">
                      <q-td colspan="100%">
                        <div class="text-left">
                          <q-btn-group outline dense>
                            <q-btn
                              @click="editStatusButton(props.row.name)"
                              outline
                              color="info"
                              icon="edit"
                            />
                            <q-btn
                              outline
                              @click="openInvoice(props.row.name)"
                              color="green"
                              icon="open_in_new"
                            />
                            <q-btn outline color="red" icon="delete" @click="deleteInvoice(props.row.name)" />
                            <q-btn outline color="teal-10" icon="fab fa-whatsapp" @click="whatsAppUrl(props.row.name , props.row.phone , props.row.serial)" />
                          </q-btn-group>
                        </div>
                      </q-td>
                    </q-tr>
                  </template>
                </q-table> 
                </div>
              </q-tab-panel>

              <q-tab-panel name="gstinvoices">
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
import { ref, watch, onMounted, onBeforeMount } from "vue";
import InvoiceOperations from "./invoice";
import NotificationHelper from "@/helpers/NotificationHelper";
import { useRouter } from "vue-router";
import InvoiceLoader from "../../components/loaders/invoiceLoader.vue";

export default {
  components:{
    InvoiceLoader
},
  setup() {
    let invoiceStatus = ref("Invoice Preview");
    let invoiceStatusColor = ref("text-white text-center");
    let invoiceBorder = ref(
      "border-color: #243a73;border-style: solid; border-width:5px;border-radius: 0px!important;"
    );
    let Loading = ref(false);
    let invoiceSubmit = ref(false);
    let gst = ref(false);
    let tab = ref("invoices");
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let editStatus = ref(false);
    let invoicesLoad = ref(false)
    let link = `https://aquakart.store/liveinvoice`;
    let search = ref("")
    let reload = ref(false)

    const Router = useRouter();
    const { createInvoice, loadInvoices, updateInvoice, individualInvoice , removeInvoice } =
      InvoiceOperations();

    const whatsAppUrl = (url , phone ) => {
      console.log(`${link}/${url}` , `${phone}`);
      
    };

    

    watch(gst, () => {
      if (gst.value === true) {
        invoiceCreate.value.gst = true;
      } else {
        invoiceCreate.value.gst = false;
      }
    });

    let options = ref(["delivered", "not yet delivered"]);

    let invoiceCreate = ref({
      //customer
      name: "",
      phone: "",
      address: "",
      email: "",
      //gst
      gst: false,
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

    //filter in table
    let filter = ref("");

    //table data
    let columns = ref([
      {
        name: "name",
        required: true,
        label: "Invoice Serial",
        align: "left",
        field: (row) => row.serial,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "name",
        required: true,
        label: "Customer Name",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "calories",
        align: "center",
        label: "Purchased Product",
        field: "product",
        sortable: true,
      },
      {
        name: "sodium",
        align: "center",
        label: "productQuantity",
        field: "quantity",
      },
      { name: "protein", align: "center", label: "phone", field: "phone" },
      { name: "carbs", label: "status", field: "paymentStatus" },
      { name: "fat", label: "Price", field: "price", sortable: true },
      { name: "sodium", label: "Delivered", field: "delivered" },
    ]);
    let rows = ref([]);

    const openInvoice = (name) => {
      Router.push(`/liveinvoice/${name}`)
      console.log("name" , name)
      
    };

    const invoicesLoadTable = onBeforeMount(() => {
      loadInvoices().then((data) => {
        let apidata = data.data;
        apidata.map((data) => {
          rows.value.push({
            name: data.name,
            serial:data.invoiceSerialNo,
            product: data.productName,
            price: data.productPrice,
            phone: data.phone,
            paymentStatus: data.paymentDetails,
            quantity: data.productQuantity,
            delivered: data.deliveryStatus,
          });
        });
      });
    });

    let termsAndConditions = ref([
      {
        title: "Transport",
        description:
          "TRANSPORT/LIFTING CHARGES WILL BE BORN BY THE CUSTOMER.(1000/-)",
      },
      {
        title: "Plumber",
        description:
          " PLUMBER SHOULD BE PROVIDED AT THE TIME OF INSTALLATION (OR) OUR PLUMBERS MIGHT ATTRACT PLUMBING CHARGES. (1500-3500/-)",
      },
      {
        title: "Plumbing Material",
        description:
          "PLUMBING MATERIALS / ELECTRICAL CONNECTION BY CUSTOMER, Plumbing MATERIAL(5000-6000/-) Approx.",
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

    watch(reload , ()=>{
      if(reload.value===true){
        invoicesLoad.value=true
        loadInvoices().then((data)=>{
          let newData = []
            rows.value=newData
           let apidata = data.data;
        apidata.map((data) => {
          rows.value.push({
            name: data.name,
            product: data.productName,
            price: data.productPrice,
            phone: data.phone,
            paymentStatus: data.paymentDetails,
            quantity: data.productQuantity,
            delivered: data.deliveryStatus,
          });
        });
          invoicesLoad.value=false
        })
      }
    })

    const SubmitInvoice = () => {
      createInvoice(invoiceCreate.value)
        .then(() => {
          invoiceSubmit.value = true;
          if (invoiceSubmit.value === true) {
            invoiceStatus.value = "Succesfully Created";
            invoiceStatusColor.value = "bg-green-8 text-white text-center";
            invoiceBorder.value =
              "border-color: #388e3c;border-style:solid; border-width:5px;border-radius: 0px!important;";
            NotificationHelper.createSuccessNotification(
              "Succesfully Invoice Created"
            );
            gstValueGenerate();
          }
        })
        .catch(() => {
          invoiceSubmit.value = false;
          if (invoiceSubmit.value === false) {
            invoiceStatus.value = "Please Try Again";
            invoiceStatusColor.value = "bg-red-8 text-white text-center";
            invoiceBorder.value =
              "border-color: #b71c1c;border-style:solid; border-width:5px;border-radius: 0px!important;";
            NotificationHelper.createErrorNotification(
              "!Something Went Wrong , Please try again"
            );
          }
        });
    };


    watch(invoiceSubmit,()=>{
      if(invoiceSubmit.value===true){
        invoicesLoad.value=true
        loadInvoices().then((data)=>{
          let newData = []
            rows.value=newData
           let apidata = data.data;
        apidata.map((data) => {
          rows.value.push({
            name: data.name,
            product: data.productName,
            price: data.productPrice,
            phone: data.phone,
            paymentStatus: data.paymentDetails,
            quantity: data.productQuantity,
            delivered: data.deliveryStatus,
          });
        });
          invoicesLoad.value=false
        })
      }
    })

    const updateInvoiceSubmit = () => {
      updateInvoice(updateInvoiceName.value, invoiceUpdate.value)
        .then(() => {
          Loading.value = true;
          NotificationHelper.createSuccessNotification("Successfully Edited");
          Loading.value = false;
        })
        .catch((err) => {
          NotificationHelper.createErrorNotification(
            `Something Problem in updating the invoice ${err}`
          );
        });
    };

    const deleteInvoice = (name) =>{
      removeInvoice(name).then(()=>{
        reload.value=true
        NotificationHelper.createSuccessNotification("Succesfully deleted Invoice")
      })
    } 

    const gstValueGenerate = onMounted(() => {
      let price = invoiceCreate.value.price;
      let rawValue = price - Math.round(price * 0.18);
      let gstPrice = Math.round(rawValue * 0.18);
      return gstPrice;
    });

    const editStatusButton = (name) => {
      editStatus.value = true;
      individualInvoice(name).then((data) => {
        let apidata = data.data;
        apidata.map((info) => {
          updateInvoiceName.value = info.name;
          invoiceUpdate.value.name = info.name;
          invoiceUpdate.value.phone = info.phone;
          invoiceUpdate.value.address = info.address;
          invoiceUpdate.value.email = info.email;
          invoiceUpdate.value.gst = info.gst;
          invoiceUpdate.value.gstAddress = info.gstAddress;
          invoiceUpdate.value.gstName = info.gstName;
          invoiceUpdate.value.productName = info.productName;
          invoiceUpdate.value.productPrice = info.productPrice;
          invoiceUpdate.value.productQuantity = info.productQuantity;
          invoiceUpdate.value.productSerialNo = info.productSerialNo;
          invoiceUpdate.value.paymentType = info.paymentType;
          invoiceUpdate.value.paymentDetails = info.paymentDetails;
          invoiceUpdate.value.paidAmount = info.paidAmount;
          invoiceUpdate.value.deliveredBy = info.deliveredBy;
          invoiceUpdate.value.deliveryStatus = info.deliveryStatus;
        });
      });
    };

    let updateInvoiceName = ref("");

    return {
      //variables
      gst,
      tab,
      filter,
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
      rows,
      columns,
      updateInvoiceName,
      link,
      Loading,
      search,
      invoicesLoad,
      reload,
      //functions
      whatsAppUrl,
      SubmitInvoice,
      gstValueGenerate,
      editStatusButton,
      invoicesLoadTable,
      openInvoice,
      updateInvoiceSubmit,
      deleteInvoice
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
.linkstyle {
  text-decoration: none;
}
</style>

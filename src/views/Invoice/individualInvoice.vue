<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white q-my-md shadow-2">
      <q-btn stretch flat icon="home" to="/" />
      <q-space />
      <q-separator dark vertical />
      <q-btn stretch flat label="Print" />
      <q-separator dark vertical />
      <q-btn stretch flat label="Download" />
    </q-toolbar>

    <div class="q-pa-md">
      <br/>
      <div>
        <q-card>
          <q-card-section>
            <div ref="content">  
            <div class="row justify-evenly">
              <div class="col-5">
                  <h5>Date : </h5>
              </div>
              <div class="col-5">
                  <h5>Invoice No : -- {{userData.invoiceNo}} </h5>
              </div>
            </div>
             
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import {ref ,onBeforeMount} from "vue"
//import { jsPDF } from "jspdf";
import { useRoute } from "vue-router";
import invoiceCrud from "./composables/Invoice"
export default {
  setup() {
    const route = useRoute();
    let data = route.params.name;
    let userData = ref({
        invoiceNo:"",
        date:"",
        name:"",
    })
    const {filterInvoice} = invoiceCrud()
    const loadIndividualInvoice = onBeforeMount(()=>{
      filterInvoice(data).then(item=>{
          const dataHold = item.data
          dataHold.map(itemData=>{
             userData.value.invoiceNo=itemData.InvoiceNo
             userData.value.name = itemData.name
          })
       })
    })
    console.log( "userData" , userData.value)
    return {
      //variables
      data,
      userData,
      //functions
      loadIndividualInvoice
    };
  },
};
</script>

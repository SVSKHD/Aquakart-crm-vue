<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-lg-2 col-md-2 col-xs-12 col-sm-12"></div>
    
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
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                  <div class="q-pa-md">
                    <div class="text-h6" style="color: #243a73">
                      Date : {{ date }}/{{ month }}/{{ year }}
                    </div>
                  </div>
                </div>
              </div>
              <br/>
                <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                  <div class="text-h4">Customer Details</div>
                  <br />
                  <div class="q-pa-sm text-center">
                    <div class="text-h6">name : {{Data.name}}</div>
                    <div class="text-subtext">
                      Address : 
                    </div>
                    <div class="text-subtext2">
                      Phone :
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
                      Business Name: 
                    </div>
                    <div class="text-h6">
                      Business No: 
                    </div>
                    <div class="text-subtext">
                      Business Address : 
                    </div>
                    <div class="text-subtext2">
                      Business Phone : 
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
                 <!-- <b>{{invoiceCreate.productName}}</b> -->
                </div>
                <div class="col-md-2 col-lg-3 col-sm-12 col-xs-12 text-center">
                  <!-- <b>{{invoiceCreate.productQuantity}}</b> -->
                </div>
                <div class="col-md-2 col-lg-3 col-sm-12 col-xs-12 text-center">
                 <!-- <b>{{gstValueGenerate()}}</b> -->
                </div>
                 <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center">
                  <!-- <b class="text-green">₹  {{invoiceCreate.productPrice}} /-</b> -->
                </div>
              </div>
              <hr/>
              <!-- <div class="text-h6 text-center">Serials : {{invoiceCreate.productSerialNo}}</div> -->
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
            </q-card-section>
           </q-card>
      </div>
     
      <div class="col-lg-2 col-md-2 col-xs-12 col-sm-12">
        
      </div>
    </div>
  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue"
import {useRoute} from "vue-router"
import InvoiceOperations from "./invoice"
 export default {
    setup(){
        const Route = useRoute()
        const {individualInvoice} = InvoiceOperations()
        let match = Route.params.name
        let gst = ref(false)
        let Data = ref({
            name:"",
        })
        console.log("invoice" , Data.value)
        let termsAndConditions = ref([
     {title:"Transport" , description:"TRANSPORT/LIFTING CHARGES WILL BE BORN BY THE CUSTOMER.(1000/-)"},
     {title:"Plumber" , description:" PLUMBER SHOULD BE PROVIDED AT THE TIME OF INSTALLATION (OR) OUR PLUMBERS MIGHT ATTRACT PLUMBING CHARGES. (1500-3500/-)"},
     {title:"Plumbing Material" , description:"PLUMBING MATERIALS / ELECTRICAL CONNECTION BY CUSTOMER, Plumbing MATERIAL(5000-6000/-) Approx."},
     {title:"Electric Socket If purchased Auto Softener" , description:"ONE ELECTRIC SOCKET HAS TO BE PROVIDED AT THE TIME OF INSTALLATION, IF PRESSURE BOOSTER THEN TWO ELECTRIC SOCKETS."},
     {title:"Delivery and Installation policy" , description:"DELIVERY / INSTALLATION COMPLETED WITHIN 7 WORKING DAYS. "},
     {title:"Advance policy" , description:"100% ADVANCE ALONG WITH PO."},
     {title:"Work Monitoring" , description:"PLUMBING WORK MONITORING WILL BE DONE BY OUR ENGINEERS"}
    ])

    //functions
    const getData = onBeforeMount(()=>{
        individualInvoice(match).then((data)=>{
            let apiData = data.data
            Data.value.name = apiData[0].name
            console.log("data" , Data.value)
        })
    })
    const invoicePrint = () =>{
        window.print()
    }
        return{
          //variables
          match,
          gst,
          termsAndConditions,
          Data,
          //functions
          invoicePrint,
          getData
        }
    }
 }
</script>

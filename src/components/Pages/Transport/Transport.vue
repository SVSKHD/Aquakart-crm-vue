<template>
<div class="row">
    <div class="col-md-6 col-lg-6 col-xs-12 col-xs-12">
        
        <div class="q-mb-md">
            <form>
                <q-card>
                    <q-card-section class="row">
                        <q-input class="col-md-2" outlined dense placeholder="area"/>
                         <q-input class="col-md-2" outlined dense placeholder="distance"/>
                          <q-input class="col-md-2" outlined dense placeholder="product delivered"/>
                    </q-card-section>
                </q-card>
            </form>
        </div>

        <q-table/>
    </div>
    <div class="col-md-6 col-lg-6 col-xs-12 col-xs-12"></div>
</div>
</template>

<script>
import {ref , onBeforeMount} from "vue"
import TransitServices from "@/apiServices/Transit/transit";
export default{
    setup(){
        //createTransit , updateTransit ,
        const {getTransits} = TransitServices()
        const transitData = ref([])
        //functions
        const TransitDataApi = onBeforeMount(() =>{
            getTransits()
        })
        return{
         transitData,
         //functions
         TransitDataApi
        }
    }
}
</script>
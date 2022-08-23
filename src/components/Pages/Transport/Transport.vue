<template>
<div class="row">
    <div class="col-md-6 col-lg-6 col-xs-12 col-xs-12">
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
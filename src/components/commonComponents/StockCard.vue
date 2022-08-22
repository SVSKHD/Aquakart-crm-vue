<template>
<q-card class="stock-card">
    <q-card-section>
        <div class="row">
            <div class="col-md-2 col-lg-2 col-xs-12 col-xs-12">
<div class="text-h6"> Stock : {{stock}}</div>
            </div>
            <div class="col-md-2 col-lg-2 col-xs-12 col-xs-12">
              <div class="text-h6"> kotak-Balance : {{kotakbalance}}</div>  
            </div>
            <div class="col-md-2 col-lg-2 col-xs-12 col-xs-12">
                <div class="text-h6"> icici-Balance : {{icicibalance}}</div>
            </div>
            <div class="col-md-2 col-lg-2 col-xs-12 col-xs-12">
                <div class="text-h6"> Total : {{total}}</div>
            </div>
            <div class="col-md-2 col-lg-2 col-xs-12 col-xs-12">
                <q-btn flat class="AQbtn" label="change details"/>
            </div>
        
        </div>
    </q-card-section>
</q-card>
</template>

<script>
export default{
    name:"StockCard",
    props:['stock', 'kotakbalance' , 'icicibalance' , 'total']    
}
</script>
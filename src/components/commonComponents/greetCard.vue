<template>
<q-card class="greet-card" flat bordered>
    <q-card-section>
        <div class="text-h5">{{name}}</div>
        <div class="text-subtext2">{{role}}</div>
    </q-card-section>
</q-card>
</template>
<script>
export default {
    name:"GreetCard",
    props:['name' , 'role'],
}
</script>
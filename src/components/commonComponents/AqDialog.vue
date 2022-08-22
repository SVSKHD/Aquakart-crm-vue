<template>
<q-dialog
v-model="dialog"
>
<q-card>
<q-card-section>
    <slot/>
</q-card-section>
</q-card>
</q-dialog>
</template>

<script>

import {ref} from "vue"
export default{
props:{},
setup(){
    let dialog = ref(false)
    return{
        dialog
    }
}
}
</script>
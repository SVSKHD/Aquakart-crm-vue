<template>
  <div class="q-pa-md">
    <q-card v-ripple :to="path" class="my-card header text-white q-hoverable">
      <q-card-section>
        <div class="text-center">
        <div class="text-h6">{{ name }}</div>
        <div class="text-h6">{{ phone }}</div>
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn @click="redirect(name)" flat color="#041562" icon="people" :to="path" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: "ContactCard",
  props: ["name", "phone" ,"icon", "path"],
setup(){
 const Route = useRouter()
 const redirect = (name) =>{
   Route.push(`/contact/${name}`)
 }
 return{
  redirect
 } 
}
}
</script>

<style scoped>
.header {
  background-color: #041562;
}
</style>

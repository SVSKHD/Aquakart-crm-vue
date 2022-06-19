<template>
  <div>
    <q-layout view="lHh Lpr fff">
      <q-page
        class="window-height window-width row justify-center items-center"
        style="background: #a5becc"
      >
        <div class="column q-pa-lg">
          <div class="row">
            <q-card class="shadow-24" style="width: 500px; height: 480px">
              <q-card-section class="text-center">
                <q-img src="../../assets/Default.png" class="imgalign" />
              </q-card-section>
              <q-card-section>
                <q-form class="q-px-sm q-pt-xl">
                  <q-input outlined dense label="email" v-model="data.email">
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                  <br />
                  <q-input outlined type="password" dense label="password"  v-model="data.password">
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                </q-form>
              </q-card-section>

              <q-card-actions class="q-px-lg">
                <q-btn
                  dense
                  style="background-color: #243a73"
                  @click="handleSubmit"
                  class="full-width text-white"
                  label="Login"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-layout>
  </div>
</template>
<script>
import { ref , onBeforeMount} from "vue";
import { useRouter } from "vue-router";
import AuthOperations from "./AuthOperations/Auth";
import Notifications from "@/helpers/NotificationHelper";
export default {
  setup() {
    let data = ref({
      email:"",
      password:""
    })
    const Router = useRouter()
    const {loginOperation} = AuthOperations()
    const handleSubmit = () =>{
     loginOperation(JSON.stringify(data.value)).then((response)=>{
     if(response){
       localStorage.setItem("user" , JSON.stringify(response))
       Router.push("/home")
       Notifications.createSuccessNotification("Siginin Success")
     }
     else{
       Notifications.createErrorNotification("Please try again")
     }
     })
    }
    const tokenCheck = onBeforeMount(()=>{
      let user = localStorage.getItem("user")
      if(user){
        Router.push("/home")
        Notifications.createInfoNotification("Already Logged In")
      }
    })
    return {
      //variables
      data,
      //functions
      handleSubmit,
      tokenCheck
    };
  },
};
</script>

<style>
.imgalign {
  height: 250px !important;
  width: 200px !important;
  text-align: center;
}
</style>

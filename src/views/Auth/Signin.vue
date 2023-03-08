<template>
  <div>
    <q-layout view="lHh Lpr fff">
      <q-page
        class="window-height window-width row justify-center items-center"
        style="background: #a5becc"
      >
        <div class="column q-pa-lg">
          <div class="q-pa-md">
            <q-card class="shadow-24" style="width: 500px; height: 380px">
              <q-card-section class="text-center">
                <q-img src="../../assets/Default.png" class="imgalign" />
              </q-card-section>
              <q-card-section>
                <q-btn
                  size="22px"
                  class="full-width"
                  flat
                  text-color="orange-10"
                  label="Google"
                  icon="eva-google-outline"
                  @click="handleGoogleLogin"
                />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-layout>
  </div>
</template>
<script>
import {getAuth , signInWithPopup , GoogleAuthProvider} from "firebase/auth"
import { ref } from "vue";
import {useStore} from "vuex"
import { useRouter } from "vue-router";
import AuthOperations from "./AuthOperations/Auth";
import Notifications from "@/helpers/NotificationHelper";
export default {
  setup() {
    let data = ref({
      email: "",
      password: "",
    });
    const Store = useStore()
    const Router = useRouter();
    const { loginOperation } = AuthOperations();
    const Provider = new GoogleAuthProvider()
    const Auth = getAuth()

    const handleSubmit = () => {
      loginOperation(JSON.stringify(data.value)).then((response) => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(response));
          Router.push("/home");
          Notifications.createSuccessNotification("Siginin Success");
        } else {
          Notifications.createErrorNotification("Please try again");
        }
      });
    };
    const handleGoogleLogin = () =>{
      signInWithPopup(Auth , Provider)
      .then((result)=>{
        Store.dispatch('manipulateUserData' , result)
         console.log(result.user.displayName , result.user.email)
         Notifications.createSuccessNotification("Succesfully Logged in")
         Router.push("/home")
      })
      .catch(()=>{
        Notifications.createErrorNotification("please try again")
      })
    }
   
    return {
      //variables
      data,
      //functions
      handleSubmit,
     
      handleGoogleLogin
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

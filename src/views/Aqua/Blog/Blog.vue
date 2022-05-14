<template>
  <div class="row">
    <div class="col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div class="q-pa-md">
        <q-card>
          <div class="q-pa-md">
            <form @submit.prevent="blogSubmit">
              <q-btn @click="Api" />
              <q-input outlined dense label="title" />
            </form>
          </div>
        </q-card>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div class="q-pa-md">
        <q-card> </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  setup() {
    let Apivalue = process.env.VUE_APP_ROOT_API_AQUA;
    const Api = () => {
      console.log("API", process.env.VUE_APP_ROOT_API_AQUA);
    };

    return {
      //variables
      Apivalue,
      //functions
      Api,
    };
  },
};
</script>

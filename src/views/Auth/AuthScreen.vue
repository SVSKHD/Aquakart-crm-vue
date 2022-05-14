<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-img :src="LOGO" :ratio="1" />
      </div>
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-card class="header">
          <q-card-section class="header">
            <div class="row justify-center items-center">
              <div class="column">
                <div class="align" />
                <div class="row">
                  <q-card square bordered class="q-pa-lg shadow-1">
                    <q-card-section>
                      <q-form class="q-gutter-md">
                        <q-input
                          square
                          filled
                          clearable
                          v-model="email"
                          type="email"
                          label="email"
                        />
                        <q-input
                          square
                          filled
                          clearable
                          v-model="password"
                          type="password"
                          label="password"
                        />
                      </q-form>
                    </q-card-section>
                    <q-card-actions class="q-px-md">
                      <q-btn
                        unelevated
                        color="light-green-7"
                        size="lg"
                        class="full-width"
                        label="Login"
                      />
                    </q-card-actions>
                    <q-card-section class="text-center q-pa-none">
                      <p class="text-grey-6">
                        Not reigistered? Created an Account
                      </p>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="align" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import Default from "../../assets/Default.png";
export default {
  components: {},
  setup() {
    let LOGO = Default;
    return {
      LOGO,
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #041562;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.toolbar {
  background-color: #11468f;
}
.align {
  margin-bottom: 25rem;
}
</style>

<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title class="text-center">{{ modeMessage }}</q-toolbar-title>
        <q-btn flat color="red" label="logout" @click="Logout"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="500"
      bordered
      class="drawer"
    >
      <q-scroll-area class="fit">
        <q-list padding>
        <q-item to="/home">
          <q-item-section avatar class="text-grey-10">
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
             <b class="text-grey-10">Home</b>
            </q-item-section>
        </q-item>
        <template v-for="(item , index) in menu" :key="index">
          <q-item :to="item.path" clickable v-ripple>
            <q-item-section avatar class="text-grey-10">
              <q-icon :name="item.icon" />
            </q-item-section>

            <q-item-section>
             <b class="text-grey-10">{{item.name}}</b>
            </q-item-section>
          </q-item>
        </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-footer class="header">
      <q-bar dense>
        <q-toggle
          dense
          v-model="mode"
          checked-icon="check"
          color="#243a73"
          unchecked-icon="clear"
        />
        <q-toolbar-title class="text-center">{{ modeMessage }}</q-toolbar-title>
      </q-bar>
    </q-footer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    let menu=ref([
      {name:"Invoices" , path:"/invoices" , icon:"text_snippet"},
      {name:"Quotations" , path:"/quotations", icon:"inventory"},
      {name:"Contacts" , path:"/contacts" , icon:"people"},
      {name:"reminders" , path:"/reminders" , icon:"task"}
      ])
    let mode = ref(false);
    const Router = useRouter()
    let modeMessage = ref("Aquakart CRM Offline Operations");
    watch(mode, () => {
      if (mode.value === true) {
        modeMessage.value = "Aquakart Online Operations";
      } else {
        modeMessage.value = "Aquakart CRM Ofline Operations";
      }
    });
    const Logout = () =>{
      localStorage.removeItem("user")
      Router.push("/")
    }
    return {
      //variables
      drawer: ref(false),
      miniState: ref(true),
      mode,
      modeMessage,
      menu,
      //functions
      Logout
    };
  },
};
</script>

<style>
.drawer {
  background-color: #a5becc;
  color: darkslategrey;
}
.header {
  background-color: #243a73 !important;
}
</style>

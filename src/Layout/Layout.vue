<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="header text-white">
      <q-toolbar>
        <q-toolbar-title> Aquakart CRM </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <q-bar class="toolbar">
        <q-btn
          color="white"
          dense
          flat
          round
          :icon="icon"
          @click="menuToggle"
        />
      </q-bar>
      <router-view />
    </q-page-container>

    <q-footer elevated class="header text-white">
      <q-bar>
        <q-toolbar-title>
          <div>Aquakart CRM | Offline Sales CRM</div>
        </q-toolbar-title>
      </q-bar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Layout",
  setup() {
    let drawer = ref(false);
    let icon = ref("menu_open");

    let menu = ref([
      {
        name: "Invoices",
        icon: "",
        sub: true,
        submenu: { name: "Create-Invoice", path: "/invoice-create" },
      },
      {
        name: "Contact",
        icon: "",
        sub: true,
        submenu: {},
      },
    ]);

    // let AquaMenu = ref([
    //   {name : }
    // ])

    // functions
    const menuToggle = () => {
      drawer.value = !drawer.value;
      drawer.value ? (icon.value = "menu_open") : (icon.value = "menu");
    };
    return {
      //variables
      icon,
      drawer,
      menu,
      //functions
      menuToggle,
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #041562;
}
.toolbar {
  background-color: #11468f;
}
</style>

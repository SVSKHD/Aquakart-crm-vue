<template>
  <div class="home">
    <div class="breaker" />
    <div class="container q-pa-md">
      <div class="row justify-evenly">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <h4>Aquakart Offline Menu</h4>
          <hr />
          <div class="row justify-evenly">
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12" v-for="item in menu" :key="item">
              <LayoutCard
                :name="item.name"
                :icon="item.icon"
                :path="item.path"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <h4>Aquakart Online Menu</h4>
          <hr />
          <div class="row justify-evenly">
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12" v-for="item in aquaMenu" :key="item">
              <LayoutCard
                :name="item.name"
                :icon="item.icon"
                :path="item.path"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import LayoutCard from "../components/cards/LayoutCard";
export default {
  name: "Home",
  components: { LayoutCard },
  setup() {
    let menu = ref([
      { name: "Invoices", path: "/invoices", icon: "date_range" },
      { name: "Customers", path: "/customers", icon: "person" },
      { name: "Contacts", path: "/contacts", icon: "person" },
      { name: "Quotations", path: "/quotations", icon: "pages" },
    ]);
    let aquaMenu = ref([
      { name: "Blog", path: "/blog", icon: "date_range" },
      { name: "Products", path: "/products", icon: "person" },
      { name: "Categories", path: "/categories", icon: "Categories" },
      {
        name: "Sub-Categories",
        path: "/sub-categories",
        icon: "sub-categories",
      },
      {
        name: "reviews",
        path: "/review",
        icon: "pages",
      },
    ]);
    return {
      //  variables
      menu,
      aquaMenu,
      // functions
    };
  },
};
</script>

<style>
.breaker {
  padding: 5rem;
}
.card {
  margin: 1rem;
  border-radius: 0rem;
  margin-bottom: 1rem;
}
</style>

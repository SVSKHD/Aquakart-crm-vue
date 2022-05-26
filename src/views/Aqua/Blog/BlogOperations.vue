<template>
  <div class="row">
    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
      <div class="q-pa-md">
        <q-card>
          <div class="q-pa-md">
            <form @submit.prevent="blogSubmit">
              <q-input outlined dense v-model="blogdata.title" label="title" />
              <q-input outlined dense v-model="blogdata.subtitle" label="sub-title" />
            </form>
          </div>
        </q-card>
      </div>
    </div>
    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
      <h4>All Blogs</h4>
      <hr />
      <div class="q-pa-md">
        <q-table :rows="rows" :columns="columns" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import BlogOperations from "./Blog";
export default {
  name: "Blogs",
  setup() {
    const { getAllBlogs } = BlogOperations();
   
    let loading = ref(false);
    let blogdata = ref({
      title:"",
      subtitle:"",
      slug:"",
      description:"",
      keywords:"",
      pros:"",
      sepcs:"",
      price:"",
      suggestion:"",
      link:"",
      product:"",
      blogcategory:""
    })
     
     //table load data varibales
    const columns = ref([
      {
        name: "",
        required: true,
        label: "Title",
        align: "left",
        field: (row) => row.title,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "Price",
        align: "center",
        label: "Sub-title",
        field: "subtitle",
        sortable: true,
      },
      { name: "carbs", label: "Price", field: "price" },
      {
        name: "iron",
        label: "Slug",
        field: "slug",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
    ]);
    let rows = ref([]);
    const fetchBlogs = onBeforeMount(() => {
      loading.value = true;
      getAllBlogs().then((data) => {
        console.log("data", data.data);
        rows.value = data.data;
        loading.value = false;
      });
    });

    return {
      //variables
      rows,
      columns,
      blogdata,
      //functions
      fetchBlogs,
    };
  },
};
</script>

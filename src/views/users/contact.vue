<template>
  <div class="q-pa-md">
    <q-input outlined dense label="Contact" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useContact from "./contactComposable/contactComposable";
export default {
  setup() {
    const { getContacts } = useContact();
    let contacts = ref([]);

    const contactLoad = () => {
      getContacts().then((data) => {
        console.log("data", data);
      });
    };
    return {
      //variables
      contacts,
      //   functions
      contactLoad,
    };
  },
};
</script>

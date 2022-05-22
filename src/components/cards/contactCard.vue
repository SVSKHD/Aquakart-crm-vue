<template>
  <div class="q-pa-md">
    
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useContact from "../../views/users/contactComposable/contactComposable";
export default {
  name: "ContactCard",
  props: ["name", "phone", "icon", "path"],
  setup() {
    const Route = useRouter();
    const redirect = (name) => {
      Route.push(`/contact/${name}`);
    };
    const { deleteContact } = useContact();
    const deleteContactName = (name) => {
      deleteContact(name);
    };
    return {
      redirect,
      deleteContactName,
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #041562;
}
</style>

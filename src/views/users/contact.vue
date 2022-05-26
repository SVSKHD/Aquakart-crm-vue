<template>
  <div class="q-pa-md">
    <br />
    <div class="row">
      <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
        <q-card class="margin">
          <q-card-section>
            <form @submit.prevent="handleContact">
              <div class="text-center">
                <q-input
                  dense
                  outlined
                  label="name"
                  v-model="createContact.name"
                />
                <br />
                <q-input
                  dense
                  outlined
                  label="email"
                  v-model="createContact.email"
                />
                <br />
                <q-input
                  dense
                  outlined
                  label="phone"
                  v-model="createContact.phone"
                />
                <br />
                <q-input
                  dense
                  outlined
                  label="type"
                  v-model="createContact.type"
                />
                <br />
                <q-input
                  dense
                  outlined
                  label="product"
                  v-model="createContact.product"
                />
              </div>
              <q-card-actions>
                <q-btn
                  style="background: #041562; color: white"
                  @click="handleContact"
                  flat
                  label="Submit"
                />
              </q-card-actions>
            </form>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12">
        <q-table 
        title="Contacts"
        rows=""
        cols=""
        loading=""
        >
        <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            class="text-italic text-purple"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import useContact from "./contactComposable/contactComposable";
import { useRouter } from "vue-router";

export default {
  components: {},
  setup() {
    const { getContacts, createContactAPI, deleteContact } = useContact();
    let createContact = ref({
      name: "",
      email: "",
      phone: "",
      type: "",
      product: "",
    });
    let contactReload = ref(false);

    let contacts = ref([]);

    //tablerequirements
    let rows = ref([])
    let columns = ref([])
    let loading = ref(false)

    const handleContact = () => {
      createContactAPI(createContact.value).then((data) => {
        console.log(data.data);
        contactReload.value = true;
      });
      getContacts();
    };

    const Route = useRouter();
    const redirect = (name) => {
      Route.push(`/contact/${name}`);
    };

    const deleteContactName = (name) => {
      deleteContact(name);
      getContacts();
    };

    watch(contactReload, () => {
      if (contactReload.value === true) {
        getContacts();
      }
    });

    getContacts().then((data) => {
      contacts.value = data.data;
    });

    return {
      //variables
      columns,
      rows,
      loading,
      contacts,
      createContact,
      contactReload,
      //

      //  functions
      handleContact,
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

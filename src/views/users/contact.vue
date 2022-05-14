<template>
  <div class="q-pa-md">
    <q-input outlined dense label="Contact" />
    <br />
    <div class="row">
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-card class="margin">
          <q-card-section>
            <form @submit.prevent="handleContact">
              <div class="text-center">
                <q-input outlined label="name" v-model="createContact.name" />
                <br />
                <q-input outlined label="email" v-model="createContact.email" />
                <br />
                <q-input outlined label="phone" v-model="createContact.phone" />
                <br />
                <q-input outlined label="type" v-model="createContact.type" />
                <br />
                <q-input
                  outlined
                  label="product"
                  v-model="createContact.product"
                />
              </div>
              <q-card-actions>
                <q-btn @click="handleContact" flat label="Submit" />
              </q-card-actions>
            </form>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <div class="text-h5">All Contacts</div>
            <hr />
            <div class="row">
              <div
                v-for="(item, index) in contacts"
                :key="index"
                class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
              >
                <contact-card
                  :name="item.name"
                  :phone="item.phone"
                  :icon="people"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import useContact from "./contactComposable/contactComposable";
import ContactCard from "../../components/cards/contactCard.vue";
export default {
  components: { ContactCard },
  setup() {
    const { getContacts, createContactAPI } = useContact();
    let createContact = ref({
      name: "",
      email: "",
      phone: "",
      type: "",
      product: "",
    });
    let contactReload = ref(false);

    let contacts = ref([]);

    const handleContact = () => {
      createContactAPI(createContact.value).then((data) => {
        console.log(data.data);
        contactReload.value = true;
      });
    };

    getContacts().then((data) => {
      contacts.value = data.data;
    });

    watch(contactReload, () => {
      getContacts();
    });

    return {
      //variables
      contacts,
      createContact,
      contactReload,
      //

      //  functions
      handleContact,
    };
  },
};
</script>

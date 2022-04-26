<template>
  <div class="q-pa-md">
    <q-input outlined dense label="Contact" />
    <br />
    <div class="row">
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-card class="margin">
          <q-card-section>
            <div class="text-center">
              <q-input outlined label="name" />
              <br />
              <q-input outlined label="email" />
              <br />
              <q-input outlined label="phone" />
              <br />
              <q-input outlined label="type" />
              <br />
              <q-input outlined label="product" />
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn flat label="Submit" />
          </q-card-actions>
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
                <contact-card :name="item.name" :phone="item.phone" :icon="people" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useContact from "./contactComposable/contactComposable";
import ContactCard from "../../components/cards/contactCard.vue";
export default {
  components: { ContactCard },
  setup() {
    const { getContacts } = useContact();
    let contacts = ref([]);

    getContacts().then((data) => {
      contacts.value = data.data;
    });

    return {
      //variables
      contacts,
      //   functions
    };
  },
};
</script>

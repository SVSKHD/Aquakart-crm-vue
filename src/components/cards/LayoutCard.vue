<template>
  <div class="q-pa-md">
    <q-card v-ripple :to="path" class="my-card header text-white q-hoverable">
      <q-card-section>
        <div class="text-h6">{{ name }}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="#041562" :icon="icon" :to="path" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "LayoutCard",
  props: ["name", "icon", "path"],
};
</script>

<style scoped>
.header {
  background-color: #041562;
}
</style>

<template>
  <router-view/>
</template>

<script>
import { ref } from "vue";
import { useFavicon } from "@vueuse/core";
import Logo from "@/Logo/logo-white.png";
export default {
  setup() {
    const source = ref(Logo);
    const icon = useFavicon(source);
    return {
      icon,
    };
  },
};
</script>


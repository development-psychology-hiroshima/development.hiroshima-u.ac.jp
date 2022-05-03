<template>
  <mobile-menu :settings="settings" />
</template>

<script>
import mobileMenu from "./mobileMenu.vue";

export default {
  name: "mobileMenuWrapper",
  components: {
    mobileMenu,
  },
  inject: ["config"],
  data() {
    return {
      settings: this.config,
    };
  },
};
</script>

<style scoped></style>

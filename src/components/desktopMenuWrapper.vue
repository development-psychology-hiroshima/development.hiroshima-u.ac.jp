<template>
  <desktop-menu :settings="settings"/>
</template>

<script>
import desktopMenu from "./desktopMenu.vue";

export default {
  name: "desktopMenuWrapper",
  components: {
    desktopMenu
  },
  inject: ["config"],
  data() {
    return {
      settings: this.config
    }
  },
}
</script>

<style scoped>

</style>
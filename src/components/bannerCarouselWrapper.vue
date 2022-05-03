<template>
  <bannerCarousel :settings="settings" />
</template>

<script>
import bannerCarousel from "./bannerCarousel.vue";

export default {
  name: "bannerCarouselWrapper",
  components: {
    bannerCarousel,
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

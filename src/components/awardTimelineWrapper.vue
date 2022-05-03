<template>
  <awardTimeline :settings="settings" />
</template>

<script>
import awardTimeline from "./awardTimeline.vue";

export default {
  name: "awardTimelineWrapper",
  components: {
    awardTimeline,
  },
  inject: ["config"],
  data() {
    return {
      settings: this.config,
    };
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100%;
}
</style>

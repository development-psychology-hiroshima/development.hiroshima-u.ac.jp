<template>
  <div class="graduate-timeline" v-for="graduateYear in graduates">
    <h4>{{ graduateYear.year }}年度</h4>
    <div class="graduate-details" v-for="(value, key) in graduateYear">
      <div v-if="'year' !== key">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "graduateTimeline",
  inject: ["config"],
  data() {
    return {
      graduates: this.config.graduates,
    };
  },
};
</script>

<style scoped>
.graduate-timeline {
  margin-bottom: 1rem;
}
</style>

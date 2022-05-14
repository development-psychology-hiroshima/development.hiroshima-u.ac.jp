<template>
  <member-showbox
    v-for="member in members"
    :member="member"
    :key="member.name"
  />
  <h2><span role="heading" aria-level="1">OB・OG</span></h2>
  <member-showbox v-for="member in obog" :member="member" :key="member.name" />
</template>

<script>
import memberShowbox from "./memberShowbox.vue";

export default {
  name: "memberShowboxWrapper",
  inject: ["config"],
  data() {
    return {
      members: this.config.members,
      obog: this.config.obog,
    };
  },
  components: {
    memberShowbox,
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>

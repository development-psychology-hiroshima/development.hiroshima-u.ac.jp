<template>
  <ul>
    <li
      v-for="activity in activities"
      v-html="getStructuredText(activity)"
    ></li>
  </ul>
</template>

<script>
export default {
  name: "membersResearches",
  props: {
    activities: Array,
  },
  methods: {
    getStructuredText: (object) => {
      if (object.url) {
        return `<a href="${object.url}">${object.title}</a>`;
      } else {
        return `<p>${object.title}</p>`;
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  margin-bottom: 0.75rem;
}
</style>

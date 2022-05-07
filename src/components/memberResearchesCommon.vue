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
  setup() {
    const normalizeFilename = (filename) => `${filename.replace(/"/g, "_")}`;
    const getStructuredText = (object) => {
      if (object.url) {
        return `<a href="${object.url}" target="_blank" download="${normalizeFilename(object.title)}">${object.title}</a>`;
      } else {
        return `<p>${object.title}</p>`;
      }
    };

    return {
      getStructuredText,
    };
  }
};
</script>

<style scoped>
li {
  list-style: none;
  margin-bottom: 0.75rem;
}
</style>

<template>
  <div
    style="margin-bottom: 1.5rem"
    v-for="member in members"
    :key="member.name"
  >
    <h4>
      <span>{{ member.name }}</span>
    </h4>
    <ul>
      <li class="papers-list" v-for="paper in member.papers" :key="paper.title">
        <p class="paper-title">{{ paper.title }}</p>
        <p v-if="paper.url" v-html="getStructuredText(paper.url)"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "memberResearchesMember",
  props: {
    members: Array,
  },
  methods: {
    getStructuredText: (url) => `<a href="${url}">${url}</a>`,
  },
};
</script>

<style scoped>
.papers-list {
  margin-bottom: 1rem;
}
</style>

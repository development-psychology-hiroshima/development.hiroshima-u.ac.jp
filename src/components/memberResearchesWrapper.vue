<template>
  <h3>発達心理学研究室の出身・所属メンバーの主要論文</h3>
  <div class="card">
    <member-researches-member :members="researchActivity.members" />
  </div>

  <div class="split-line">
    <h3>過去のメンバーの卒業論文</h3>
  </div>

  <div class="card">
    <member-researches-common :activities="researchActivity.bachelors" />
  </div>

  <div class="split-line">
    <h3>過去のメンバーの修士論文</h3>
  </div>

  <div class="card">
    <member-researches-common :activities="researchActivity.masters" />
  </div>

  <div class="split-line">
    <h3>過去のメンバーの博士論文</h3>
  </div>

  <div class="card">
    <member-researches-common :activities="researchActivity.doctors" />
  </div>
</template>

<script>
import memberResearchesCommon from "./memberResearchesCommon.vue";
import memberResearchesMember from "./memberResearchesMember.vue";

export default {
  name: "memberPapers",
  inject: ["researches"],
  data() {
    return {
      researchActivity: this.researches,
    };
  },
  components: {
    memberResearchesCommon,
    memberResearchesMember,
  },
};
</script>

<style scoped>
.card {
  margin-top: 1rem;
}
</style>

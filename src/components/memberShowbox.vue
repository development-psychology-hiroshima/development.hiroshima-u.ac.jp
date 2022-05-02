<template>
  <div class="card container-member" v-for="member in members">
    <h3>{{ member.name }}</h3>
    <h3 class="position">{{ member.position }}</h3>
    <img class="member-image" :src="member.image" :alt="member.name + ' 写真'">
    <div class="member-description">
      <p v-if="member.intro" class="title">自己紹介</p>
      <p v-if="member.intro" class="text">{{ member.intro }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "memberShowbox",
  inject: ["config"],
  data() {
    return {
      members: this.config.members,
    }
  }
}
</script>

<style scoped>
.container-member {
  display: grid;
  grid-template-areas:
      "title title"
      "position position"
      "photo description";
}

.position {
  grid-area: position;
  background: none;
}

.member-image {
  grid-area: photo;
}

.member-description {
  grid-area: description;
}

</style>
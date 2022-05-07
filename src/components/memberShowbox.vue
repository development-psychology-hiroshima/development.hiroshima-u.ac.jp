<template>
  <div class="card container-member">
    <h3 class="name"><span>{{ member.name }}</span></h3>
    <h3 class="position">{{ member.position }}</h3>
    <img
      class="member-image"
      v-if="member.image"
      :src="member.image"
      :alt="member.name + ' 写真'"
    />
    <div class="member-description">
      <div class="container-description" v-if="member.intro">
        <p class="title">自己紹介</p>
        <p class="text" v-html="member.intro"></p>
      </div>
      <div class="container-description" v-if="member.interest">
        <p class="title">研究テーマ/関心領域</p>
        <p class="text">{{ member.interest }}</p>
      </div>
      <div class="container-description" v-if="member.teacher">
        <p class="title">主指導教員</p>
        <p class="text">{{ member.teacher }}</p>
      </div>
      <div class="container-description" v-for="plusAlpha in member.others">
        <p class="title">{{ plusAlpha.title }}</p>
        <p class="text" v-html="plusAlpha.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "memberShowbox",
  props: {
    member: Object,
  },
};
</script>

<style scoped>
.container-member {
  display: grid;
  grid-template-areas:
    "title title"
    "position position"
    "photo description";
  word-break: break-all;
}

@media screen and (max-width: 425px) {
  .container-member {
    width: calc(100vw - 6rem);
    grid-template-areas:
      "photo"
      "title"
      "position"
      "description";
  }
  .member-image {
    max-width: calc(100vw - 8rem) !important;
    max-height: max(15vh, 100px);
    margin-right: 0 !important;
    margin-bottom: 1em;
    justify-self: center;
  }

  .name,
  .position {
    justify-self: center;
  }

  p.text,
  p.title {
    display: block !important;
  }

  p.title:after {
    display: block;
    content: none !important;
  }
}

.name {
  grid-area: title;
}

.position {
  grid-area: position;
  background: none;
  margin-bottom: 1em;
}

.member-image {
  grid-area: photo;
  max-width: 15vw;
  border-radius: 10px;
  align-self: center;
  margin-right: 1em;
}

.member-description {
  grid-area: description;
}

.container-description {
  margin-bottom: 1em;
}

p.title {
  display: inline;
  font-weight: bold;
}

p.title:after {
  content: "：";
  font-weight: 400;
}

p.text {
  display: inline;
}
</style>

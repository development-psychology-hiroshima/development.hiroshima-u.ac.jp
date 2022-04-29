<template>
  <a v-for="menuItem in menuItems" :href="menuItem.url"
     :style="{display: !(false === menuItem.show) ? 'flex' : 'none'}"
  >
    <div class="container-desktop-menu-item">
      <p class="desktop-menu-item-title">{{ menuItem.name }}</p>
      <p class="desktop-menu-item-subtitle">{{ menuItem.english ? menuItem.english : '' }}</p>
    </div>
  </a>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";
const yaml = window.jsyaml;

const menuItems = ref([]);
onBeforeMount(async () => {
  const response = await fetch('config.yml')
      .then(response => response.text())
      .catch(error => undefined);
  try {
    menuItems.value = yaml.load(response).menuItems;
  } catch (e) {
    menuItems.value = [
      {
        "name": "Home",
        "english": "Home",
        "url": "index.html",
        "show": true,
      },
      {
        "name": "メンバー紹介",
        "english": "Members",
        "url": "members.html",
        "show": true,
      },
      {
        "name": "杉村和美の研究活動",
        "english": "Sugimura's activities",
        "url": "research_activity_sugimura.html",
        "show": true,
      },
      {
        "name": "梅村比丘の研究活動",
        "english": "Umemura's activities",
        "url": "research_activity_umemura.html",
        "show": true,
      },
      {
        "name": "学生の研究活動",
        "english": "Students' activities",
        "url": "research_activity_students.html",
        "show": true,
      },
      {
        "name": "年間スケジュール",
        "english": "Annual schedule",
        "url": "annual_schedule.html",
        "show": true,
      }
    ]
  }
});
</script>

<style scoped>
.container-desktop-menu-item {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 5px 5px 20px 0 rgb(0 0 0 / 16%);
  font-weight: bold;
  min-width: 10vw;
  margin: 0 2vw;
  transition: all .375s ease-in-out;
}

.container-desktop-menu-item:hover {
  transform: scale(1.02);
  box-shadow: 10px 10px 20px 0 rgb(0 0 0 / 20%);
  background: #BFD08C;
}

a {
  display: block;
  color: #494949;
  text-decoration-line: none;
  transition: all .375s ease-in-out;
}
</style>
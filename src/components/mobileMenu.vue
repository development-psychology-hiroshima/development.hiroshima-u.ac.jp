<template>
  <div id="container-menu-icon" @click="show = !show">
    <span class="menu-line start" :class="show ? 'active' : ''"></span>
    <span class="menu-line middle" :class="show ? 'active' : ''"></span>
    <span class="menu-line end" :class="show ? 'active' : ''"></span>
  </div>
  <transition name="menu-animation">
    <div id="focus-controller" v-if="show" @click="show = false">
      <div class="container-menu-content">
        <ul class="menu-content">
          <li class="menu-item" v-for="menuItem in menuItems">
            <a :href="menuItem.url" v-if="!(false === menuItem.show)">{{ menuItem.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import {ref} from "vue";

export default {
  name: "mobileMenu",
  data() {
    return {
      show: false,
    }
  },
  setup() {
    const menuItems = ref([])
    const yaml = window.jsyaml;

    const getConfig = async () => {
      const response = await fetch('config.yml')
          .then(response => response.text())
          .catch(error => undefined);
      try {
        menuItems.value = yaml.load(response).menuItems;
      } catch (e) {
        console.error(e.message);
        menuItems.value = [
          {
            "name": "ホーム",
            "english": "home",
            "url": "index.html",
            "show": true,
          },
          {
            "name": "メンバー紹介",
            "english": "members",
            "url": "members.html",
            "show": true,
          },
          {
            "name": "杉村和美の研究活動",
            "english": "sugimura's activities",
            "url": "research_activity_sugimura.html",
            "show": true,
          },
          {
            "name": "梅村比丘の研究活動",
            "english": "umemura's activities",
            "url": "research_activity_umemura.html",
            "show": true,
          },
          {
            "name": "学生の研究活動",
            "english": "students' activities",
            "url": "research_activity_students.html",
            "show": true,
          },
          {
            "name": "年間スケジュール",
            "english": "annual schedule",
            "url": "annual_schedule.html",
            "show": true,
          }
        ];
      }
    }

    getConfig();
    return {
      menuItems
    }
  }
}
</script>

<style scoped>
#container-menu-icon {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.container-menu-content {
  position: fixed;
  top: clamp(5vh, 5vh, 120px);
  left: 0;
  width: 100vw;
  padding-bottom: 1vh;
  background: #f2f2f2d9;
  backdrop-filter: blur(10px);
}

@supports not (backdrop-filter: blur(10px)) {
  .container-menu-content {
    background: #f2f2f2f2;
  }
}

ul, li {
  list-style: none;
}

.menu-item {
  text-align: center;
  line-height: 3;
  font-weight: bold;
}

.menu-line {
  transition: all .375s ease-in-out;
}

.menu-line:after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: .375s ease-in-out;
}

#focus-controller {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

a {
  display: block;
  color: #494949;
  text-decoration-line: none;
  transition: all .375s ease-in-out;
}

a:hover, a:focus {
  color: #0099FF;
  text-decoration-line: underline;
}

.menu-line.start.active {
  transform: translateY(400%) rotate(45deg);
}

.menu-line.middle.active {
  opacity: 0;
}

.menu-line.end.active {
  transform: translateY(-400%) rotate(-45deg);
}

.menu-animation-enter-active,
.menu-animation-leave-active {
  transition: all .375s ease-in-out;
}

.menu-animation-enter-active,
.menu-animation-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.menu-animation-enter-to {
  opacity: 1;
  transform: translateY(0);
}

</style>
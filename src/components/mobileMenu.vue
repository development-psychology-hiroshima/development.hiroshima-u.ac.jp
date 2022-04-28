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
          <!-- TODO: auto-generate content from config? -->
          <li class="menu-item"><a href="https://development.hiroshima-u.ac.jp/index.html">Home</a></li>
          <li class="menu-item"><a href="https://development.hiroshima-u.ac.jp/memb.html">メンバー紹介</a></li>
          <li class="menu-item"><a href="https://development.hiroshima-u.ac.jp/rese_sugimura.html">杉村和美の研究活動</a></li>
          <li class="menu-item"><a href="https://development.hiroshima-u.ac.jp/rese_umemura.html">梅村比丘の研究活動</a></li>
          <li class="menu-item"><a href="https://development.hiroshima-u.ac.jp/rese_gakusei.html">学生の研究活動</a></li>
          <li class="menu-item"><a href="https://development.hiroshima-u.ac.jp/sche.html">年間スケジュール</a></li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "mobileMenu",
  data() {
    return {
      show: false,
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
  background: #ffffffd9;
  backdrop-filter: blur(10px);
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
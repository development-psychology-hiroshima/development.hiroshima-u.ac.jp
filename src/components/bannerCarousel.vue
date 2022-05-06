<template>
  <div class="container-carousel" @mouseover="stop()" @mouseout="start()">
    <div class="container-carousel-mask"></div>
    <div class="carousel" v-for="image in showreel">
      <!-- FIXME: under certain condition will show blank image -->
      <transition name="fade">
        <img
          class="banner-carousel-image"
          :src="getRealPath(image.src)"
          v-show="index === image.id"
          alt="発達研集合写真"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, inject } from "vue";

export default {
  name: "bannerCarousel",
  methods: {
    getRealPath: (path) => {
      let returnPath = "https://development.hiroshima-u.ac.jp/" + path;
      if (!path.startsWith("/")) {
        const regex = new RegExp("^https?:\/\/development.hiroshima-u.ac.jp\/");
        if (regex.test(path)) {
          returnPath = path;
        }
      }

      return returnPath;
    },
  },
  setup() {
    const images = inject("config").bannerImages;
    const showreel = [];

    for (let i = 0; i < images.length; i++) {
      showreel.push({
        id: i,
        src: images[i],
      });
    }

    const index = ref(0);
    let timer = null;

    const autoPlay = () => {
      clearInterval(timer);
      timer = setInterval(() => {
        index.value++;
        if (index.value >= showreel.length) {
          index.value = 0;
        }
      }, 8000);
    };

    const stop = () => {
      if (timer) clearInterval(timer);
      // console.log("Banner image switching stopped.");
    };
    const start = () => {
      autoPlay();
      // console.log("Banner image switching started.");
    };

    autoPlay();

    onUnmounted(() => {
      clearInterval(timer);
      index.value = 0;
    });

    return {
      index,
      showreel,
      stop,
      start,
    };
  },
};
</script>

<style>
.container-carousel {
  width: 100vw;
  height: 45vh;
  overflow: hidden;
  display: grid;
  grid-template-areas: "carousel";
}

.carousel {
  grid-area: carousel;
}

.container-carousel-mask {
  grid-area: carousel;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
}

.banner-carousel-image {
  width: 100vw;
  height: 50vh;
  object-fit: cover;
  animation-name: carousel-scale;
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
}

@media screen and (max-width: 425px) {
  .banner-carousel-image {
    animation: none;
  }
}

/*noinspection CssUnusedSymbol*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

/*noinspection CssUnusedSymbol*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes carousel-scale {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}
</style>

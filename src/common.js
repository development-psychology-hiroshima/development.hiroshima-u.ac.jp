import { createApp } from "vue";
import bannerCarousel from "./components/bannerCarousel.vue";
import mobileMenu from "./components/mobileMenu.vue";
import desktopMenu from "./components/desktopMenu.vue";
import { getConfig } from "./getConfig";

const config = await getConfig();

createApp(bannerCarousel).provide("config", config).mount("#vue-carousel");
createApp(mobileMenu).provide("config", config).mount("#mobile-menu");
createApp(desktopMenu)
  .provide("config", config)
  .mount("#container-desktop-menu");

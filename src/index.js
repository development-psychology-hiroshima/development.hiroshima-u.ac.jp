import { createApp } from "vue";
import bannerCarousel from "./components/bannerCarousel.vue";
import mobileMenu from "./components/mobileMenu.vue";
import desktopMenu from "./components/desktopMenu.vue";
import awardTimeline from "./components/awardTimeline.vue";
import graduateTimeline from "./components/graduateTimeline.vue";
import { getConfig } from "./getConfig";

const config = await getConfig();

createApp(bannerCarousel).provide("config", config).mount("#vue-carousel");
createApp(mobileMenu).provide("config", config).mount("#mobile-menu");
createApp(desktopMenu)
  .provide("config", config)
  .mount("#container-desktop-menu");
createApp(awardTimeline).provide("config", config).mount("#container-awards");
createApp(graduateTimeline)
  .provide("config", config)
  .mount("#container-graduate");

import { createApp } from "vue";
import bannerCarouselWrapper from "./components/bannerCarouselWrapper.vue";
import mobileMenu from "./components/mobileMenu.vue";
import desktopMenu from "./components/desktopMenu.vue";
import awardTimelineWrapper from "./components/awardTimelineWrapper.vue";
import graduateTimeline from "./components/graduateTimeline.vue";
import { getConfig } from "./getConfig";

const config = await getConfig();

createApp(bannerCarouselWrapper)
  .provide("config", config)
  .mount("#vue-carousel");
createApp(mobileMenu).provide("config", config).mount("#mobile-menu");
createApp(desktopMenu)
  .provide("config", config)
  .mount("#container-desktop-menu");
createApp(awardTimelineWrapper)
  .provide("config", config)
  .mount("#container-awards");
createApp(graduateTimeline)
  .provide("config", config)
  .mount("#container-graduate");

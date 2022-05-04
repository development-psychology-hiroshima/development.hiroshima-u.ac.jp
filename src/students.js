import { createApp } from "vue";
import bannerCarouselWrapper from "./components/bannerCarouselWrapper.vue";
import mobileMenu from "./components/mobileMenu.vue";
import desktopMenu from "./components/desktopMenu.vue";
import memberResearchesWrapper from "./components/memberResearchesWrapper.vue";
import { getConfig, getMemberResearch } from "./getConfig";

const config = await getConfig();
const memberResearches = await getMemberResearch();

createApp(bannerCarouselWrapper)
  .provide("config", config)
  .mount("#vue-carousel");
createApp(mobileMenu).provide("config", config).mount("#mobile-menu");
createApp(desktopMenu)
  .provide("config", config)
  .mount("#container-desktop-menu");
createApp(memberResearchesWrapper)
  .provide("researches", memberResearches)
  .mount("#members-research-activities");

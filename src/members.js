import { createApp } from "vue";
import bannerCarouselWrapper from "./components/bannerCarouselWrapper.vue";
import mobileMenu from "./components/mobileMenu.vue";
import desktopMenu from "./components/desktopMenu.vue";
import memberShowboxWrapper from "./components/memberShowboxWrapper.vue";
import { getConfig } from "./getConfig";

const config = await getConfig();

createApp(bannerCarouselWrapper)
  .provide("config", config)
  .mount("#vue-carousel");
createApp(mobileMenu).provide("config", config).mount("#mobile-menu");
createApp(desktopMenu)
  .provide("config", config)
  .mount("#container-desktop-menu");
createApp(memberShowboxWrapper)
  .provide("config", config)
  .mount("#container-members");

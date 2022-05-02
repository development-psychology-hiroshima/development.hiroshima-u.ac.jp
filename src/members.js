import {createApp} from 'vue';
import bannerCarouselWrapper from "./components/bannerCarouselWrapper.vue";
import mobileMenuWrapper from "./components/mobileMenuWrapper.vue";
import desktopMenuWrapper from "./components/desktopMenuWrapper.vue";
import memberShowbox from "./components/memberShowbox.vue";
import { getConfig } from "./getConfig";

const config = await getConfig();

createApp(bannerCarouselWrapper).provide("config", config).mount('#vue-carousel');
createApp(mobileMenuWrapper).provide("config", config).mount('#mobile-menu');
createApp(desktopMenuWrapper).provide("config", config).mount('#container-desktop-menu');
createApp(memberShowbox).provide("config", config).mount('#container-members');
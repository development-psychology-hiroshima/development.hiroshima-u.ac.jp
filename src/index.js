import { createApp } from 'vue'
import bannerCarousel from './components/bannerCarousel.vue'
import mobileMenu from "./components/mobileMenu.vue";
import desktopMenu from "./components/desktopMenu.vue";
import awardTimeline from "./components/awardTimeline.vue";

createApp(bannerCarousel).mount('#vue-carousel')
createApp(mobileMenu).mount('#mobile-menu')
createApp(desktopMenu).mount('#container-desktop-menu')
createApp(awardTimeline).mount('#container-awards')
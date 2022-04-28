import { createApp } from 'vue'
import bannerCarousel from './components/bannerCarousel.vue'
import mobileMenu from "./components/mobileMenu.vue";

createApp(bannerCarousel).mount('#vue-carousel')
createApp(mobileMenu).mount('#mobile-menu')

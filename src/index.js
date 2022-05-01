import {createApp} from 'vue';
import bannerCarouselWrapper from "./components/bannerCarouselWrapper.vue";
import mobileMenuWrapper from "./components/mobileMenuWrapper.vue";
import desktopMenuWrapper from "./components/desktopMenuWrapper.vue";
import awardTimelineWrapper from "./components/awardTimelineWrapper.vue";
import graduateTimeline from "./components/graduateTimeline.vue";

const yaml = window.jsyaml;
let config;

const response = await fetch('config.yml')
  .then(response => response.text())
  .catch(error => undefined);

try {
  config = yaml.load(response);
} catch (e) {
  console.error(e.message);
}

createApp(bannerCarouselWrapper).provide("config", config).mount('#vue-carousel');
createApp(mobileMenuWrapper).provide("config", config).mount('#mobile-menu');
createApp(desktopMenuWrapper).provide("config", config).mount('#container-desktop-menu');
createApp(awardTimelineWrapper).provide("config", config).mount('#container-awards');
createApp(graduateTimeline).provide("config", config).mount('#container-graduate');
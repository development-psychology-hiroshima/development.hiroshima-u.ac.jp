import {createApp} from 'vue';
import bannerCarouselWrapper from "./components/bannerCarouselWrapper.vue";
import mobileMenuWrapper from "./components/mobileMenuWrapper.vue";
import desktopMenuWrapper from "./components/desktopMenuWrapper.vue";
import memberResearchesWrapper from "./components/memberResearchesWrapper.vue";
import { getConfig, getMemberResearch } from "./getConfig";

const config = await getConfig();
const memberResearches = await getMemberResearch();

createApp(bannerCarouselWrapper).provide("config", config).mount('#vue-carousel');
createApp(mobileMenuWrapper).provide("config", config).mount('#mobile-menu');
createApp(desktopMenuWrapper).provide("config", config).mount('#container-desktop-menu');
createApp(memberResearchesWrapper).provide("researches", memberResearches).mount('#members-research-activities');
<template>
  <div class="pb-5 content">
    <keep-alive>
      <transition name="fade" mode="out-in" appear>
        <router-view :home="home"></router-view>
        <router-view :about-us="about-us"></router-view>
        <router-view :gallery="gallery"></router-view>
        <router-view :prices="prices"></router-view>
        <router-view :contact-us="contact-us"></router-view>
        <!-- <component :is="currentView.tag"/> -->
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import Gallery from "../views/Gallery.vue";
import Prices from "../views/Prices.vue";
import ContactUs from "../views/ContactUs.vue";
import { eventBus } from "../main";
export default {
  components: {
    appHome: Home,
    appAboutUs: AboutUs,
    appGallery: Gallery,
    appPrices: Prices,
    appContactUs: ContactUs
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

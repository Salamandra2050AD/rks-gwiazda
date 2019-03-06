<template>
  <div class="pb-5 content">
    <keep-alive>
      <transition name="fade" mode="out-in" appear>
        <component :is="currentView.tag"/>
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
  created() {
    eventBus.$on("changeView", data => {
      let temp = [
        {
          tag: data.tag,
          title: data.title
        }
      ];
      this.history = temp.concat(this.history.splice(0));
    });
  },
  data() {
    return {
      history: [
        {
          tag: "app-home",
          tittle: "STRONA GŁÓWNA"
        }
      ]
    };
  },
  computed: {
    currentView() {
      return this.history[0];
    }
  },
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

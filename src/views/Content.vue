<template>
  <keep-alive>
    <component :is="currentView.tag"/>
  </keep-alive>
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

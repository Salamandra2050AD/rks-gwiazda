<template>
  <div>
    <appCarousel/>
    <app-about-us/>
    <app-gallery/>
    <app-prices/>
  </div>
</template>

 
<script>
import Carousel from "../components/Carousel.vue";
import AboutUs from "../views/AboutUs.vue";
import Gallery from "../views/Gallery.vue";
import Prices from "../views/Prices.vue";
import ContactUs from "../views/ContactUs.vue";

export default {
  components: {
    appCarousel: Carousel,
    appAboutUs: AboutUs,
    appGallery: Gallery,
    appPrices: Prices,
    appContactUs: ContactUs
  }
};
</script>
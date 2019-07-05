<template>
  <div>
    <appCarousel :slides="slides"/>
    <app-about-us/>
    <app-gallery/>
    <app-prices/>
    <app-contact-us/>
  </div>
</template>

 
<script>
import Carousel from "../components/Carousel.vue";
import AboutUs from "../views/AboutUs.vue";
import Gallery from "../views/Gallery.vue";
import Prices from "../views/Prices.vue";
import ContactUs from "../views/ContactUs.vue";

export default {
  data() {
    return {
      slides: [
        {
          imgUrl: "https://picsum.photos/1024/480/?image=55",
          imgTitle: "Obrazek pierwszy",
          imgDescription: "To jest opis pierwszego slajdu",
          key: 1
        },
        {
          imgUrl: "https://picsum.photos/1024/480/?image=54",
          imgTitle: "Obrazek drugi",
          imgDescription: "To jest opis drugiego slajdu",
          key: 2
        },
        {
          imgUrl: "https://picsum.photos/1024/480/?image=53",
          imgTitle: "Obrazek trzeci",
          imgDescription: "To jest opis trzeciego slajdu",
          key: 3
        }
      ]
    };
  },
  components: {
    appCarousel: Carousel,
    appAboutUs: AboutUs,
    appGallery: Gallery,
    appPrices: Prices,
    appContactUs: ContactUs
  }
};
</script>
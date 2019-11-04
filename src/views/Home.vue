<template>
  <div>
    <appCarousel :slides="slides" />
    <app-about-us />
    <app-gallery />
    <app-prices />
    <app-contact-us />
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
          imgUrl: require("@/assets/car01.jpg"),
          imgTitle: "Queer-Fight Team",
          imgDescription:
            "Dołącz do równościowej społeczności wspierającej się w drodze do stania się najlepszą wersją siebie.",
          key: 1
        },
        {
          imgUrl: require("@/assets/car02.jpg"),
          imgTitle: "Partycypacja członkowska",
          imgDescription:
            "RKS-Gwiazda jest klubem zarządzanym przez społeczność go tworzącą.",
          key: 2
        },
        {
          imgUrl: require("@/assets/car03.jpg"),
          imgTitle: "",
          imgDescription: "",
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
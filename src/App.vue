<template>
  <div class="container-fluid">
    <app-navbar/>
    <app-content/>
    <app-footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Content from "./views/Content.vue";
export default {
  components: {
    appNavbar: Navbar,
    appContent: Content,
    appFooter: Footer
  }
};
</script>

<style>
@font-face {
  font-family: "Prohibition";
  src: url("//db.onlinewebfonts.com/t/663357fcaceba8348ec0998a7e3a2fb5.eot");
  src: url("//db.onlinewebfonts.com/t/663357fcaceba8348ec0998a7e3a2fb5.eot?#iefix")
      format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/663357fcaceba8348ec0998a7e3a2fb5.woff2")
      format("woff2"),
    url("//db.onlinewebfonts.com/t/663357fcaceba8348ec0998a7e3a2fb5.woff")
      format("woff"),
    url("//db.onlinewebfonts.com/t/663357fcaceba8348ec0998a7e3a2fb5.ttf")
      format("truetype"),
    url("//db.onlinewebfonts.com/t/663357fcaceba8348ec0998a7e3a2fb5.svg#ProhibitionW00-Regular")
      format("svg");
}
.navbar {
  padding: 0.5rem 5vw;
}
.bg-transparent-blueviolet {
  background-color: #59125ecc;
}
.bg-blueviolet {
  background-color: #59125e;
}
.brand-name {
  line-height: 0.7rem;
  font-weight: normal;
  font-size: xx-large;
  font-family: "prohibition";
}
.brand-description {
  font-size: 11px;
  color: #431546;
  text-shadow: 0px 0px 2px #fff;
}
.content {
  min-height: 90vh;
}
.row {
  margin: 0px;
}
.container-fluid {
  padding: 0px;
}
.bg-carousel {
  padding: 0px;
}
.carousel-item {
  height: 100vh;
  min-height: 300px;
}
.img-fill {
  min-width: 100% !important;
  min-height: 100% !important;
  width: auto;
  height: auto;
  margin: auto;
}
</style>

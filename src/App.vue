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
.logo-1 {
  mask-image: url(./assets/logo.png);
  -webkit-mask-image: url(./assets/logo.png);
  -webkit-mask-size: auto 50px;
  mask-size: auto 50px;
}
.logo-2 {
  mix-blend-mode: soft-light;
}
.logo-2:hover {
  mix-blend-mode: unset;
}
.shine {
  background-repeat: no-repeat;
  background-position: -200px -200px, 0 0;
  background-image: -webkit-linear-gradient(
    top left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 1) 45%,
    rgba(255, 255, 255, 0) 50%
  );
  background-image: -moz-linear-gradient(
    0 0,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 1) 45%,
    rgba(255, 255, 255, 0) 50%
  );
  background-image: -o-linear-gradient(
    0 0,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 1) 45%,
    rgba(255, 255, 255, 0) 50%
  );
  background-image: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 1) 45%,
    rgba(255, 255, 255, 0) 50%
  );
  -moz-background-size: 200% 200%, 100% 100%;
  background-size: 200% 200%, 100% 100%;
  -webkit-transition: background-position 0s ease;
  -moz-transition: background-position 0s ease;
  -o-transition: background-position 0s ease;
  transition: background-position 0s ease;
}

.shine:hover {
  background-position: 0 0, 0 0;

  -webkit-transition-duration: 0.7s;
  -moz-transition-duration: 0.7s;
  transition-duration: 0.7s;
}

.nav-link {
  font-family: "prohibition";
  font-size: x-large;
  padding: 0 !important;
  line-height: 1.4rem;
}
.navbar-brand:hover {
  cursor: pointer;
}
.navbar {
  padding: 0.5rem 5vw;
}

.bg-blueviolet {
  background-color: #59125ee6;
  -webkit-box-shadow: 0px 0px 13px 3px rgba(92, 10, 92, 1);
  -moz-box-shadow: 0px 0px 13px 3px rgba(92, 10, 92, 1);
  box-shadow: 0px 0px 13px 3px rgb(67, 21, 70);
}

.content {
  min-height: 90vh;
  background-color: #fff9;
}
.row {
  margin: 0px;
}
.container-fluid {
  padding: 0px;
  background-image: url(assets/bg.png);
}
.bg-carousel {
  padding: 0px;
}
.carousel-item {
  height: 90vh;
  min-height: 300px;
}
.img-fill {
  min-width: 100% !important;
  min-height: 100% !important;
  width: auto;
  height: auto;
  margin: auto;
}
.footer {
  min-height: 200px;
  position: relative;
}
.img-thumbnail :hover {
  mix-blend-mode: exclusion;
  position: relative;
}
</style>

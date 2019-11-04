<template>
  <div class="container-fluid">
    <app-navbar />
    <div class="pb-5 content">
      <keep-alive>
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
      </keep-alive>
    </div>
    <app-footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    appNavbar: Navbar,
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
@font-face {
  font-family: "Nunito";
  src: url("./assets/fonts/Nunito-Regular.ttf");
}
@keyframes neon {
  0%,
  9%,
  16%,
  34%,
  46%,
  52%,
  67%,
  85%,
  91%,
  95%,
  100% {
    mix-blend-mode: exclusion;
    -webkit-filter: none;
    -moz-filter: none;
    -ms-filter: none;
    -o-filter: none;
    filter: none;
  }
  10%,
  15%,
  35%,
  45%,
  53%,
  66%,
  86%,
  90%,
  96%,
  99% {
    mix-blend-mode: screen;
    -webkit-filter: drop-shadow(2px 2px 3px #f56cff)
      drop-shadow(-2px 2px 3px #f56cff) drop-shadow(2px -2px 3px #f56cff)
      drop-shadow(-2px -2px 3px #f56cff);
    -moz-filter: drop-shadow(2px 2px 3px #f56cff)
      drop-shadow(-2px 2px 3px #f56cff) drop-shadow(2px -2px 3px #f56cff)
      drop-shadow(-2px -2px 3px #f56cff);
    -ms-filter: drop-shadow(2px 2px 3px #f56cff)
      drop-shadow(-2px 2px 3px #f56cff) drop-shadow(2px -2px 3px #f56cff)
      drop-shadow(-2px -2px 3px #f56cff);
    -o-filter: drop-shadow(2px 2px 3px #f56cff)
      drop-shadow(-2px 2px 3px #f56cff) drop-shadow(2px -2px 3px #f56cff)
      drop-shadow(-2px -2px 3px #f56cff);
    filter: drop-shadow(2px 2px 3px #f56cff) drop-shadow(-2px 2px 3px #f56cff)
      drop-shadow(2px -2px 3px #f56cff) drop-shadow(-2px -2px 3px #f56cff);
  }
}
body {
  font-family: "Nunito", sans-serif !important;
}
p {
  font-size: 1.2rem;
}
.row {
  margin-right: 0px !important;
  margin-left: 0px !important;
}
.sticky-top {
  z-index: 20 !important;
}
.logo-1 {
  mask-image: url(./assets/logo.png);
  -webkit-mask-image: url(./assets/logo.png);
  -webkit-mask-size: auto 50px;
  mask-size: auto 50px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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
.v--modal-overlay .v--modal-background-click {
  background-color: #59125e75;
  padding-top: 4rem;
}
.v--modal-overlay .v--modal-box {
  -webkit-box-shadow: 0px 0px 100px 44px rgba(89, 18, 94, 1);
  -moz-box-shadow: 0px 0px 100px 44px rgba(89, 18, 94, 1);
  box-shadow: 0px 0px 100px 44px rgba(89, 18, 94, 1);
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
  padding: 0px !important;
  background-image: url(assets/bg.png);
}
.bg-carousel {
  padding: 0px;
}
.carousel-item {
  height: 90vh;
  min-height: 300px;
}
footer {
  min-height: 30px;
  position: relative;
}
footer img {
  width: 100%;
  margin-top: 25px;
  mix-blend-mode: exclusion;
  mask-image: url(./assets/created-by-salamandra-s.png);
  -webkit-mask-image: url(./assets/created-by-salamandra-s.png);
  -webkit-mask-size: 100% auto;
  mask-size: 100% auto;
}

footer img:hover {
  animation: neon 0.5s 2;
  mix-blend-mode: screen;
  cursor: pointer;
  -webkit-filter: drop-shadow(2px 2px 5px #f56cff)
    drop-shadow(-2px 2px 5px #f56cff) drop-shadow(2px -2px 5px #f56cff)
    drop-shadow(-2px -2px 5px #f56cff);
  -moz-filter: drop-shadow(2px 2px 5px #f56cff)
    drop-shadow(-2px 2px 5px #f56cff) drop-shadow(2px -2px 5px #f56cff)
    drop-shadow(-2px -2px 5px #f56cff);
  -ms-filter: drop-shadow(2px 2px 5px #f56cff) drop-shadow(-2px 2px 5px #f56cff)
    drop-shadow(2px -2px 5px #f56cff) drop-shadow(-2px -2px 5px #f56cff);
  -o-filter: drop-shadow(2px 2px 5px #f56cff) drop-shadow(-2px 2px 5px #f56cff)
    drop-shadow(2px -2px 5px #f56cff) drop-shadow(-2px -2px 5px #f56cff);
  filter: drop-shadow(2px 2px 5px #f56cff) drop-shadow(-2px 2px 5px #f56cff)
    drop-shadow(2px -2px 5px #f56cff) drop-shadow(-2px -2px 5px #f56cff);
}

.img-thumbnail:hover {
  mix-blend-mode: hard-light;
  position: relative;
}
</style>

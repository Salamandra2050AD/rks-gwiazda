import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import AboutUs from "./views/AboutUs.vue";
import Gallery from "./views/Gallery.vue";
import Prices from "./views/Prices.vue";
import ContactUs from "./views/ContactUs.vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export const eventBus = new Vue();

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: [
    { path: "", component: Home },
    { path: "/about-us", component: AboutUs },
    { path: "/gallery", component: Gallery },
    { path: "/prices", component: Prices },
    { path: "/contact-us", component: ContactUs },
    { path: "/*", component: Home }
  ],
  mode: "history"
});

new Vue({
  el: "#app",
  render: h => h(App),
  router
});

<template>
  <b-navbar toggleable="md" type="dark" sticky class="bg-blueviolet">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link tag="b-navbar-brand" class="brand-name" to="/" exact>
      <img
        src="../assets/logo.png"
        alt
        srcset
        height="50"
        width="auto"
        class="d-inline-block align-top"
      >
    </router-link>
    <b-collapse is-nav id="nav_collapse">
      <router-link tag="b-navbar-brand" class="brand-name" to="/" exact>GWIAZDA
        <br>
        <span class="brand-description">Ruchomy Klub Sportowy</span>
      </router-link>
      <b-navbar-nav v-for="site in sites" :key="site.key" class="ml-auto">
        <router-link :to="site.path" active-class="active" tag="li" class="nav-item">
          <a class="nav-link">{{site.title}}</a>
        </router-link>
        <!-- <b-nav-item>{{site.title}}</b-nav-item> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      sites: [
        {
          title: "O NAS",
          path: "/about-us",
          key: 1
        },
        {
          title: "GALERIA",
          path: "/gallery",
          key: 2
        },
        {
          title: "CENNIK",
          path: "/prices",
          key: 3
        },
        {
          title: "KONTAKT",
          path: "/contact-us",
          key: 4
        }
      ]
    };
  }
};
</script>

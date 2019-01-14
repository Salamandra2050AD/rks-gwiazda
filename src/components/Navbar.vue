<template>
  <b-navbar toggleable="md" type="dark" sticky class="bg-blueviolet">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#" @click.prevent="navigate('app-home', 'Strona Główna')">
      <img
        src="../assets/logo.png"
        alt
        srcset
        height="50"
        width="auto"
        class="d-inline-block align-top"
      >
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-brand
        class="brand-name"
        href="#"
        @click.prevent="navigate('app-home', 'Strona Główna')"
      >GWIAZDA
        <br>
        <span class="brand-description">Ruchomy Klub Sportowy</span>
      </b-navbar-brand>
      <b-navbar-nav v-for="site in sites" :key="site.key" class="ml-auto">
        <b-nav-item @click.prevent="navigate(site.tag, site.title)">{{site.title}}</b-nav-item>
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
          tag: "app-about-us",
          key: 1
        },
        {
          title: "GALERIA",
          tag: "app-gallery",
          key: 2
        },
        {
          title: "CENNIK",
          tag: "app-prices",
          key: 3
        },
        {
          title: "KONTAKT",
          tag: "app-contact-us",
          key: 4
        }
      ]
    };
  },
  methods: {
    navigate(newView, title) {
      eventBus.$emit("changeView", {
        tag: newView,
        title: title
      });
    }
  }
};
</script>

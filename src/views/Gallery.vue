<template>
  <b-row align-h="center">
    <b-col cols="12" md="10">
      <b-row class="justify-content-md-center">
        <b-col
          cols="6"
          md="4"
          lg="3"
          class="pt-5"
          v-for="(gram, index) in this.grams"
          :key="gram.id"
        >
          <b-img
            thumbnail
            fluid
            :src="gram.images.low_resolution.url"
            @click="getFullViewHtml(gram.link, index)"
          />
        </b-col>
        <b-col cols="12" class="pt-5">
          <button @click="getMoreGrams()" class="load-more btn-hexagon">WIĘCEJ</button>
        </b-col>
      </b-row>
      <v-modal name="full-view" :scrollable="true" height="auto">
        <div v-html="full_view_html"></div>
      </v-modal>
    </b-col>
  </b-row>
</template>


 <script>
import axios from "axios";
import access_token from "../../access_token";
export default {
  data: function() {
    return {
      access_token,
      url: "https://api.instagram.com/v1/users/self/media/recent/",
      full_view_url: "https://api.instagram.com/oembed",
      grams: [],
      next_url: "",
      error: false,
      full_view: false,
      full_view_html: "",
      full_view_index: ""
    };
  },
  methods: {
    getGrams() {
      axios
        .get(this.url + "?access_token=" + this.access_token)
        .then(({ data }) => {
          this.grams = data.data;
          this.next_url = data.pagination.next_url;
          // eslint-disable-next-line
          console.log(this.grams);
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.log(error);
          this.error = true;
        });
    },
    getMoreGrams() {
      axios
        .get(this.next_url)
        .then(({ data }) => {
          this.grams = this.grams.concat(data.data);
          this.next_url = data.pagination.next_url;
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.log(error);
          this.error = true;
        });
    },
    getFullViewHtml(link, i) {
      axios
        .get(this.full_view_url + "?url=" + link)
        .then(({ data }) => {
          this.full_view_html = data.html.replace(
            '<script async src="//www.instagram.com/embed.js">\u{003C}/script>',
            ""
          );
          this.full_view_index = i;
          // eslint-disable-next-line
          console.log(this.full_view_html);
        })
        .then(() => {
          window.instgrm.Embeds.process();
          this.show();
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.log(error);
          this.error = true;
        });
    },
    show() {
      this.$modal.show("full-view");
    },
    hide() {
      this.$modal.hide("full-view");
    }
  },
  created() {
    this.getGrams();
  }
};
</script>

<style scoped>
.img-thumbnail {
  min-width: 100%;
  height: auto;
  cursor: pointer;
}
.load-more {
  font-weight: 900;
  margin: auto;
}
.btn-hexagon {
  position: relative;
  display: block;
  background: #59125ee6;
  color: rgba(255, 255, 255, 0.5);
  width: 180px;
  height: 60px;
  border: none;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  margin: 40px auto;
  -webkit-clip-path: polygon(
    6.67% 0,
    93.33% 0,
    100% 20%,
    100% 80%,
    93.33% 100%,
    6.67% 100%,
    0% 80%,
    0% 20%
  );
  clip-path: polygon(
    6.67% 0,
    93.33% 0,
    100% 20%,
    100% 80%,
    93.33% 100%,
    6.67% 100%,
    0% 80%,
    0% 20%
  );
}

.btn-hexagon:hover {
  color: rgba(255, 255, 255, 0.75);
}
</style>

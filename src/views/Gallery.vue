<template>
  <b-row align-h="center">
    <b-col cols="12" md="10">
      <b-row class="justify-content-md-center">
        <b-col cols="6" md="4" lg="3" class="pt-5" v-for="gram in this.grams" :key="gram.id">
          <b-img
            thumbnail
            fluid
            :src="gram.images.low_resolution.url"
            v-b-modal.full-view
            @click="getFullViewHtml(gram.link)"
          />
        </b-col>
      </b-row>
      <b-modal id="full-view">
        <div v-html="full_view_html"></div>
      </b-modal>
    </b-col>
  </b-row>
</template>


 <script>
import axios from "axios";
export default {
  data: function() {
    return {
      access_token: "1571030659.1677ed0.7602c8f86864446b9e425bac940ab9da",
      url: "https://api.instagram.com/v1/users/self/media/recent/",
      full_view_url: "https://api.instagram.com/oembed",
      grams: [],
      next_url: "",
      error: false,
      full_view_html: ""
    };
  },
  methods: {
    getGrams() {
      axios
        .get(this.url + "?access_token=" + this.access_token)
        .then(({ data }) => {
          this.grams = data.data;
          this.next_url = data.pagination.next_url;
          console.log(this.grams);
        })
        .catch(function(error) {
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
          console.log(error);
          this.error = true;
        });
    },
    getFullViewHtml(link) {
      axios
        .get(this.full_view_url + "?url=" + link)
        .then(({ data }) => {
          this.full_view_html = data.html.replace(
            '<script async src="//www.instagram.com/embed.js">\u{003C}/script>',
            ""
          );
          console.log(this.full_view_html);
          window.instgrm.Embeds.process();
        })
        .catch(function(error) {
          console.log(error);
          this.error = true;
        });
    }
  },
  created() {
    this.getGrams();
  }
  // mounted: function() {
  //   this.$nextTick(function() {
  //     instgrm.Embeds.process();
  //   });
  // }
};
</script>

<style>
.img-thumbnail {
  min-width: 100%;
  height: auto;
}
</style>

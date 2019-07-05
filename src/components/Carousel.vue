<template>
  <!-- <b-row class="content"> -->
  <div class="bg-carousel">
    <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide v-for="slide in slides" :key="slide.key" class="carousel-item">
        <img slot="img" class="d-block img-fill" :src="slide.imgUrl" />
        <h1>{{slide.imgTitle}}</h1>
        <p>{{slide.imgDescription}}</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
  <!-- </b-row> -->
</template>
<script>
export default {
  props: {
    slides: {
      type: Array
    }
  }
};
</script>

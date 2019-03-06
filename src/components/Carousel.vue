<template>
  <b-row class="content">
    <b-col cols="12" class="bg-carousel">
      <b-carousel
        id="carousel1"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ababab"
        :interval="4000"
        img-width="1024"
        img-height="480"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="slide in slides" :key="slide.key" class="carousel-item">
          <img slot="img" class="d-block img-fill" :src="slide.imgUrl">
          <h1>{{slide.imgTitle}}</h1>
          <p>{{slide.imgDescription}}</p>
        </b-carousel-slide>
      </b-carousel>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        {
          imgUrl: "https://picsum.photos/1024/480/?image=55",
          imgTitle: "Obrazek pierwszy",
          imgDescription: "To jest opis pierwszego slajdu",
          key: 1
        },
        {
          imgUrl: "https://picsum.photos/1024/480/?image=54",
          imgTitle: "Obrazek drugi",
          imgDescription: "To jest opis drugiego slajdu",
          key: 2
        },
        {
          imgUrl: "https://picsum.photos/1024/480/?image=53",
          imgTitle: "Obrazek trzeci",
          imgDescription: "To jest opis trzeciego slajdu",
          key: 3
        }
      ]
    };
  }
};
</script>

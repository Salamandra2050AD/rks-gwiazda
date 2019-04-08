<template>
  <b-row align-h="center">
    <b-col cols="12" md="10">
      <b-row class="justify-content-md-center">
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" v-b-modal.carousel/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58"/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59"/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59"/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59"/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54"/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58"/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59"/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59"/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59"/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59"/>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3" class="pt-5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59"/>
        </b-col>
      </b-row>
      <b-modal id="carousel" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </b-col>
  </b-row>
</template>


//  <script>
// export default {
//   data: {
//     pics: [
//       {
//         imgUrl: "https://picsum.photos/1024/480/?image=55",
//         imgTitle: "Obrazek pierwszy",
//         imgDescription: "To jest opis pierwszego slajdu",
//         key: 1
//       }
//     ]
//   }
// };
// </script>

<style>
.img-thumbnail {
  min-width: 100%;
  height: auto;
}
</style>

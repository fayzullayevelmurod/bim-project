<template>
  <v-carousel height="650px" show-arrows-on-hover hide-delimiters>
    <div class="home_wrapper">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-img :src="imgs[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h1 white--text">
            {{ slide }}
          </div>
        </v-row>
      </v-img>
    </v-carousel-item>
    </div>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "/img/bg1.jpg",
        "/img/bg2.jpg",
        "/img/bg3.jpg",
      ],
      slides: ["BIM Project Uz", "BIM Project Uz", "BIM Project Uz"],
    };
  },
};
</script>

<style scoped>
.home_wrapper{
  width: 100% !important;
  height: 100% !important;
  background-color: rgba(0, 0, 0, 0.59) !important;
}
</style>
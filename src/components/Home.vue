<template>
  <v-carousel cycle height="650px" show-arrows-on-hover hide-delimiters>
    <div class="home_wrapper relative">
      <div class="home_text">
        <h1>BIM Project Uz</h1>
        <p>Благополучие нашего города с нашими зданиями</p>
      </div>
      <v-carousel-item
        v-for="i in imgs"
        :key="i"
        style="overflow: hidden;"
      >
        <v-img :src="i" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div
              class="text-h1 white--text"
              style="
                width: 100% !important;
                height: 150vh !important;
                background-color: rgba(0, 0, 0, 0.6) !important;
              "
            ></div>
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
      imgs: ["/img/bg1.jpg", "/img/bg2.jpg", "/img/bg3.jpg"],
    };
  },
};
</script>

<style scoped>
.home_wrapper {
  width: 100% !important;
  height: 100% !important;
  background-color: rgba(0, 0, 0, 0.59) !important;
}
.home_text {
  display: inline-block;
  background-color: transparent !important;
  position: absolute;
  top: 40% !important;
  color: #fff;
  text-align: center;
  left: 0;
  width: 100%;
  z-index: 1;
  transform: translate(-50deg) !important;
}
.home_text h1 {
  position: relative;
  z-index: 1;
  font-size: 80px;
}
.home_text p {
  position: relative;
  z-index: 1;
  font-size: 25px;
}
</style>

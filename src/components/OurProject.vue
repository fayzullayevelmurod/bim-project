<template>
  <v-container
    id="Project"
    class="pa-4 mt-16"
    style="background-color: #203647 !important"
  >
    <v-card
      elevation="0"
      class="text-center"
      style="background-color: #203647 !important"
    >
      <h1 class="projecttitle" style="color: #fff">НАШИ ПРОЕКТЫ</h1>
      <p class="projecttext" style="color: #fff">
        Архитектурные услуги компании включают тщательное изучение объекта,
        подготовку концептуального решения и рабочих чертежей. Мы учитываем все
        требования, предъявляемые к зданиям, и предлагаем оптимальные решения
        для реализации поставленных задач.
      </p>
    </v-card>
    <div class="shoping__slider owl-carousel owl-theme">
     <div class="item">
      <img src="/img/interior2.jpg" alt="">
      <div class="shoping__slide__info">
        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <a href="#">Перейти</a>
     </div>
   </div>
     <div class="item">
      <img src="/img/exterior1.jpg" alt="">
      <div class="shoping__slide__info">
        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <a href="#">Перейти</a>
     </div>
   </div>
</div>
    <!-- <v-sheet class="mx-auto" style="background-color: #203647 !important">
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card
            justify="center"
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-2 margin: 0; padding: 0;"
            height="310px"
            max-width="550px"
            @click="toggle"
          >
            <v-row>
              <v-col cols="12" md="7">
                <v-img src="/img/project__background__1.jpg"></v-img>
              </v-col>
              <v-col cols="12" md="5">
                <div
                  style="
                    background-color: #007cc7 !important;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                  "
                >
                  <h1>Проект №***</h1>
                  <p>Площадь : <span>19182</span></p>
                  <p>Комнаты : : <span>22</span></p>
                  <p>Этаж : : <span>22</span></p>
                  <p>Цена : : <span>22</span></p>
                  <v-btn color="primary">Обсудить проект</v-btn>
                </div>
              </v-col>
            </v-row>

            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition> </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet> -->
    <v-btn class="btn ma-2" outlined rounded elevation="2"
      >Перейти к проектам</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: "OurProject",
  data: () => ({
    model: null,
  }),
  mounted() {
    $(".shoping__slider.owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  },
};
</script>

<style scoped>
.btn {
  width: 240px;
  color: #fff !important;
  transition: all 1s ease !important;
  border: 2px solid #007cc7 !important;
}
.btn:hover {
  border: transparent !important;
  color: #fff !important;
  background-color: #007cc7 !important;
}
.projecttitle {
  display: flex !important;
  align-items: center !important;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
}
.projecttext {
  margin-top: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
.projecttitle:before {
  content: "";
  height: 4px;
  margin-right: 20px !important;
  flex: 1;
  display: block;
  background-color: #fff;
}
.projecttitle:after {
  content: "";
  height: 4px;
  margin-left: 20px !important;
  flex: 1;
  display: block;
  background-color: #fff;
}
</style>

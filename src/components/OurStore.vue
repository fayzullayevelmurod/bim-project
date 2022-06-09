<template>
  <v-container
    id="Store"
    class="pa-4 mt-16 pb-10 px-0 text-center"
    style="background-color: #203647 !important"
  >
    <v-card md="8" elevation="0" style="background-color: #203647 !important">
      <v-container>
        <h1 class="storetitle" style="color: #fff">НАШ МАГАЗИН</h1>
      </v-container>
      <p style="color: #fff">
        Архитектурные услуги компании включают тщательное изучение объекта,
        подготовку концептуального решения и рабочих чертежей. Мы учитываем все
        требования, предъявляемые к зданиям, и предлагаем оптимальные решения
        для реализации поставленных задач.
      </p>
    </v-card>
    <v-sheet
      dark
      class="mx-auto transparent mb-0 pb-0"
      style="background: transparent !important"
    >
      <v-slide-group
        v-model="model"
        class="pa-4 pb-0 mb-0"
        center-active
        multiple
        show-arrows
      >
        <v-slide-item v-for="(model, n) in models" :key="n" class="mb-0 pb-0">
          <v-card justify="center" class="ma-2 mb-0 pb-0">
            <v-card
              class="mx-auto mb-0 pb-0"
              width="250"
              height="300"
              color="#007cc7"
            >
              <v-carousel
                height="200"
                width="100%"
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item v-for="(image, i) in model['image']" :key="i">
                  <v-sheet height="100%" width="100%">
                    <v-img width="100%" height="100%" :src="image.src"></v-img>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>

              <v-card-title>
                {{ model["title"] }}
              </v-card-title>

              <v-container class="mb-0 pb-0">
                <v-card-actions>
                  <span style="font-size: 16px">Pro</span>
                  <v-spacer></v-spacer>
                  <v-btn outlined rounded class="white--text">$20</v-btn>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <div style="width: 100% !important; text-align: center">
      <v-btn class="btn my-5 mt-10 px-15" outlined rounded elevation="2"
        >Перейти к проектам</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import datas from "@/datas.json";
export default {
  name: "OurStore",
  data: () => ({
    models: datas.models,
    length: datas.models.length,
    model: null,
  }),
};
</script>

<style scoped>
.v-card__title {
    padding: 5px 16px;
}
.btn {
  padding: 0 100px !important;
  color: #fff !important;
  transition: all 1s ease !important;
  border: 2px solid #007cc7 !important;
}
.btn:hover {
  border: transparent !important;
  color: #fff !important;
  background-color: #007cc7 !important;
}
.storetitle {
  display: flex !important;
  align-items: center !important;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
}
p {
  margin-top: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
}
.storetitle:before {
  content: "";
  height: 4px;
  margin-right: 20px !important;
  flex: 1;
  display: block;
  background-color: white;
}
.storetitle:after {
  content: "";
  height: 4px;
  margin-left: 20px !important;
  flex: 1;
  display: block;
  background-color: white;
}
@media (max-width: 600px) {
  .btn {
    width: 50%;
    padding: 0 !important;
  }
}
@media (max-width: 570px) {
  h1 {
    font-size: 37px !important;
  }
  p {
    font-size: 18px !important;
  }
}
</style>

<template>
  <v-container
    id="Store"
    class="pa-4 mt-16 text-center"
    style="background-color: #203647 !important"
  >
    <v-card md="8" elevation="0" style="background-color: #203647 !important">
      <h1 class="storetitle" style="color: #fff">НАШ МАГАЗИН</h1>
      <p style="color: #fff">
        Архитектурные услуги компании включают тщательное изучение объекта,
        подготовку концептуального решения и рабочих чертежей. Мы учитываем все
        требования, предъявляемые к зданиям, и предлагаем оптимальные решения
        для реализации поставленных задач.
      </p>
    </v-card>
    <v-sheet class="mx-auto" style="background-color: #203647 !important">
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card
            justify="center"
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-2"
            height="250"
            width="250"
            @click="toggle"
          >
            <v-img src="/img/project__background__2.jpg"></v-img>
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition> </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "OurStore",
  data: () => ({
    model: null,
  }),
};
</script>

<style scoped>
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
</style>

<template>
  <v-container
    class="pa-4 mt-16 text-center"
    style="background-color: #203647 !important"
  >
    <v-card
      elevation="0"
      style="background-color: #203647 !important"
    >
      <h1 class="projecttitle" style="color: #fff">НАШИ ПРОЕКТЫ</h1>
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
            <v-img src="/img/project__background__1.jpg"></v-img>
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition> </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-btn class="btn ma-2" outlined rounded elevation="2">Перейти к проектам</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "OurProject",
  data: () => ({
    model: null,
  }),
};
</script>

<style scoped>
.btn{
  width: 240px;
  color: #fff !important;
  transition: all 1s ease !important;
  border: 2px solid #007CC7 !important;
}
.btn:hover{
  border: transparent !important;
  color: #fff !important;
  background-color: #007CC7 !important;
}
.projecttitle {
  display: flex !important;
  align-items: center !important;
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

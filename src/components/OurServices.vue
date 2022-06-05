<template class="ourservices">
  <v-container class="text-center">
    <v-row style="background-color: #203647 !important;">
      <v-col cols="12" md="5"  justify="center">
        <v-card  elevation="0" class="pa-2" style="background-color: #203647 !important;">
          <h1 class="servicestitle">НАШИ УСЛУГИ</h1>
          <p style="color: #fff;">
            Архитектурные услуги компании включают тщательное изучение объекта,
            подготовку концептуального решения и рабочих чертежей. Мы учитываем все
            требования, предъявляемые к зданиям, и предлагаем оптимальные решения
            для реализации поставленных задач.
          </p>
          <v-btn class="ma-2">Перейти</v-btn>
      </v-card>
      </v-col>
      <v-col cols="12" md="7">
        <v-row class="fill-height" justify="center">
            <v-col cols="7" md="4">
              <router-link :to="{name: 'Models'}" style="text-decoration: none !important;">
                <v-card class="services_card pa-4" style="background-color: #007CC7 !important;">
                    <v-img class="ma-4" src="/img/3dmodel.svg"></v-img>
                    <h3 class="pa-2 white--text">3d моделлирование</h3>
                </v-card>
              </router-link>
            </v-col>
            <v-col cols="7" md="4">
              <router-link :to="{name: 'Models'}" style="text-decoration: none !important">
                <v-card class="services_card pa-8" style="background-color: #007CC7 !important;">
                <v-img class="ma-4" src="/img/gotovy_project.svg"></v-img>
                <h3 class="pa-2 white--text">Готовые проекты</h3>
              </v-card>
              </router-link>
            </v-col>
            <v-col cols="7" md="4">
              <router-link :to="{name: 'Models'}" style="text-decoration: none !important">
                <v-card class="services_card pa-4" style="background-color: #007CC7 !important;">
                <v-img class="ma-4" src="/img/konstruksiya.svg"></v-img>
                <h3 class="pa-2 white--text">Конструкция</h3>
              </v-card>
              </router-link>
            </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OurServices",
  
};
</script>

<style scoped>
.ourservices{
  background-color: #12232E !important;
}
.services_card{
  transition: all 0.7s ease;
}
.services_card:hover{
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
}
.servicestitle:before{
  content: '';
  height: 4px;
  margin-right: 20px !important;
  flex: 1;
  background-color: #fff;
  display: block;
}
.servicestitle{
  display: flex !important;
  align-items: center;
  color: #fff;
}
.servicestitle:after{
  content: '';
  height: 4px;
  margin-left: 20px !important;
  flex: 1;
  background-color: #fff;
  display: block;
}
</style>
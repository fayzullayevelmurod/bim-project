<template class="ourservices">
  <v-container class="pa-4 text-center">
    <v-row>
      <v-col cols="12" md="5"  justify="center">
        <v-card class="pa-2">
          <h1 class="servicestitle">НАШИ УСЛУГИ</h1>
          <p>
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
              <router-link :to="{name: 'Models'}" style="text-decoration: none !important">
                <v-card class="services_card pa-4 blue darken-4">
                    <v-img class="ma-5" src="/img/exterior.png"></v-img>
                    <h3 class="pa-2 white--text">Exterior</h3>
                </v-card>
              </router-link>
            </v-col>
            <v-col cols="7" md="4">
              <router-link :to="{name: 'Models'}" style="text-decoration: none !important">
                <v-card class="services_card pa-4 blue darken-4">
                <v-img class="ma-5" src="/img/interior.png"></v-img>
                <h3 class="pa-2 white--text">Interior</h3>
              </v-card>
              </router-link>
            </v-col>
            <v-col cols="7" md="4">
              <router-link :to="{name: 'Models'}" style="text-decoration: none !important">
                <v-card class="services_card pa-4 blue darken-4">
                <v-img class="ma-5" src="/img/planning.png"></v-img>
                <h3 class="pa-2 white--text">Planning</h3>
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
.servicestitle{
  display: flex !important;
  align-items: center;
}
.servicestitle:after{
  content: '';
  height: 4px;
  margin-left: 20px !important;
  flex: 1;
  display: block;
  background-color: black;
}
</style>
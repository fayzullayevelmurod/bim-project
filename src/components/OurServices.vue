<template>
  <v-container class="pa-4 text-center">
    <v-row>
      <v-col cols="10" md="8">
        <v-row class="fill-height"  align="center" justify="center">
            <v-col cols="10" md="4" class="services_card">
              <router-link :to="{name: 'Models'}" style="text-decoration: none !important">
                <v-card class="pa-3">
                    <v-img src="/img/exterior.png"></v-img>
                    <h1>Exterior</h1>
                </v-card>
              </router-link>
            </v-col>
            <v-col cols="10" md="4" class="services_card">
              <v-card class="pa-3">
                <v-img src="/img/interior.png"></v-img>
                <h1>Interior</h1>
              </v-card>
            </v-col>
            <v-col cols="10" md="4" class="services_card">
              <v-card class="pa-3">
                <v-img src="/img/planning.png"></v-img>
                <h1>Planning</h1>
              </v-card>
            </v-col>
        </v-row>
      </v-col>
      <v-col cols="11" md="4">
        <v-card class="pa-2">
          <h1>НАШИ УСЛУГИ</h1>
          <p>
            Архитектурные услуги компании включают тщательное изучение объекта,
            подготовку концептуального решения и рабочих чертежей. Мы учитываем все
            требования, предъявляемые к зданиям, и предлагаем оптимальные решения
            для реализации поставленных задач.
          </p>
          <v-btn>Перейти</v-btn>
      </v-card>
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
.services_card{
  transition: all 0.7s ease;
}
.services_card:hover{
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
}
</style>
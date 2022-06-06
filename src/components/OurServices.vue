<template class="ourservices">
  <v-container id="Services" class="mt-16">
    <v-row style="background-color: #203647 !important">
      <v-col cols="12" md="12">
        <h1 class="servicestitle" style="text-align: center;">Наша платформа</h1>
      </v-col>
      <v-col cols="12" md="5" justify="center">
        <v-card
          elevation="0"
          class="pa-2"
          style="background-color: #203647 !important"
        >
          <p style="color: #fff">
            Архитектурные услуги компании включают тщательное изучение объекта,
            подготовку концептуального решения и рабочих чертежей. Мы учитываем
            все требования, предъявляемые к зданиям, и предлагаем оптимальные
            решения для реализации поставленных задач.
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" md="7">
        <v-row class="fill-height text-center" justify="center">
          <v-col class="model" cols="7" md="4">
            <router-link
              :to="{ name: 'Models' }"
              style="text-decoration: none !important;"
            >
              <v-card
                class="services_card pa-6"
                style="background-color: #007cc7 !important;  width:200px !important; height:200px !important;"
              >
                <v-img class="ma-4" src="/img/3dmodel.png"></v-img>
                <h3 class="white--text">3D моделлирование</h3>
              </v-card>
            </router-link>
          </v-col>
          <v-col class="model" cols="7" md="4">
            <router-link
              :to="{ name: 'Models' }"
              style="text-decoration: none !important"
            >
              <v-card
                class="services_card pa-8"
                style="background-color: #007cc7 !important;  width:200px !important; height:200px !important;"
              >
                <v-img class="ma-4" src="/img/gotovy_project.png"></v-img>
                <h3 class="white--text">Готовые проекты</h3>
              </v-card>
            </router-link>
          </v-col>
          <v-col class="model" cols="7" md="4">
            <router-link
              :to="{ name: 'Models' }"
              style="text-decoration: none !important;"
            >
              <v-card
                class="services_card pa-6"
                style="background-color: #007cc7 !important;  width:200px !important; height:200px !important;"
              >
                <v-img class="ma-4" src="/img/konstruksiya.png"></v-img>
                <h3 class="white--text">Конструкция</h3>
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
.ourservices {
  background-color: #12232e !important;
}
.services_card {
  min-height: 250px !important;
  transition: all 0.7s ease;
}
.services_card:hover {
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
}
.servicestitle:before {
  content: "";
  height: 4px;
  margin-right: 20px !important;
  flex: 1;
  background-color: #fff;
  display: block;
}
.servicestitle {
  display: flex !important;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
}
p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
.servicestitle:after {
  content: "";
  height: 4px;
  margin-left: 20px !important;
  flex: 12;
  background-color: #fff;
  display: block;
}
@media only screen and (max-width: 960px){
  .servicestitle:after {
  content: "";
  height: 4px;
  margin-left: 20px !important;
  flex: 1 !important;
  background-color: #fff;
  display: block;
}
p{
  text-align: center !important;
}
.model{
  display: flex !important;
  justify-content: center !important;
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

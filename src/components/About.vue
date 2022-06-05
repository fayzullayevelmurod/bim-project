<template>
  <v-container
    id="About"
    class="pa-4 mt-16"
    style="background-color: #203647 !important"
  >
    <v-row justify="center">
      <v-col cols="11" md="6" style="background-color: #203647 !important">
        <h1 class="abouttitle" style="color: #fff">О НАС</h1>
        <p style="color: #fff">
          Архитектурные услуги компании включают тщательное изучение объекта,
          подготовку концептуального решения и рабочих чертежей. Мы учитываем
          все требования, предъявляемые к зданиям, и предлагаем оптимальные
          решения для реализации поставленных задач.
        </p>
        <v-btn class="btn ma-2" outlined rounded elevation="2">Перейти</v-btn>
      </v-col>
      <v-col style="margin: 0; padding: 0" cols="10" md="6">
        <v-img src="/img/exterior1.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
p {
  margin-top: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 45px;
}
.btn {
  width: 140px;
  color: #fff !important;
  transition: all 1s ease !important;
  border: 2px solid #007cc7 !important;
}
.btn:hover {
  border: transparent !important;
  color: #fff !important;
  background-color: #007cc7 !important;
}
.abouttitle {
  display: flex !important;
  align-items: center !important;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
}
.abouttitle:before {
  content: "";
  height: 4px;
  margin-right: 20px !important;
  flex: 1;
  display: block;
  background-color: white;
}
.abouttitle:after {
  content: "";
  height: 4px;
  margin-left: 20px !important;
  flex: 1;
  display: block;
  background-color: white;
}
</style>

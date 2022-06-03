<template>
  <v-container class="pa-4 text-center">
    <v-card md="8" elevation="0">
      <h1 class="storetitle">НАШ МАГАЗИН</h1>
      <p>
        С каждым днём у нас реализуются новые проекты, и каждый раз мы добавляем
        в своё портфолио новые проекты, здесь показано самые последние проекты.
      </p>
    </v-card>
  </v-container>
</template>

<script>
export default {
    name: "OurStore",
}
</script>

<style scoped>
.storetitle{
  display: flex !important;
  align-items: center !important;
}
.storetitle:before{
  content: '';
  height: 4px;
  margin-right: 20px !important;
  flex: 1;
  display: block;
  background-color: black;
}
.storetitle:after{
  content: '';
  height: 4px;
  margin-left: 20px !important;
  flex: 1;
  display: block;
  background-color: black;
}
</style>

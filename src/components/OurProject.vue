<template>
  <v-container class="pa-4 text-center"  style="background-color: #203647 !important;">
    <v-card elevation="0" style="background-color: #203647 !important;" text--white>
      <h1 class="projecttitle">НАШИ ПРОЕКТЫ</h1>
      <p>
        С каждым днём у нас реализуются новые проекты, и каждый раз мы добавляем
        в своё портфолио новые проекты, здесь показано самые последние проекты.
      </p>
      <v-btn class="mb-5">Перейти</v-btn>
    </v-card>
    <v-sheet class="mx-auto" style="background-color: #203647 !important;">
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card justify="center"
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-2"
            height="250"
            width="250"
            @click="toggle"
          >
          <v-img src="/img/project__background__1.jpg"></v-img>
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
    name: "OurProject",
    data: () => ({
      model: null,
    }),
}
</script>

<style scoped>
.projecttitle{
  display: flex !important;
  align-items: center !important;
}
.projecttitle:before{
  content: '';
  height: 4px;
  margin-right: 20px !important;
  flex: 1;
  display: block;
  background-color: black;
}
.projecttitle:after{
  content: '';
  height: 4px;
  margin-left: 20px !important;
  flex: 1;
  display: block;
  background-color: black;
}
</style>
<template>
  <v-container
    id="Project"
    class="py-4 mt-16 px-0"
    style="background-color: #203647 !important"
  >
    <v-card
      elevation="0"
      class="text-center px-4"
      style="background-color: #203647 !important"
    >
      <h1 class="projecttitle" style="color: #fff">НАШИ ПРОЕКТЫ</h1>
      <p class="projecttext my-12" style="color: #fff">
        Архитектурные услуги компании включают тщательное изучение объекта,
        подготовку концептуального решения и рабочих чертежей. Мы учитываем все
        требования, предъявляемые к зданиям, и предлагаем оптимальные решения
        для реализации поставленных задач.
      </p>
    </v-card>

    <v-sheet class="mx-auto m-0 transparent" dark width="100%">
      <v-slide-group
        v-model="model"
        multiple
        show-arrows
        center-active
        style="width: 100% !important"
      >
        <v-slide-item v-for="n in 8" :key="n" v-slot="{ toggle }">
          <v-card @click="toggle" color="#007cc7" class="project_card mx-2">
            <v-row class="row">
              <v-col class="project_wrapper" cols="12" sm="6">
                <v-img
                class="project_img"
                  width="100%"
                  height="100%"
                  src="/img/project__background__1.jpg"
                ></v-img>
              </v-col>
              <v-col cols="0" sm="6">
                <div style="margin: 0; padding: 0; width: 100%; height: 100%">
                  <h1 class="cardtitle py-4">Проект №{{ n }}</h1>
                  <p style="font-weight: 300 !important">
                    Площадь : <span>19182</span>
                  </p>
                  <p style="font-weight: 300 !important">
                    Комнаты : : <span>22</span>
                  </p>
                  <p style="font-weight: 300 !important">
                    Этаж : : <span>22</span>
                  </p>
                  <p style="font-weight: 500 !important">
                    Цена : : <span style="font-weight: 300 !important">22</span>
                  </p>
                  <v-btn depressed outlined rounded color="#fff" class="button"
                    >Обсудить проект</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <div style="width: 100% !important; text-align: center">
      <v-container>
        <v-btn class="btn my-5 mt-10 px-15" outlined rounded elevation="2"
          >Перейти к проектам</v-btn>
      </v-container>
    </div>
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
#Project{
  margin: 0 auto !important;
}
.btn{
  padding: 0 100px !important;
  color: #fff !important;
  transition: all 1s ease !important;
  border: 2px solid #007cc7 !important;
}
.btn:hover{
  border: transparent !important;
  color: #fff !important;
  background-color: #007cc7 !important;
}
.projecttitle{
  display: flex !important;
  align-items: center !important;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
}
.projecttext {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
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
.button {
  text-transform: none !important;
  font-weight: 300 !important;
}
.v-application p {
    margin-left: 10px;
    margin-bottom: 8px;
}
.v-application .py-4 {
    margin-left: 10px;
    padding-top: 0px !important;
    padding-bottom: 9px !important;
}
.v-btn:not(.v-btn--round).v-size--default {
    /* margin-left: 10px; */
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
    margin-bottom: 10px;
}
.cardtitle{
  font-size: 25px;
}
.row {
  max-height: 650px !important;
  width: 400px;
}
@media (max-width: 599px) {
  .v-btn:not(.v-btn--round).v-size--default {
    width: 150px;
  }
  .project_wrapper{
    height: 300px !important;
  }
 .row {
    text-align: center !important;
    /* height: 595px !important; */
    width: 350px !important;
  }
  .row .project_img{
    height: 100% !important;
  }
  .btn {
    width: 70% !important;
    padding: 0 !important;
  }
}
@media (max-width: 570px) {
  h1 {
    font-size: 30px !important;
  }
  p {
    font-size: 18px !important;
  }
}
@media (max-width: 375px){
  .row {
    width: 275px !important;
  }
}
</style>

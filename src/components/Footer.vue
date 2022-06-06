<template>
  <div style="background-color: #203647 !important">
    <v-container>
      <v-row justify="center">
        <v-col cols="7" md="4">
          <v-img class="footerimg" src="/img/bim-logo-white.png"></v-img>
        </v-col>
        <v-col cols="7" md="4">
          <p>
            Республика Узбекистан Сурхандарьинская область города Термез
            ул.Тараккаийот 40А-дом
          </p>
        </v-col>
        <v-col cols="7" md="4">
          <ul>
            <li><a href="#About">О нас</a></li>
            <li><a href="#Services">Наша платформа</a></li>
            <li><a href="#Project">Наши проекты</a></li>
            <li><a href="#Store">Наш магазин</a></li>
            <li><a href="#Map">Социальные сети</a></li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footerimg {
  width: 200px !important;
}
p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
a {
  text-decoration: none !important;
  color: #fff !important;
  transition: all 0.5s ease !important;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
}
a:hover {
  color: #007cc7 !important;
}
p {
  color: white !important;
}
li {
  margin: 10px 0 !important;
  list-style: none !important;
}
@media (max-width: 570px) {
  a {
    font-size: 16px;
  }
  p {
    font-size: 18px;
  }
  .footerimg {
  width: 150px !important;
}
}
</style>

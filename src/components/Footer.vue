<template>
  <div style="background-color: #203647 !important">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-img class="footerimg" src="/img/bim-logo-white.png"></v-img>
        </v-col>
        <v-col cols="12" md="4">
          <p>
            Республика Узбекистан Сурхандарьинская область города Термез
            ул.Тараккаийот 40А-дом
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Наша платформа</a></li>
            <li><a href="#">Наши проекты</a></li>
            <li><a href="#">Наш магазин</a></li>
            <li><a href="#">Социальные сети</a></li>
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
a{
    text-decoration: none !important;
    color: #fff !important;
    transition: all 0.5s ease !important;
}
a:hover{
    color: #007cc7 !important;
}
p{
    color: white !important;
}
li{
    margin: 10px 0 !important;
    list-style: none !important;
}
</style>

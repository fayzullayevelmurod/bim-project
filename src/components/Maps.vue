<template>
    <v-container class="mt-16 mb-16">
        <v-row style="background-color: #203647 !important">
            <v-col cols="12" md="12">
                <h1 class="maptitle">Социальная сеть</h1>
            </v-col>
            <v-col cols="12" md="2" class="messengers">
                <a class="facebook" href="#"><i class="telegram fa-brands fa-facebook"></i></a>
                <a class="youtube" href="#"><i class="instagram fa-brands fa-instagram"></i></a>
                <a class="telegram" href="#"><i class="youtube fa-brands fa-youtube"></i></a>
                <a class="instagram" href="#"><i class="telegram fa-brands fa-telegram"></i></a>
            </v-col>
            <v-col class="maps" cols="12" md="10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.8750164855114!2d67.26731371881664!3d37.2301091961161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f352f07fedd50f7%3A0xbf997cff1a48ba97!2zwqtCaW5vIEluc2hvb3QgTWXigJltb3JMb3lpaGHCuyBNQ0hK!5e1!3m2!1sru!2sde!4v1654084609366!5m2!1sru!2sde" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Maps",
}
</script>

<style scoped>
.messengers{
    display: flex !important;
    align-items: center !important;
    justify-content: space-around !important;
    flex-direction: column !important; 
    
}
.messengers a{
    margin: 20px 0;
}
.messengers a i{
    color: #fff !important;
    transition: all 0.5s ease !important;
    font-size: 50px !important;
}
.messengers a .facebook:hover{
    color: #1877f2 !important;
}
.messengers a .instagram:hover{
    color: #e1306c !important;
}
.messengers a .youtube:hover{
    color: #FF0000 !important;
}
.messengers a .telegram:hover{
    color: #0088cc !important;
}
.maptitle:before {
  content: "";
  height: 4px;
  margin-right: 20px !important;
  flex: 1;
  background-color: #fff;
  display: block;
}
.maptitle {
  display: flex !important;
  align-items: center;
  color: #fff;
}
.maptitle:after {
  content: "";
  height: 4px;
  margin-left: 20px !important;
  flex: 12;
  background-color: #fff;
  display: block;
}
iframe{
    width: 100% !important;
    height: 100% !important;
}
.maps{
    height: 400px !important;
}
</style>
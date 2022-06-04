<template>
    <v-container  class="pa-4"  style="background-color: #203647 !important;">
        <v-row justify="center">
            <v-col cols="11" md="6" style="background-color: #203647 !important;">
                <h1 class="abouttitle">О НАС</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium neque blanditiis optio inventore nulla ut unde excepturi atque dolor iusto quisquam accusamus, ducimus expedita nostrum esse! Maiores, velit nihil.</p>
                <v-btn depressed class="ma-2">Перейти</v-btn>
            </v-col>
            <v-col style="margin: 0; padding: 0;" cols="10" md="6">
                <v-img src="/img/exterior1.jpg"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "About",
}
</script>


<style scoped>
.abouttitle{
  display: flex !important;
  align-items: center !important;
}
.abouttitle:before{
  content: '';
  height: 4px;
  margin-right: 20px !important;
  flex: 1;
  display: block;
  background-color: black;
}
.abouttitle:after{
  content: '';
  height: 4px;
  margin-left: 20px !important;
  flex: 1;
  display: block;
  background-color: black;
}
</style>
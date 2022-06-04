<template>
  <v-container style="padding: 0" class="my-15">
    <v-row>
      <router-link
        :to="{ name: 'Models' }"
        class="text-decoration-none white--text"
        style="font-size: 40px"
        >3d модели</router-link
      >
      <v-spacer></v-spacer>
      <button class="btn mr-10">Новые</button>
      <button class="btn">Топ</button>
      <v-spacer></v-spacer>
      <div class="search">
          <input type="text" placeholder="Search">
          <button>
              <v-icon size="30px" color="white">mdi-magnify</v-icon>
          </button>
      </div>
    </v-row>
  </v-container>
</template>
<script>

export default ({})
</script>

<style scoped>
.search{
    border: 2px solid #007cc7;
    border-radius: 100px;
    display: flex;
    width: 300px;
    align-items: center;
    padding: 0 20px
}
.search input{
    border: none;
    outline: none;
    font-size: 20px;
    color: white;
}
.search button{
    color: white;
    border: none;
    outline: none;
}
.btn{
    padding: 0 40px;
    border: 2px solid #007cc7;
    border-radius: 100px;
    font-size: 20px;
    color: white;
    transition: 0.5s ease all;
}
.btn:hover{
    background: #007cc7;
}
</style>

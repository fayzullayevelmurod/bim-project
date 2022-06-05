<template>
  <div style="padding-top: 80px;!important">
    <v-container class="mt-15 px-6 pt-4">
      <v-row>
        <v-col cols="12" sm="5" lg="4">
          <router-link
            :to="{ name: 'Models' }"
            class="text-decoration-none white--text"
            style="font-size: 40px"
            >3d модели</router-link
          >
        </v-col>
        <v-col cols="12" sm="7" lg="4">
          <div class="btn-group float-right" style="text-align: center">
            <button class="btn mr-10">Новые</button>
            <button class="btn">Топ</button>
          </div>
        </v-col>
        <v-col cols="12" xs="12" lg="4">
          <div>
            <div class="search float-right">
              <input type="text" />
              <button>
                <v-icon size="30px" color="white">mdi-magnify</v-icon>
              </button>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => {
    return {};
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box !important;
}
.search {
  border: 3px solid #007cc7;
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  width: 100% !important;
}
.search input {
  border: none;
  outline: none;
  font-size: 20px;
  color: white;
  width: 0;
  transition: 0.5s ease all;
  width: 100%;
}
.search button {
  color: white;
  border: none;
  outline: none;
}
.btn {
  padding: 8px 40px !important;
  border: 3px solid #007cc7;
  border-radius: 100px;
  font-size: 20px;
  color: white;
  transition: 0.5s ease all;
}
.btn:hover {
  background: #007cc7;
}
@media (max-width: 600px){
  .btn-group{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
@media (max-width: 400px) {
  .search {
    width: 100% !important;
    padding: 6px 20px !important;
  }
  .search input {
    width: 100%;
  }
  .btn-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .btn {
    margin: 0 !important;
    font-size: 16px;
    padding: 6px 20px !important;
  }
  .text-decoration-none {
    font-size: 30px !important;
  }
}
</style>

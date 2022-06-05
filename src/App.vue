<template>
  <v-app style="background-color: #12232e">
    <Header />
    <router-view />
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style scoped>
#app {
  scroll-behavior: smooth !important;
}
</style>

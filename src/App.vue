<template>
  <v-app>

    <v-main class="mains">
      <Header />
      <Home />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Home from "@/components/Home";

export default {
  name: 'App',
  components: {
    Header,
    Home,
  }
};
</script>
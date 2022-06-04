<template>
    <v-app style="background-color: #12232E;">
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


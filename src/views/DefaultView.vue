<template>
  <div>
    <Home />
    <OurServices />
    <OurProject />
    <OurStore />
    <About />
    <Maps />
  </div>
</template>

<script>
import Home from "@/components/Home";
import OurProject from "@/components/OurProject";
import OurServices from "@/components/OurServices";
import OurStore from "@/components/OurStore";
import About from "@/components/About";
import Maps from "@/components/Maps";

export default {
  name: 'DefaultView',
  components: {
    Home,
    OurProject,
    OurServices,
    OurStore,
    About,
    Maps,
  }
}
</script>

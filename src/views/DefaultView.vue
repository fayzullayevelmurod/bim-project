<template>
  <div>
    <Home />
    <OurProject />
    <OurServices />
  </div>
</template>

<script>
import Home from "@/components/Home";
import OurProject from "@/components/OurProject";
import OurServices from "@/components/OurServices";

export default {
  name: 'DefaultView',
  components: {
    Home,
    OurProject,
    OurServices,
  }
}
</script>

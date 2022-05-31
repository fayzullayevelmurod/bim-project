<template>
  <div class="mt-12">
    <v-container>
      <router-link :to="{ name: 'Models' }"
        >Transition to the 3d model</router-link
      >
      <h1>Hello world {{$route.params.id}}</h1>
      <p>
      </p>
    </v-container>
  </div>
</template>

<script>
import datas from '@/datas.json'

export default {
    name: 'ModelOne',
    data(){
        return{
            model: this.getModel(),
            // img: this.getModelImg(),
        }
    },
    methods: {
        getModel(){
            const id = Number(this.$route.params.id);
            const model = datas.models[id-1];
            return model;
        },
        getModelImg(){
            const img = this.model.image;
            return img;
        }
    }
}
</script>
<template>
  <div class="mt-12">
    <v-container>
      <router-link :to="{ name: 'Models' }"
        >3D model</router-link
      >
      <h1 class="mt-10">3d Model name</h1>
      <hr class="mt-2 mb-8">
      <v-row>
        <v-col cols="8">
          <div class="img">
            <v-img width="100%" height="90vh" :src="images[imgId].src"></v-img>
            <button class="btn" @click="nextPrev(false)">
              <v-icon size="60px" color="white">mdi-chevron-left</v-icon>
            </button>
            <button class="btn" @click="nextPrev(true)">
              <v-icon size="60px" color="white">mdi-chevron-right</v-icon>
            </button>
          </div>
          <div class="width-100 d-flex justify-center mt-5">
            <div v-for="(img, index) in images" :key="index" class="mx-1 pa-1 imgCards" @click="imgId=index">
              <v-img class="imgs" :src="img.src" width="50px" height="50px"></v-img>
              <span :class="imgId == index ? 'active': ''"></span>
            </div>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="text-h5">
            <b>
              {{model.title}}
            </b>
            <v-alert outlined color="blue" class="ms-5 d-inline-block py-0 blue-gray text-h6">FREE</v-alert>
          </div>
          <v-btn outlined color="blue" class="btn1 black--text" width="100%">
            <v-icon class="mr-1">mdi-download</v-icon>
            Download
            <v-spacer></v-spacer>
            <span>600$</span>
          </v-btn>
          <div style="background: #f2f2f2;"  class="pa-5 mt-5 rounded">
            <b class="">REVIEW</b>
            <div v-for="(review, index) in reviews" :key="index">
              <v-row class="my-1">
                <v-col cols="4">{{review.title}}</v-col>
                <v-col cols="8"><b>{{review.value}}</b></v-col>
              </v-row>
              <hr v-if="reviews.length-1 != index">

            </div>
          </div>
        </v-col>
      </v-row>
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
            images: this.getModelImg(),
            imgId: 0,
            reviews: [
              {title: 'Platform:', value: "3dsMax 2013 + obj"},
              {title: 'Render:', value: "Corona"},
              {title: 'Size:', value: "160 MB"},
              {title: 'Date:', value: "01.06.2022 16:06"},
              {title: 'Form factor:', value: "Rectangle"},
              {title: 'Style:', value: "Modern"},
              {title: 'Material:', value: "Textile"},
              {title: 'Color:', value: "red, blue"},
            ]
        }
    },
    methods: {
        getModel(){
            const id = Number(this.$route.params.id);
            const model = datas.models[id-1];
            return model;
        },
        getModelImg(){
            const id = Number(this.$route.params.id);
            const images = datas.models[id-1].image;
            return images
        },
        nextPrev(t){
          if(t){
            if(this.imgId >= this.images.length-1){
              this.imgId = 0;
            }else{
              this.imgId++;
            }
          }else{
            if(this.imgId <= 0){
              this.imgId = this.images.length - 1;
            }else{
              this.imgId--;
            }
          }
        }
    }
}
</script>

<style scoped>
.img{
  position: relative!important;
}
.btn{
  position: absolute;
  top: 50%;
  transform: translateY(-30%);
  font-size: 30px;
  background: rgba(128, 128, 128, 0.4);
  height: 120px;
  transition: 0.5s ease all;
  border-radius: 0 100px 100px 0;
}
.btn:last-child{
  right: 0;
  border-radius: 100px 0 0 100px;
}
.btn:hover{
  background: rgba(128,128,128,0.7);
}
.imgCards{
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 5px;
  transition: 0.5s ease all;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.imgCards span{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 2;
}
.imgCards .active{
  background: rgba(16, 116, 230, 0.5)
}
.btn1{
  color: black!important;
  border: 1px solid #2196f3;
  transition: 0.5s ease all;
  font-size: 25px;
  padding: 20px!important;
  text-transform: none;
}
.btn1:hover{
  background: #2196f3!important;
}
</style>
<template>
  <div class="mt-12" style="background: #12232e!important;">
    <ModelHeader />
    <v-container class="px-10">
      <v-row
        class="my-5"
        style="background: #007cc7; height: 550px; box-sizing: border-box"
      >
        <v-col cols="12" md="7" style="padding: 0; height: 550px">
          <div class="img">
            <v-img width="100%" height="100%" :src="images[imgId].src"></v-img>
            <button class="btn" @click="nextPrev(false)">
              <v-icon size="60px" color="white">mdi-chevron-left</v-icon>
            </button>
            <button class="btn" @click="nextPrev(true)">
              <v-icon size="60px" color="white">mdi-chevron-right</v-icon>
            </button>
          </div>
        </v-col>
        <v-col cols="12" md="5" style="background: #007cc7; padding: 0 30px">
          <div
            class="text-center white--text"
            style="font-size: 40px; margin-top: 20px"
          >
            Кресло
          </div>
          <v-btn
            outlined
            rounded
            color="white"
            class="btn1 white--text py-8 my-5"
            width="100%"
            style="font-size: 35px"
          >
            $600
          </v-btn>
          <div style="background: #007cc7" class="mt-5 pt-1 rounded white--text">
            <div
              v-for="(review, index) in reviews"
              :key="index"
              style="font-size: 30px; linear-height: 36px"
              class="my-5"
            >
              <b class="mr-5">{{ review.title }}</b> {{ review.value }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import datas from "@/datas.json";
import ModelHeader from "@/components/ModelHeader.vue"

export default {
  name: "ModelOne",
  components: {
    ModelHeader
  },
  data() {
    return {
      model: this.getModel(),
      images: this.getModelImg(),
      imgId: 0,
      reviews: [
        { title: "Рендер :", value: "Corona" },
        { title: "Размер :", value: "32mb" },
        { title: "Число скачивании :", value: "120" },
        { title: "Дата :", value: "12. 16. 2020 г." },
      ],
    };
  },
  methods: {
    getModel() {
      const id = Number(this.$route.params.id);
      const model = datas.models[id - 1];
      return model;
    },
    getModelImg() {
      const id = Number(this.$route.params.id);
      const images = datas.models[id - 1].image;
      return images;
    },
    nextPrev(t) {
      if (t) {
        if (this.imgId >= this.images.length - 1) {
          this.imgId = 0;
        } else {
          this.imgId++;
        }
      } else {
        if (this.imgId <= 0) {
          this.imgId = this.images.length - 1;
        } else {
          this.imgId--;
        }
      }
    },
  },
};
</script>

<style scoped>
.img {
  position: relative !important;
  height: 100%;
}
.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-30%);
  font-size: 30px;
  background: rgba(128, 128, 128, 0.4);
  height: 120px;
  transition: 0.5s ease all;
  border-radius: 0 100px 100px 0;
}
.btn:last-child {
  right: 0;
  border-radius: 100px 0 0 100px;
}
.btn:hover {
  background: rgba(128, 128, 128, 0.7);
}
.imgCards {
  border-radius: 5px;
  transition: 0.5s ease all;
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.imgCards .active {
  width: 100% !important;
  height: 100% !important;
}

.btn1 {
  border-radius: 100px !important;
  border: 3px solid white;
}
.btn1:hover {
  background: #007cc7 !important;
}
</style>
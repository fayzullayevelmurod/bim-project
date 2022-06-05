<template>
  <div class="mt-2">
    <ModelHeader />
    <v-container>
      <div class="relative my-4 px-2">
        <v-expansion-panels dark class="rounded">
          <v-expansion-panel style="background: #12232e !important">
            <v-expansion-panel-header style="background: #12232e !important">
              3D Models
            </v-expansion-panel-header>
            <v-expansion-panel-content
              style="background: #12232e !important"
              class="p-0"
            >
              <v-list
                shaped
                title
                width="auto"
                dark
                style="background: #12232e !important"
              >
                <v-list-group
                  dark
                  width="auto"
                  v-for="(item, index) in items"
                  :key="index"
                  :prepend-icon="item.action"
                  no-action
                  style="background: #12232e !important"
                >
                  <template
                    v-slot:activator
                    style="background: #12232e !important"
                  >
                    <v-list-item-content style="background: #12232e !important">
                      <v-list-item-title
                        v-text="item.title"
                        style="background: #12232e !important"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                    class="pa-0"
                    style="background: #12232e !important"
                  >
                    <v-list-item-content class="py-0">
                      <v-checkbox
                        :label="child.title"
                        v-model="child.bool"
                        class="mt-1 ms-5"
                        @change="filterData(index)"
                      ></v-checkbox>
                      <!-- <v-list-item-title v-text=""></v-list-item-title> -->
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <v-row>
        <v-col class="d-none d-lg-inline-block" lg="3">
          <v-list
            shaped
            title
            style="background: none !important; color: white !important"
            dark
          >
            <v-list-group
              v-for="(item, index) in items"
              :key="index"
              :prepend-icon="item.action"
              color="white"
              class="white--text"
              style="background: none !important; color: white !important"
              dark
            >
              <template
                v-slot:activator
                style="
                  width: auto;
                  background: none !important;
                  color: white !important;
                "
              >
                <v-list-item-content
                  style="
                    width: auto;
                    background: none !important;
                    color: white !important;
                  "
                >
                  <v-list-item-title
                    style="
                      width: auto;
                      background: none !important;
                      color: white !important;
                    "
                    v-text="item.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.items"
                :key="child.title"
                class="pa-0"
              >
                <v-list-item-content class="py-0">
                  <v-checkbox
                    :label="child.title"
                    v-model="child.bool"
                    class="mt-1 ms-5"
                    @change="filterData(index)"
                  ></v-checkbox>
                  <!-- <v-list-item-title v-text=""></v-list-item-title> -->
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-col>

        <v-col cols="12" lg="9">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="model of models"
                :key="model.id"
              >
                <v-card
                  @mouseover="showHover"
                  @mousemove="hoverImg = model.image[imageId].src"
                  @mouseleave="hideHover"
                  dark
                  style="background: #007cc7 !important"
                >
                  <div class="carusel">
                    <button class="button btn-left">
                      <v-icon
                        color="white"
                        size="35px"
                        @click="nextPrev(0, model.id)"
                        @mousemove="modId = model.id"
                        @mouseleave="modId = 0"
                        >mdi-chevron-left</v-icon
                      >
                    </button>
                    <button class="button btn-right">
                      <v-icon
                        color="white"
                        size="35px"
                        @click="nextPrev(1, model.id)"
                        @mousemove="modId = model.id"
                        @mouseleave="modId = 0"
                        >mdi-chevron-right</v-icon
                      >
                    </button>
                    <router-link :to="`/model_one${model.id}`">
                      <v-img
                        height="100%"
                        :src="model.image[0].src"
                        @mousemove="modId = model.id"
                        @mouseleave="modId = 0"
                      ></v-img>
                    </router-link>
                    <div class="btn-group" @mousemove="modId = model.id">
                      <button
                        @mousemove="modId = model.id"
                        v-for="(item, i) in model.image"
                        :key="i"
                        @click="imgId(i, model.id)"
                        :class="model.id == modId ? 'box-shadow' : ''"
                      >
                        <span :class="i == imageId ? 'span-active' : ''"></span>
                      </button>
                    </div>
                  </div>
                  <v-card-title class="py-1">
                    <router-link
                      :to="`model_one${model.id}`"
                      class="text-decoration-none white--text hover"
                    >
                      {{ model.title }}
                    </router-link>
                  </v-card-title>

                  <v-card-actions class="px-4">
                    <sapn style="font-size: 16px">Pro</sapn>
                    <v-spacer></v-spacer>
                    <v-btn outlined rounded class="white--text">$20</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <div class="hoverEffect">
        <v-img width="100%" height="100%" :src="hoverImg"></v-img>
      </div>
    </v-container>
  </div>
</template>

<script>
import ModelHeader from "@/components/ModelHeader.vue";
import datas from "@/datas.json";
export default {
  name: "Models",
  components: {
    ModelHeader,
  },
  data: () => ({
    imageId: 0,
    modId: 0,
    items: datas.items,
    models: datas.models,
    hover: true,
    tagWidth: 0,
    right: 0,
    hoverImg: "",
    halfWidth: 0,
    clientWidth: 0,
    layerX: 0,
    arifmeticWidth: 0,
    newModel: null,
  }),
  methods: {
    filterData(index) {
      for (let i = 0; i < this.items.length; i++) {
        if (i == index) {
          let dat = [];
          datas.models.forEach((mod) => {
            this.items[i].items.forEach((itm) => {
              if (itm.bool && itm.title == mod.title) {
                dat.push(mod);
              }
            });
          });
          if (dat.length > 0) {
            this.models = dat;
          } else {
            this.models = datas.models;
          }
        } else {
          this.items[i].items.forEach((itm) => {
            itm.bool = false;
          });
        }
      }
    },
    showHover: function (event) {
      const element = event.srcElement;
      const vidth = event.view.innerWidth / 2;
      const hoverEffect = document.querySelector(".hoverEffect");
      if (this.hover) {
        this.imageId = 0;
        this.tagWidth = event.clientX - event.offsetX;
        this.halfWidth = event.clientX;
        this.layerX = event.layerX;
        this.arifmeticWidth = this.halfWidth - this.layerX;
        this.clientWidth = element.clientWidth;
        this.hover = false;
        if (vidth < this.arifmeticWidth + this.clientWidth / 2) {
          this.right = vidth * 2 - this.tagWidth + 10;
          hoverEffect.style.left = "auto";
          hoverEffect.style.right = `${this.right}px`;
        } else {
          this.right = this.tagWidth + this.clientWidth + 15;
          hoverEffect.style.right = "auto";
          hoverEffect.style.left = `${this.right}px`;
        }
      } else {
      }
      hoverEffect.style.display = "inline-block";
    },
    hideHover: function (event) {
      this.hover = true;
      const hoverEffect = document.querySelector(".hoverEffect");
      hoverEffect.style.display = "none";
      this.modId = 0;
    },
    imgId(id, modelId) {
      this.findModel(modelId);
      this.hoverImg = this.newModel.image[id].src;
      this.imageId = id;
    },
    nextPrev(i, modelId) {
      this.findModel(modelId);
      if (i == 1) {
        if (this.newModel.image.length - 1 == this.imageId) {
          this.imageId = 0;
        } else {
          this.imageId++;
        }
        this.hoverImg = this.newModel.image[this.imageId].src;
      } else {
        if (this.imageId == 0) {
          this.imageId = this.newModel.image.length - 1;
        } else {
          this.imageId--;
        }
        this.hoverImg = this.newModel.image[this.imageId].src;
      }
    },
    findModel(modelId) {
      const dat = null;
      this.models.forEach((item) => {
        if (item.id == modelId) {
          this.newModel = item;
        }
      });
    },
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}
.models {
  width: 300px;
  position: absolute;
  z-index: 2;
  top: 38px;
  left: -100%;
  transition: 0.5s all ease;
}
.models-active {
  left: 0;
  transition: 0.5s all ease;
}
.hover {
  transition: 0.5s ease all !important;
}
.hover:hover {
  text-decoration: underline !important;
}
.hoverEffect {
  width: 40vw;
  height: 90vh;
  background: white;
  position: fixed;
  bottom: 5vh;
  display: none;
  z-index: 100;
  border-radius: 20px;
  overflow: hidden;
  border: 3px solid #007cc7;
}
.carusel {
  height: 200px;
  width: auto;
  background: #007cc7;
  overflow: hidden;
  position: relative;
}
.carusel .button {
  position: absolute;
  top: 50%;
  transform: translateY(-50deg);
  z-index: 1;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}
.carusel .button:first-child {
  left: -100%;
  transition: 0.5s ease all;
}
.carusel .button:not(:first-child) {
  right: -100%;
  transition: 0.5s ease all;
}
.carusel .btn-group {
  transition: 0.5s ease all;
  width: 100%;
  left: 0;
  bottom: -100%;
  transform: translateY(-100deg);
  position: absolute;
  z-index: 1;
  padding: 0 10%;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
}
.carusel .btn-group button {
  background: rgba(255, 255, 255, 0.525);
  border-radius: 100px;
  padding: 8px;
  position: relative;
  overflow: hidden;
}
/* .carusel .btn-group .box-shadow{
} */
.carusel .btn-group .box-shadow .span-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
}
.carusel .btn-group button:not(:last-child) {
  margin-right: 10%;
}
.btn-group .box-shadow {
  background: white;
}
/* .btn-group .box-shadow .span-active{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
} */
.carusel:hover .btn-group {
  transition: 0.5s ease all;
  bottom: 0;
}
.carusel:hover .btn-left {
  left: 8%;
  transition: 0.5s ease all;
}
.carusel:hover .btn-right {
  right: 8%;
  transition: 0.5s ease all;
}
.rounded {
  border-radius: 10px !important;
  border: 3px solid #007cc7;
  overflow: hidden;
  width: 100% !important;
  box-sizing: border-box !important;
  background: #12232e !important;
}
@media (min-width: 1264px) {
  .rounded {
    display: none !important;
  }
}
@media (max-width: 1264px){
  .hoverEffect{
    display: none !important;
  }
}
</style>

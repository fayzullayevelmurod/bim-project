<template>
  <div class="mt-12">
    <div class="relative">
      <v-btn depressed width="300px" class="white d-block d-lg-none relative" @click="toggle = !toggle"
        >
          3d Models
          <span v-if="toggle">
            <v-icon>mdi-chevron-right</v-icon>
          </span>
          <span v-if="!toggle">
            <v-icon>mdi-chevron-left</v-icon>
          </span>
        </v-btn
      >
      <div class="white d-block d-lg-none models" :class="toggle ? '' : 'models-active'">
        <v-list shaped title>
          <v-list-group
            v-for="(item, index) in items"
            :key="index"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
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
      </div>
    </div>

    <v-row>
      <v-col class="d-none d-lg-block" lg="3">
        <v-list shaped title>
          <v-list-group
            v-for="(item, index) in items"
            :key="index"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
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
              cols="6"
              sm="4"
              md="3"
              v-for="model of models"
              :key="model.id"
            >
              <v-card>
                <v-carousel
                  height="200"
                  show-arrows-on-hover
                  hide-delimiter-background
                >
                  <router-link :to="`/model_one${model.id}`">
                    <v-carousel-item
                      v-for="(item, i) in model.image"
                      :key="i"
                      :src="item.src"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    ></v-carousel-item>
                  </router-link>
                </v-carousel>

                <v-card-title class="py-1">
                  <router-link :to="`model_one${model.id}`" class="text-decoration-none black--text hover">
                     {{ model.id }} {{ model.title }}
                  </router-link>
                </v-card-title>

                <v-card-actions>
                  <v-btn depressed>3<v-icon>mdi-currency-usd</v-icon></v-btn>
                  <v-spacer></v-spacer>
                  <v-btn depressed><v-icon>mdi-download</v-icon>34</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import datas from "@/datas.json";
export default {
  name: "Models",
  data: () => ({
    items: datas.items,
    models: datas.models,
    toggle: true,
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
  },
};
</script>

<style scoped>
.relative{
  position: relative;
}
.models{
  width: 300px;
  position: absolute;
  z-index: 2;
  top: 38px;
  left: -100%;
  transition: .5s all ease;
}
.models-active{
  left: 0;
  transition: .5s all ease;
}
.hover{
  transition: .5s ease all!important;
}
.hover:hover{
  text-decoration: underline!important;
}
</style>

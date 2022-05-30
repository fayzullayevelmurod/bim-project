<template>
  <v-app>
    <v-navigation-drawer app>
      <v-card class="mx-auto" max-width="500" elevation="0">

        <v-list tile shaped>
          <v-list-group
            v-for="(item, index) in items"
            :key="index"
            v-model="item.active"
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
      </v-card>
    </v-navigation-drawer>

    <v-app-bar app color="white" elevate-on-scroll>
      <v-btn color="me-5" width="100px">Pro</v-btn>
      <v-btn width="100px">Free</v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <!-- <router-view></router-view> -->
        <v-row>
          <v-col cols="6" sm="4" md="3" v-for="model of models" :key="model.id">
            <v-card>
              <v-carousel
                height="200"
                show-arrows-on-hover
                hide-delimiter-background
              >
                <v-carousel-item
                  v-for="(item, i) in model.image"
                  :key="i"
                  :src="item.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-carousel-item>
              </v-carousel>

              <v-card-title class="py-1">
                {{ model.id }} {{ model.title }}
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
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import datas from '@/datas.json'

export default {
  name: "Models",

  data: () => ({
    items: datas.items,
    models: datas.models
  }),
  methods: {
    filterData(index){
      for(let i = 0; i < this.items.length; i++){
        if(i == index){
          let dat = [];
          datas.models.forEach(mod => {
            this.items[i].items.forEach(itm => {
              if(itm.bool && itm.title == mod.title){
                dat.push(mod)
              }
            })
          })
          if (dat.length > 0) {
            this.models = dat;
          }
          else{
            this.models = datas.models;
          }
        }
        else{
          this.items[i].items.forEach(itm => {
            itm.bool = false;
          });
        }
      }
      }
  }
};
</script>

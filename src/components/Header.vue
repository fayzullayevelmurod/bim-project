<template>
    <div>
        <v-app-bar depressed fixed class="px-5">
            <v-btn class="d-none d-md-flex ma-2" depressed>Главная</v-btn>
            <v-btn class="d-none d-md-flex ma-2" depressed>Портфолио</v-btn>
            <v-btn class="d-none d-md-flex ma-2" depressed>О нас</v-btn>
            <v-spacer></v-spacer>
            <v-img src="/img/bim-logo.png" max-width="60" alt="bim-logo.png"></v-img>
            <v-spacer></v-spacer>
            <v-btn class="d-none d-md-flex ma-2" depressed>Магазин</v-btn>
            <v-btn class="d-none d-md-flex ma-2" depressed>Контакты</v-btn>
            <v-app-bar-nav-icon class="d-flex d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon></v-app-bar>
        <v-sheet>
        <v-container class="fill-height">
        <v-row
            align="center"
            justify="center"
        >
        </v-row>
        </v-container>
        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list-item>
            <v-list-item-avatar>
            <v-img src="/img/bim-logo.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title>BIM Project</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>
        </v-sheet>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Главная', icon: 'mdi-view-dashboard' },
          { title: 'Портфолио', icon: 'mdi-forum' },
          { title: 'О нас', icon: 'mdi-view-dashboard' },
          { title: 'Магазин', icon: 'mdi-forum' },
          { title: 'Контакты', icon: 'mdi-forum' },
        ],
      }
    },
  }
</script>

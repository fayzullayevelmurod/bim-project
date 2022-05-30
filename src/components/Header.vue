<template>
    <div>
        <v-app-bar
        elevation="4" fixed class="px-5"
        >
            <v-btn depressed>Главная</v-btn>
            <v-btn depressed>Портфолио</v-btn>
            <v-btn depressed>О нас</v-btn>
            <v-spacer></v-spacer>
            <v-img src="/img/bim-logo.png" max-width="50" alt="bim-logo.png"></v-img>
            <v-spacer></v-spacer>
            <v-btn depressed>Магазин</v-btn>
            <v-btn depressed>Контакты</v-btn>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon></v-app-bar>
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
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
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
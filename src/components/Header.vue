<template>
  <div class="header" :class="header ? 'header-active' : ''">
    <v-container
      class="header_in d-flex white--text transparent"
      style="align-items: center"
    >
      <div class="links d-none d-md-flex">
        <a href="#" class="link">Главная</a>
        <a href="#About" class="link">О нас</a>
        <a href="#Project" class="link">Портфолио</a>
      </div>
      <v-spacer></v-spacer>
      <div class="btn-group">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              elevation="0"
              depressed
              dark
              v-bind="attrs"
              v-on="on"
              id="shop_item"
              class="d-none d-md-flex"
              ><i class="fa-solid fa-cart-shopping"></i>Магазин
            </v-btn>
          </template>
          <v-list style="background-color: #007cc7 !important">
            <v-list-item>
              <router-link :to="{ name: 'Models' }"
                ><v-list-item-title
                  ><v-btn style="color: #fff !important" depressed
                    >3D моделлар</v-btn
                  ></v-list-item-title
                ></router-link
              >
            </v-list-item>
            <v-list-item>
              <router-link :to="{ name: 'Models' }"
                ><v-list-item-title
                  ><v-btn style="color: #fff !important" depressed
                    >Готовые проекты</v-btn
                  ></v-list-item-title
                ></router-link
              >
            </v-list-item>
            <v-list-item>
              <router-link :to="{ name: 'Models' }"
                ><v-list-item-title
                  ><v-btn style="color: #fff !important" depressed
                    >Конструкция</v-btn
                  ></v-list-item-title
                ></router-link
              >
            </v-list-item>
          </v-list>
        </v-menu>
        <span class="contacts">
          <a href="#" class="nav_item d-none d-md-flex"
            ><i class="fa-solid fa-phone"></i>Контакты
          </a>
        </span>
        <v-btn
          elevation="0"
          width="10px !important"
          class="d-flex d-md-none"
          dark
          @click="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </v-container>
    <div class="img-logo">
      <div class="relative" :class="header ? 'img-logo-active' : ''">
        <router-link :to="{ name: 'DefaultView' }">
          <img
            src="/img/bim-logo-white.png"
            width="100%"
            height="100%"
            alt="logo"
          />
        </router-link>
      </div>
    </div>
    <v-navigation-drawer
      dark
      v-model="drawer"
      absolute
      height="100vh"
      style="z-index: 40; background: #12232e !important"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/img/bim-logo-white.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>BIM Project</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <div>
            <v-icon class="float-right" @click="drawer = !drawer"
              >mdi-close</v-icon
            >
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              ><a href="#" class="link">Главная</a></v-list-item-title
            >
            <v-list-item-title
              ><a href="#About" class="link">О нас</a></v-list-item-title
            >
            <v-list-item-title
              ><a href="#Project" class="link">Портфолио</a></v-list-item-title
            >
            <v-list-item-title
              ><router-link :to="{ name: 'Models' }"
                ><v-list-item-title
                  ><v-btn style="color: #fff !important" depressed
                    >3D моделлар</v-btn
                  ></v-list-item-title
                ></router-link
              ></v-list-item-title
            >
            <v-list-item-title>
              <router-link :to="{ name: 'Models' }"
                ><v-list-item-title
                  ><v-btn style="color: #fff !important" depressed
                    >Готовые проекты</v-btn
                  ></v-list-item-title
                ></router-link
              >
            </v-list-item-title>
            <v-list-item-title>
              <router-link :to="{ name: 'Models' }"
                ><v-list-item-title
                  ><v-btn style="color: #fff !important" depressed
                    >Конструкция</v-btn
                  ></v-list-item-title
                ></router-link
              >
            </v-list-item-title>
            <v-list-item-title
              ><a href="#" class="nav_item d-none d-md-flex"
                ><i class="fa-solid fa-phone"></i>Контакты
              </a></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: false,
      drawer: false,
      // items: [
      //   { title: "Главная" },
      //   { title: "Портфолио" },
      //   { title: "О нас" },
      //   { title: "Магазин", arr: [
      //     {title: "3d model", to:"/models"}
      //   ]},
      //   { title: "Контакты" },
      // ],
    };
  },
  methods: {
    Toggle() {
      this.drawer = !this.drawer;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.header = true;
      } else {
        this.header = false;
      }
      console.log(this.header);
    });
  },
};
</script>

<style scoped>
.header_in{
  margin: 0 auto !important;
}
.v-btn:not(.v-btn--round).v-size--default[data-v-61dd7a3d] {
  height: 0px !important;
  min-width: 0px !important;
  padding: 0 0px !important;
  background-color: transparent;
}
.v-btn:not(.v-btn--round).v-size--default[data-v-61dd7a3d] {
  height: 0px !important;
  min-width: 0px !important;
  padding: 20px 20px !important;
  background-color: transparent;
}
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: transparent;
  transition: 0.5s ease all;
}
a {
  text-decoration: none;
}
.header-active {
  background: #12232e;
}
.img-logo {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateX(50deg);
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-logo .relative {
  padding: 20px 10px 20px 20px;
  background: transparent;
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%;
  transition: 0.5s ease all;
}
.img-logo-active {
  width: 130px !important;
  height: 130px !important;
  background: #12232e !important;
}
.btn-group {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
}
.links {
  position: relative;
  z-index: 3;
}
.link {
  text-decoration: none;
  color: white;
  font-size: 20px;
  transition: 0.5s ease all;
}
.link:not(:last-child) {
  margin-right: 50px;
}
.link:hover {
  color: #007cc7;
}
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#shop_item {
  color: #eefbfb !important;
  border: 3px solid #007cc7 !important;
  border-radius: 30px !important;
  padding: 20px 18px !important;
  -webkit-transition: ease 0.5s !important;
  transition: ease 0.5s !important;
  background-color: none !important;
}
#shop_item i {
  -webkit-transition: ease 0.5s !important;
  transition: ease 0.5s;
  margin-right: 15px;
  margin-top: 2px;
  font-size: 20px;
}

#shop_item:hover {
  background-color: #007cc7;
}

#shop_item:hover i {
  -webkit-transform: translateX(-5px);
  transform: translateX(-5px);
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 47px;
  min-width: 100px;
  padding: 0 16px;
  background-color: transparent;
}
.contacts {
  padding: 10px 20px;
  font-size: 18px;
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
  cursor: pointer;
}
.contacts a {
  color: #eefbfb;
  border: 3px solid #007cc7;
  border-radius: 30px;
  padding: 7px 18px;
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
}
.contacts a i {
  margin-right: 18px;
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

.contacts:hover a {
  background-color: #007cc7;
}

.contacts:hover i {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.mdi-close::before {
  content: "\F0156";
  margin-right: 5px !important;
}
.v-list--dense .v-list-item .v-list-item__title,
.v-list--dense .v-list-item .v-list-item__subtitle {
  font-size: 0.8125rem;
  font-weight: 500;
  font-size: 20px;
  margin: 10px 15px;
  margin: 1;
}
@media (max-width: 960px) {
  .v-btn:not(.v-btn--round).v-size--default[data-v-61dd7a3d][data-v-61dd7a3d] {
    height: 0px !important;
    min-width: 0px !important;
    padding: 20px 40px !important;
    background-color: transparent;
  }
}
@media (max-width: 550px){
  .img-logo .relative {
  padding: 20px 10px 20px 20px;
  background: transparent;
  width: 115px;
  height: 115px;
  position: relative;
  border-radius: 50%;
  transition: 0.5s ease all;
}
.img-logo-active {
  width: 100px !important;
  height: 100px !important;
  background: #12232e !important;
}
}
</style>

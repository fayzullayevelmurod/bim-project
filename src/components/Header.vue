<template>
  <div class="header" :class="header ? 'header-active' : ''">
    <v-container
      class="d-flex white--text transparent"
      style="align-items: center"
    >
      <div class="links">
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
        <v-btn color="pink" class="d-none" dark @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </v-container>
    <div class="img-logo">
      <div class="relative" :class="header ? 'img-logo-active' : ''">
        <router-link :to="{name: 'DefaultView'}">
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
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
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
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
  <!-- <div>
    <main id="main">
      <header class="header">
        <nav class="navbar">
          <ul class="left__links">
            <li class="left__link">
              <a href="#Home" class="nav_item d-none d-md-flex">Главная</a>
            </li>
            <li class="left__link">
              <a href="#Project" class="nav_item d-none d-md-flex">Портфолио</a>
            </li>
            <li class="left__link">
              <a href="#About" class="nav_item d-none d-md-flex">О нас</a>
            </li>
          </ul>
          <v-spacer></v-spacer>
          <div class="logo">
            <img src="/img/bim-logo-white.png" alt="logo" />
          </div>
          <v-spacer></v-spacer>
          <ul class="right__links">
            <li class="shop">
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
                    <router-link :to="{ name: 'Models' }"><v-list-item-title><v-btn style="color: #fff !important;" depressed>3D моделлар</v-btn></v-list-item-title></router-link>
                  </v-list-item>
                  <v-list-item>
                   <router-link :to="{ name: 'Models' }"><v-list-item-title><v-btn style="color: #fff !important;" depressed>Готовые проекты</v-btn></v-list-item-title></router-link>
                  </v-list-item>
                  <v-list-item>
                   <router-link :to="{ name: 'Models' }"><v-list-item-title><v-btn style="color: #fff !important;" depressed>Конструкция</v-btn></v-list-item-title></router-link>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li class="contacts">
              <a href="#" class="nav_item d-none d-md-flex"
                ><i class="fa-solid fa-phone"></i>Контакты</a
              >
            </li>
            <li>
              <v-app-bar-nav-icon
                class="d-flex d-md-none"
                style="
                  color: #fff !important;
                  font-size: 90px !important;
                  z-index: 3 !important;
                "
                @click.stop="drawer = !drawer"
              ></v-app-bar-nav-icon>
            </li>
          </ul>
        </nav>
      </header>
    </main>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      height="100%"
      fixed
      style="
        background-color: #203647 !important;
        z-index: 40 !important;
        color: #fff !important;
      "
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
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      header: false,
      drawer: false,
      items: [
        { title: "Главная", icon: "mdi-view-dashboard" },
        { title: "Портфолио", icon: "mdi-forum" },
        { title: "О нас", icon: "mdi-view-dashboard" },
        { title: "Магазин", icon: "mdi-forum" },
        { title: "Контакты", icon: "mdi-forum" },
      ],
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
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: transparent;
  transition: 0.5s ease all;
}
a{
  text-decoration: none;;
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
  padding: 20px 10px 20px 30px;
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
  padding: 7px 18px !important;
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

/* 
* a {
  text-decoration: none;
}

* li {
  list-style: none;
}
#main {
  max-width: 100%;
}

#main .header {
  width: 100%;
  height: 90px;
  position: fixed;
  z-index: 10;
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
}

#main .header .navbar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
}

#main .header .navbar .left__links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

#main .header .navbar .left__links .left__link {
  margin: 0 20px;
  font-size: 18px;
}

#main .header .navbar .left__links .left__link a {
  color: #eefbfb;
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
  font-weight: 500;
  white-space: nowrap;
}

#main .header .navbar .left__links .left__link a:hover {
  color: #007cc7;
}

#main .header .navbar .logo {
  flex: 1;
  width: 140px;
  height: 140px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

#main .header .navbar .logo img {
  width: 153px;
  height: 100%;
}

#main .header .navbar .right__links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

#main .header .navbar .right__links .shop {
 
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
}

#main .header .navbar .right__links .shop #shop_item {
  color: #eefbfb !important;
  border: 3px solid #007cc7 !important;
  border-radius: 30px !important;
  padding: 7px 18px !important;
  -webkit-transition: ease 0.5s !important;
  transition: ease 0.5s !important;
  background-color: none !important;
}

#main .header .navbar .right__links .shop #shop_item i {
  -webkit-transition: ease 0.5s !important;
  transition: ease 0.5s;
  margin-right: 15px;
  margin-top: 2px;
  font-size: 20px;
}

#main .header .navbar .right__links .shop #shop_item:hover {
  background-color: #007cc7;
}

#main .header .navbar .right__links .shop #shop_item:hover i {
  -webkit-transform: translateX(-5px);
  transform: translateX(-5px);
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 47px;
  min-width: 100px;
  padding: 0 16px;
  background-color: transparent;
}
#main .header .navbar .right__links .contacts {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 18px;
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
  cursor: pointer;
}

#main .header .navbar .right__links .contacts a {
  color: #eefbfb;
  border: 3px solid #007cc7;
  border-radius: 30px;
  padding: 7px 18px;
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
}

#main .header .navbar .right__links .contacts a i {
  margin-right: 18px;
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

#main .header .navbar .right__links .contacts:hover a {
  background-color: #007cc7;
}

#main .header .navbar .right__links .contacts:hover i {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
#main .active__header {
  background-color: #12232e;
}

#main .active__header .navbar .logo {
  width: 90px;
  height: 140px;
  position: relative;
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
}

#main .active__header .navbar .logo::before {
  content: "";
  position: absolute;
  inset: 0;
  top: -15%;
  left: -11%;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #12232e;
  z-index: -1;
} */
</style>

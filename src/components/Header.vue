<template>
  <main id="main">
    <header class="header">
      <nav class="navbar">
        <ul class="left__links">
          <li class="left__link">
            <a href="#"  class="nav_item d-none d-md-flex">Главная</a>
          </li>
          <li class="left__link">
            <a href="#" class="nav_item d-none d-md-flex">Портфолио</a>
          </li>
          <li class="left__link">
            <a href="#" class="nav_item d-none d-md-flex">О нас</a>
          </li>
        </ul>
        <div class="logo">
          <img src="/img/bim-logo-white.png" alt="logo" />
        </div>
        <ul class="right__links">
          <li class="shop">
            <a href="#" class="nav_item d-none d-md-flex"><i class="fa-solid fa-cart-shopping"></i>Магазин</a>
          </li>
          <li class="contacts">
            <a href="#" class="nav_item d-none d-md-flex"><i class="fa-solid fa-phone"></i>Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  </main>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Главная", icon: "mdi-view-dashboard" },
        { title: "Портфолио", icon: "mdi-forum" },
        { title: "О нас", icon: "mdi-view-dashboard" },
        { title: "Магазин", icon: "mdi-forum" },
        { title: "Контакты", icon: "mdi-forum" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let header = document.querySelector("header");
      let logo = document.querySelector("img");
      console.log("elmurod");
      header.classList.toggle("active__header", window.scrollY > 50);
      image.classList.toggle("active", window.scrollY > 50);
    });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
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
  width: 90%;
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
  -ms-flex: 1 1 400px;
  flex: 1 1 400px;
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
}

#main .header .navbar .left__links .left__link a:hover {
  color: #007cc7;
}

#main .header .navbar .logo {
  width: 150px;
  height: 150px;
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
  width: 140px;
  height: 90%;
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
  -ms-flex: 1 1 400px;
  flex: 1 1 400px;
}

#main .header .navbar .right__links .shop {
  margin: 0 10px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
}

#main .header .navbar .right__links .shop a {
  color: #eefbfb;
  border: 3px solid #007cc7;
  border-radius: 30px;
  padding: 7px 18px;
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
}

#main .header .navbar .right__links .shop a i {
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
  margin-right: 15px;
  margin-top: 5px;
}

#main .header .navbar .right__links .shop a:hover {
  background-color: #007cc7;
}

#main .header .navbar .right__links .shop a:hover i {
  -webkit-transform: translateX(-5px);
  transform: translateX(-5px);
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
  width: 120px;
  height: 120px;
  position: relative;
  -webkit-transition: ease 0.5s;
  transition: ease 0.5s;
}

#main .active__header .navbar .logo::before {
  content: "";
  position: absolute;
  inset: 0;
  top: -43%;
  left: -35%;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #12232e;
  z-index: -1;
}
</style>

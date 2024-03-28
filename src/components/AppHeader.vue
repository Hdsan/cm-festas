<template>
  <div class="header">
    <span>
      <img class="logo" name="logo" src="assets/logos/logo.jpg" alt="logo">
    </span>
    <span>
      <span class="icons" name='icon-set'>
        <span v-if="!mobile">
          Entre em contato
        </span>
        <a href="https://wa.link/a69w2y">
          <img height="60px" class="icon" src="assets/logos/whatsapp.png" alt="whatsapp">
        </a>
        <a href="https://www.instagram.com/cibele.mara.9/">
        <img height="60px" class="icon" src="assets/logos/instagram.png" alt="instagram">
        </a>
      </span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      mobile: false
    }
  },
  mounted() {
    this.getScreenSize()
  },
  methods: {
    getScreenSize() {
      const logo = document.getElementsByName("logo");
      const icons = document.getElementsByName("icon-set");
      console.log(window.innerWidth)
      console.log(logo[0])
      if (window.innerWidth <= 768) {
        this.mobile = true
        icons[0].classList.remove('icons');
        logo[0].classList.remove('logo');
        logo[0].classList.add('logo2');
        icons[0].classList.add('icons');

      }

    },
    sendMessage(){
     // https://api.whatsapp.com/send?phone=5531987273139&text=Oi%20%2Cquero%20decorar%20minha%20festa%20%F0%9F%98%80
    }

  }
}
</script>
<style>
.logo {
  position: absolute;
  height: 70px;
}

.logo2 {
  position: absolute;
  left: 20px;
  height: 70px;
}

.header {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: rgb(255, 255, 255);
}

.icons {
  position: absolute;
  right: 0;
  height: 60px
}

.icon {
  margin-left: 20px;
  margin-right: 10px
}
</style>
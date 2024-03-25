<template>
  <div class="main-page">
   <AppHeader/>
    <div class="centered-card">
      <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item, index) in items2"
      :key="index"
    >
      <v-img
        :src="item.src"
        :alt="'Slide ' + (index + 1)"
        aspect-ratio="2.5"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
      <div id="main-card-overlay">
        Te ajudo a criar boas memórias
      </div>
    </div>
    <div class="card-grid">
    <div v-for="item in items" :key="item.id" class="image-container">
      <div class="image-wrapper">
        <img :src="item.uri" :alt="item.name" class="card">
        <div class="overlay">
          <div class="message">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import jsonData from '@/controller/photos.json';
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  name: 'MainPage',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      items: jsonData,
      items2: [
        { src: 'https://via.placeholder.com/800x300', color: 'indigo' },
        { src: 'https://via.placeholder.com/800x300', color: 'teal' },
        { src: 'https://via.placeholder.com/800x300', color: 'orange' },
      ]
    }
  },
  mounted() {
  },
  methods: {
    fetchData() {
      console.log()
    }
  }

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Single+Day&display=swap');

.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
}

#main-card-overlay {
  position: absolute;
  display: flex;
}
.overlay {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.493);
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay:hover {
  opacity: 1;
}

.message {
  color: rgb(0, 0, 0);
  text-align: center;
  font-size: 7vw;
  font-family: "Single Day", cursive;
}

.centered-card {
  width: 100%;
  height: 65vh;
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 100px;
}

.card {
  margin: 20px;
  height: 250px;
  width: 40vw;
  background-color: gray;

  justify-content: center;
  align-items: center;
  object-fit: cover;
  object-position: center; 
  display: block;
}

.image-wrapper {
  position: relative;

}
</style>
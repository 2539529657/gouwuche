<template>

  <div class="swiper-container">

    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>

  </div>
</template>
<script>

  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  export default {
    name: 'Swiper',
    data() {
      return {}
    },
    props: {
      banner: {
        type: Array
      }
    },
    components: {
      Swiper
    },
    updated() {
      new Swiper('.swiper-container', {
        autoplay: 3000,
        loop: true
      })
    },
    methods: {}
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 30vh;
    margin-top: 44px;
  }

  .swiper-slide.swiper-slide-active img {
    width: 100%;
    height: 100%;
  }

</style>

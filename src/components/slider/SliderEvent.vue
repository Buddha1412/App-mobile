<template>
  <swiper
    :grabCursor="true"
    :effect="'creative'"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img :src="require('@/assets/event/images.jpg')" alt="Event 1" class="slide-img" />
    </swiper-slide>
    <swiper-slide>
      <img :src="require('@/assets/event/images (1).jpg')" alt="Event 2" class="slide-img" />
    </swiper-slide>
    <swiper-slide>
      <img :src="require('@/assets/event/images (2).jpg')" alt="Event 3" class="slide-img" />
    </swiper-slide>
    <swiper-slide>
      <img :src="require('@/assets/event/images (3).jpg')" alt="Event 4" class="slide-img" />
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-creative';

  // import required modules
  import { Autoplay, EffectCreative } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCreative, Autoplay],
      };
    },
  };
</script>

<style scoped>
    #app { height: 100% }
    html,
    body {
      position: relative;
      height: 100%;
    }

    body {
      background: #ffffff;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #ffffff;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #ffffff;
      margin: 0;
      padding: 0;
    }

  .swiper {
    margin: 0 auto;
    width: 100vw;
    max-width: 393px;   
    height: 221px;      
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff; 
    border-radius: 25px;
  }

  .slide-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
    display: block;
    background: #ffffff;
  }

</style>
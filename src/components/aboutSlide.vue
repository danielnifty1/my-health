<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

//   import './style.css';
// import required modules
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Autoplay, Pagination, Navigation],
    };
  },
};

// console.log(title)
</script>
<template>
 
    <swiper 
      :slidesPerView="1"
      :spaceBetween="0"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper md:w-[500px] w-80"
    >
      <swiper-slide>
        <img src="/img/c1.jpg" class="rounded-xl  " />
      </swiper-slide>

      <swiper-slide>
        <img src="/img/c4.jpg" class="rounded-xl  " />
      </swiper-slide>

 

      <!-- If we need pagination -->
    </swiper>
 
</template>

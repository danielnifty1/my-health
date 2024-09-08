<script lang="ts">
 

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
</script>

<template>
      <swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :autoplay="{
      delay: 5500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper grid md:h-[700px] h-[400px] bg-cover bg-no-repeat content-center"
  >
    <swiper-slide
      class="grid md:h-[700px] h-[400px] bg-cover bg-no-repeat content-center"
    >
      <div
        class="grid md:h-[700px] h-[400px] bg-cover bg-no-repeat content-center"
        style="
          background-image: linear-gradient(
              rgba(151, 92, 198, 0.7),
              rgba(61, 81, 187, 0.7)
            ),
            url(/img/banner1.jpg);
          background-size: c;
        "
      >
        <div class="grid grid-cols-1 gap-1 place-items-center mt-20 space-y-5">
          <h2
            class="text-2xl md:text-4xl font-bold text-center text-white mt-10 md:mt-0"
          >
          Take care of your body<br />It's the only place you have to live
          </h2>
          <p class="font-bold text-white pl-5 pr-5 text-center">
            Take the first step to your journey to good health
          </p>

          <a href="contact"
            class="bg-blue-900 text-[18px] leading-[30px] text-white font-bold rounded-full btn-style"
          >
            Ready to get start?
          </a>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="">
      <div
        class="grid md:h-[700px] h-[400px] bg-cover bg-no-repeat content-center"
        style="
          background-image: linear-gradient(
              rgba(151, 92, 198, 0.7),
              rgba(61, 81, 187, 0.7)
            ),
            url(/img/banner1.jpg);
          background-size: c;
        "
      >
        <div class="grid grid-cols-1 gap-1 place-items-center mt-20 space-y-5">
          <h2
            class="text-2xl md:text-4xl font-bold text-center text-white mt-10 md:mt-0"
          >
        Good health and good sense are two of life's <br />greatest blessings.
          </h2>
          <p class="font-bold text-white pl-5 pr-5 text-center">
            Take the first step to your journey to success with us
          </p>

          <a href="contact"
            class="bg-blue-900 text-[18px] leading-[30px] text-white font-bold rounded-full btn-style"
          >
            Ready to get start?
          </a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
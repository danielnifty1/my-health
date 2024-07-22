<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

//   import './style.css';
// import required modules
import {EffectCoverflow,Autoplay, Pagination, Navigation } from 'swiper/modules';
 
 

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    


    return {
      modules: [EffectCoverflow,Autoplay, Pagination, Navigation],
      
    };
  },
  

};

 
      // console.log(title)
</script>
<template>
  


  <div class="w-full h-full  p-10">
  <swiper 
  :slidesPerView=2
  :spaceBetween="6"
  :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }"
  :pagination="{
    clickable: true,
  }"
  :modules="modules"
 
  class="mySwiper  ">
  <swiper-slide class="w-full h-full bor der-4"> 
    <div class="storyContainer w-full h-full">
            <img src="/img/s1.jpg" alt="image"  >
            <div class="overlay-text w-full ">
              <div class=" w-full mt-96">
                <h2>Bright</h2>
                <div class="rating text-[#d29214]">
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" > </i>

                       </div>
                       <div>
                        <span class="fa fa-quote-left"></span>
                        <p class="pl-5 text-sm pb-6">Join this fitness member, the best choice that I’ve. They’re very professional</p>
                       </div>
                      

              </div>
            </div>
        </div>



  </swiper-slide>

  <swiper-slide class="w-full h-full bor der-4"> 
    <div class="storyContainer w-full h-full">
            <img src="/img/s2.jpg" alt="image"  >
            <div class="overlay-text w-full ">
              <div class=" w-full mt-96">
                <h2>Prisca</h2>
                <div class="rating text-[#d29214]">
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>

                       </div>
                       <div>
                        <span class="fa fa-quote-left"></span>
                        <p class="pl-5 text-sm pb-6">Join this fitness member, the best choice that I’ve. They’re very professional</p>
                       </div>
                      

              </div>
            </div>
        </div>



  </swiper-slide>

  <swiper-slide class="w-full h-full bor der-4"> 
    <div class="storyContainer w-full h-full">
            <img src="/img/s2.jpg" alt="image"  >
            <div class="overlay-text w-full ">
              <div class=" w-full mt-96">
                <h2>Francis</h2>
                <div class="rating text-[#d29214]">
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>

                       </div>
                       <div>
                        <span class="fa fa-quote-left"></span>
                        <p class="pl-5 text-sm pb-6">Join this fitness member, the best choice that I’ve. They’re very professional</p>
                       </div>
                      

              </div>
            </div>
        </div>



  </swiper-slide>


  <swiper-slide class="w-full h-full bor der-4"> 
    <div class="storyContainer w-full h-full">
            <img src="/img/s2.jpg" alt="image"  >
            <div class="overlay-text w-full ">
              <div class=" w-full mt-96">
                <h2>Mercy</h2>
                <div class="rating text-[#d29214]">
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>

                       </div>
                       <div>
                        <span class="fa fa-quote-left"></span>
                        <p class="pl-5 text-sm pb-6">Join this fitness member, the best choice that I’ve. They’re very professional</p>
                       </div>
                      

              </div>
            </div>
        </div>



  </swiper-slide>


  <swiper-slide class="w-full h-full bor der-4"> 
    <div class="storyContainer w-full h-full">
            <img src="/img/s2.jpg" alt="image"  >
            <div class="overlay-text w-full ">
              <div class=" w-full mt-96">
                <h2>Bright</h2>
                <div class="rating text-[#d29214]">
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>

                       </div>
                       <div>
                        <span class="fa fa-quote-left"></span>
                        <p class="pl-5 text-sm pb-6">Join this fitness member, the best choice that I’ve. They’re very professional</p>
                       </div>
                      

              </div>
            </div>
        </div>



  </swiper-slide>


      <!-- If we need pagination -->
    
  </swiper>

  </div>
</template>


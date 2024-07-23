<script  lang="ts">
import TestimonyView from "./testimonialView.vue";



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


</script>

<template>
  <!-- BANNER SECTION -->
  <swiper 
  :slidesPerView=1
  :spaceBetween="0"
  :autoplay="{
    delay: 5500,
    disableOnInteraction: false,
  }"
  :pagination="{
    clickable: true,
  }"
  :modules="modules"
 
  class="mySwiper grid md:h-[700px] h-[400px] bg-cover bg-no-repeat content-center ">
  <swiper-slide class="grid md:h-[700px] h-[400px] bg-cover bg-no-repeat content-center"> 
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
        class="text-2xl md:text-6xl font-bold text-center text-white mt-10 md:mt-0"
      >
        50% Discount on all Popular <br />Courses
      </h2>
      <p class="font-bold text-white pl-5 pr-5 text-center">
        Take the first step to your journey to success with us
      </p>

      <button
        class="bg-blue-900 text-[18px] leading-[30px] text-white font-bold rounded-full btn-style"
      >
        Ready to get start?
      </button>
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
        class="text-2xl md:text-6xl font-bold text-center text-white mt-10 md:mt-0"
      >
        50% Discount on all Popular <br />Courses
      </h2>
      <p class="font-bold text-white pl-5 pr-5 text-center">
        Take the first step to your journey to success with us
      </p>

      <button
        class="bg-blue-900 text-[18px] leading-[30px] text-white font-bold rounded-full btn-style"
      >
        Ready to get start?
      </button>
    </div>
  </div>
</swiper-slide>
</swiper>
  <!--  ABOUT SECTION -->
  <div
    class="grid md:grid-cols-2 gap-4 place-items-center pt-20 md:pl-20 pl-5 md:pr-20 pr-2 pb-0"
  >
    <div class="grid grid-cols-1 gap-1 md:p-10 p-2 md:space-y-10 space-y-5">
      <div class="space-y-1">
        <h4 class="text-[15px] font-bold text-[#7e7d7d]">About us</h4>
        <h2 class="font-bold md:text-4xl text-2xl text-[#3f3a64]">
          We make the best strategies for you, Enhancing your success
        </h2>
      </div>

      <div class="text-[#7e7d7d] font-bold text-[15px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris nisi ut ex ea.
        </p>
      </div>

      <div class="space-y-6 text-sm md:text-xl">
        <div class="flex space-x-2">
          <span
            class="fa fa-check bg-blue-900 p-1 rounded-full text-white"
          ></span>
          <p class="font-bold text-[#3f3a64]">UI/UX Design and Development</p>
        </div>

        <div class="flex space-x-2">
          <span
            class="fa fa-check bg-blue-900 p-1 rounded-full text-white"
          ></span>
          <p class="font-bold text-[#3f3a64]">UI/UX Design and Development</p>
        </div>

        <div class="flex space-x-2">
          <span
            class="fa fa-check bg-blue-900 p-1 rounded-full text-white"
          ></span>
          <p class="font-bold text-[#3f3a64]">UI/UX Design and Development</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 ,md:p-20">
      <div class="rounded">
        <img src="/img/a.jpg" class="rounded-xl" />
      </div>

      <div class="rounded space-y-5 mt-10">
        <img src="/img/c1.jpg" class="rounded-xl" />

        <img src="/img/c4.jpg" class="rounded-xl" />
      </div>
    </div>
  </div>
  <!-- DISCOVER MORE -->
  <div
    class="grid md:grid-cols-2 gap-4 place-items-center md:pl-20 pl-5 md:pr-20 pr-2 pb-0 bg-gray-100"
  >
    <div
      class="grid grid-cols-1 gap-1 md:p-10 pt-10 md:pt-0 md:space-y-10 space-y-5"
    >
      <div class="space-y-1">
        <h4 class="md:text-[15px] font-bold text-[#7e7d7d]">
          EVERY DAY BRINGS NEW CHALLENGES
        </h4>
        <h2 class="font-bold md:text-4xl text-2xl text-[#3f3a64]">
          Creative agency focused on vision, product and people
        </h2>
      </div>

      <div class="text-[#7e7d7d] md:font-bold text-[15px]">
        <p>
          Aurabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac
          sed, lacinia est. Quisque ut lectus consequat, venenatis eros et, sed
          commodo risus. Nullam sit amet laoreet elit. Suspendisse non init
          magnaa velit efficitur, dolor eget ex fermentum.
        </p>
      </div>

      <div class="flex md:justify-start justify-center ">
        <button
          class="bg-blue-900 text-[18px] leading-[30px] text-white font-bold rounded btn-style"
        >
          Discover More
        </button>
      </div>
    </div>

    <div
      class="grid grid-cols-2 md:gap-10 gap-5 md:p-20 justify-between w-full mt-10 mb-10"
    >
      <div
        class="rounded bg-white shadow grid grid-cols-1 place-items-center md:p-10 p-5 shadow-xl hover:shadow-blue-500/50"
      >
        <img src="/img/icon4.png" class="rounded-xl" />
        <h1
          class="md:md:text-2xl font-bold text-[#3f3a64] hover:text-green-900 hover:cursor-pointer"
        >
          Our Process
        </h1>
      </div>

      <div
        class="rounded bg-white shadow grid grid-cols-1 place-items-center md:p-10 p-5 shadow-xl hover:shadow-blue-500/50"
      >
        <img src="/img/icon1.png" class="rounded-xl" />
        <h1
          class="md:text-2xl font-bold text-[#3f3a64] hover:text-green-900 hover:cursor-pointer"
        >
          Our Process
        </h1>
      </div>

      <div
        class="rounded bg-white shadow grid grid-cols-1 place-items-center md:p-10 p-5 shadow-xl hover:shadow-blue-500/50"
      >
        <img src="/img/icon2.png" class="rounded-xl" />
        <h1
          class="md:text-2xl font-bold text-[#3f3a64] hover:text-green-900 hover:cursor-pointer"
        >
          Our Process
        </h1>
      </div>

      <div
        class="rounded bg-white shadow grid grid-cols-1 place-items-center md:p-10 p-5 shadow-xl hover:shadow-blue-500/50"
      >
        <img src="/img/icon3.png" class="rounded-xl" />
        <h1
          class="md:text-2xl font-bold text-[#3f3a64] hover:text-green-900 hover:cursor-pointer"
        >
          Our Process
        </h1>
      </div>
    </div>
  </div>

  <!-- SERVICES -->
  <div
    class="grid grid-cols-1 gap-4 place-items-center pt-20 md:pl-20 pl-5 md:pr-20 pr-2 pb-0 space-y-5"
  >
    <h2 class="font-bold md:text-4xl text-2xl text-[#3f3a64] text-center">
      Always there for your care, our Services
    </h2>

    <div
      class="grid md:grid-cols-3 gap-4 place-items-center md:p-10 space-y-10 md:space-y-0"
    >
      <div class="storyContainer w-full">
        <img src="/img/s1.jpg" alt="image" class="rounded-xl" />
        <div class="overlay-text w-full">
          <h2
            class="p-2 bg-white rounded text-center text-xl font-bold text-[#3f3a64]"
          >
            Work Expertise
          </h2>

          <div class="w-full"></div>
        </div>
        <div class="grid grid-cols-1 gap-4 place-items-center">
          <p class="mt-10 text-center text-[#7e7d7d]">
            Join this fitness member, the best choice that I’ve. They’re very
            professional
          </p>

          <p
            class="text-[#3f3a64] font-bold hover:cursor-pointer hover:text-blue-900"
          >
            Learn More
          </p>
        </div>
      </div>

      <div class="storyContainer w-full">
        <img src="/img/s2.jpg" alt="image" class="rounded-xl" />
        <div class="overlay-text w-full">
          <h2
            class="p-2 bg-white rounded text-center text-xl font-bold text-[#3f3a64]"
          >
            Product Development
          </h2>

          <div class="w-full"></div>
        </div>
        <div class="grid grid-cols-1 gap-4 place-items-center">
          <p class="mt-10 text-center text-[#7e7d7d]">
            Join this fitness member, the best choice that I’ve. They’re very
            professional
          </p>

          <p
            class="text-[#3f3a64] font-bold hover:cursor-pointer hover:text-blue-900"
          >
            Learn More
          </p>
        </div>
      </div>

      <div class="storyContainer w-full">
        <img src="/img/s3.jpg" alt="image" class="rounded-xl" />
        <div class="overlay-text w-full">
          <h2
            class="p-2 bg-white rounded text-center text-xl font-bold text-[#3f3a64]"
          >
            Software Development
          </h2>

          <div class="w-full"></div>
        </div>
        <div class="grid grid-cols-1 gap-4 place-items-center">
          <p class="mt-10 text-center text-[#7e7d7d]">
            Join this fitness member, the best choice that I’ve. They’re very
            professional
          </p>

          <p
            class="text-[#3f3a64] font-bold hover:cursor-pointer hover:text-blue-900"
          >
            Learn More
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- PATHNERS -->

  <div
    class="grid md:grid-cols-6 grid-cols-3 w-10/12 place-items-center md:pt-20 md:pl-60 pl-5 md:pr-60 pr-2 pb-0 pl-20 pr-20 mt-10 md:mt-0"
  >
    <img src="/img/brand1.png" class="w-8/12" />
    <img src="/img/brand2.png" class="w-8/12" />
    <img src="/img/brand3.png" class="w-8/12" />
    <img src="/img/brand4.png" class="w-8/12" />
    <img src="/img/brand5.png" class="w-8/12" />
    <img src="/img/brand6.png" class="w-8/12" />
  </div>

  <!-- our success -->
  <div class="grid md:grid-cols-2 gap-2 pt-20 md:pl-20 pl-5 md:pr-20 pr-2 pb-0">
    <div class="md:p-10 p-5 rounded-xl">
      <img src="/img/about.jpg" class="rounded-xl" />
    </div>

    <div class="grid grid-cols-1 gap-1 md:p-10 p-5 space-y-10">
      <div class="space-y-1">
        <h4 class="md:text-[15px] font-bold text-[#7e7d7d]">
          YOUR SUCCESS IS OUR SUCCESS
        </h4>
        <h2 class="font-bold md:text-4xl text-2xl text-[#3f3a64]">
          Web design, marketing & SEO solutions that get results
        </h2>
      </div>

      <section class="w3l-progress" id="progress">
        <div class="midd-w3">
          <div class="container py- lg-5 py-md-4 py-2">
            <div class="row align-items-center">
              <div class="">
                <div class="progress-info info1">
                  <h6 class="progress-tittle">
                    Marketing <span class="">80%</span>
                  </h6>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped gradient-1"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="progress-info info2">
                  <h6 class="progress-tittle">
                    Responsive Web design <span class="">95%</span>
                  </h6>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped gradient-2"
                      role="progressbar"
                      style="width: 95%"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="progress-info info3">
                  <h6 class="progress-tittle">
                    Analytics <span class="">60%</span>
                  </h6>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped gradient-3"
                      role="progressbar"
                      style="width: 60%"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="progress-info info4 mb-0">
                  <h6 class="progress-tittle">
                    Web Development <span class="">85%</span>
                  </h6>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped gradient-4"
                      role="progressbar"
                      style="width: 85%"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- Testimony -->

  <TestimonyView />
</template>

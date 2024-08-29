<script lang="ts">
import TestimonyView from "./testimonialView.vue";

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
  <!-- BANNER SECTION -->
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
  <!--  ABOUT SECTION -->
  <div
    class="grid md:grid-cols-2 gap-4 place-items-center pt-20 md:pl-20 pl-5 md:pr-20 pr-2 pb-0"
  >
    <div class="grid grid-cols-1 gap-1 md:p-10 p-2 md:space-y-10 space-y-5">
      <div class="space-y-1">
        <h4 class="text-[15px] font-bold text-[#7e7d7d]">About us</h4>
        <h2 class="font-bold md:text-4xl text-2xl text-[#3f3a64]">
          We make the best strategies for you, Enhancing your health
        </h2>
      </div>

      <div class="text-[#7e7d7d] font-bold text-[15px]">
        <p>
          Trusted Partner in Public Health, Leadership & Ethical Development
        </p>
      </div>

      <div class="space-y-6 text-sm md:text-xl">
        <div class="flex space-x-2">
          <span
            class="fa fa-check bg-blue-900 p-1 rounded-full text-white"
          ></span>
          <p class="font-bold text-[#3f3a64]">(a)	Angewandte Parasitologie (Germany), 1992</p>
        </div>

        <div class="flex space-x-2">
          <span
            class="fa fa-check bg-blue-900 p-1 rounded-full text-white"
          ></span>
          <p class="font-bold text-[#3f3a64]">(b)	African Health (UK) 1990 </p>
        </div>

        <div class="flex space-x-2">
          <span
            class="fa fa-check bg-blue-900 p-1 rounded-full text-white"
          ></span>
          <p class="font-bold text-[#3f3a64]">(a)	Nigeria Journal of Parasitology 1991</p>
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
          TOP UNIVERSITY ATTENDED
        </h4>
        <h2 class="font-bold md:text-2xl text-2xl text-[#3f3a64]">
          CONTRIBUTIONS TO THE GROWTH AND DEVELOPMENT OF SCIENCE
        </h2>
      </div>

      <div class="text-[#7e7d7d] md:font-bold text-[15px]">
        <p>
          Prof. B. E. B. Nwoke has strongly contributed to academic leadership and growth as well as stimulated superior and excellent research studies and learning in the University. He has been involved in external examination of postgraduate students (PhD and or Masters Degree) in 12 Universities and in the assessment of more than 50 colleagues to the ranks of Professor/Reader in Nigeria and abroad.
        </p>
      </div>

      <div class="flex md:justify-start justify-center">
        <a  href="about"
          class="bg-blue-900 text-[18px] leading-[30px] text-white font-bold rounded btn-style"
        >
          Discover More
        </a>
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
          class="md:md:text-2xl font-bold text-[#3f3a64] hover:text-green-900 hover:cursor-pointer text-center"
        >
          Contribition<br> To Science
        </h1>
      </div>

      <div
        class="rounded bg-white shadow grid grid-cols-1 place-items-center md:p-10 p-5 shadow-xl hover:shadow-blue-500/50"
      >
        <img src="/img/icon1.png" class="rounded-xl" />
        <h1
          class="md:text-2xl font-bold text-[#3f3a64] hover:text-green-900 hover:cursor-pointer text-center"
        >
        Contribition<br> To Community
        </h1>
      </div>

      <div
        class="rounded bg-white shadow grid grid-cols-1 place-items-center md:p-10 p-5 shadow-xl hover:shadow-blue-500/50"
      >
        <img src="/img/icon2.png" class="rounded-xl" />
        <h1
          class="md:text-2xl font-bold text-[#3f3a64] hover:text-green-900 hover:cursor-pointer text-center"
        >
        Contribition<br> To Government
        </h1>
      </div>

      <div
        class="rounded bg-white shadow grid grid-cols-1 place-items-center md:p-10 p-5 shadow-xl hover:shadow-blue-500/50"
      >
        <img src="/img/icon3.png" class="rounded-xl" />
        <h1
          class="md:text-2xl font-bold text-[#3f3a64] hover:text-green-900 hover:cursor-pointer text-center"
        >
        Contribition<br> To Global Health
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
            Public Health
          </h2>

          <div class="w-full"></div>
        </div>
        <div class="grid grid-cols-1 gap-4 place-items-center">
          <p class="md:mt-10 mt-20  text-center text-[#7e7d7d]">
            The science of protecting and improving the health of people and their communities
          </p>

          <a href="services"
            class="text-[#3f3a64] font-bold hover:cursor-pointer hover:text-blue-900"
          >
            Learn More
        </a>
        </div>
      </div>

      <div class="storyContainer w-full">
        <img src="/img/s2.jpg" alt="image" class="rounded-xl" />
        <div class="overlay-text w-full">
          <h2
            class="p-2 bg-white rounded text-center text-xl font-bold text-[#3f3a64]"
          >
           Leadership
          </h2>

          <div class="w-full"></div>
        </div>
        <div class="grid grid-cols-1 gap-4 place-items-center">
          <p class="mt-10 text-center text-[#7e7d7d]">
            influencing and motivating medical personnel to contribute to the success and effectiveness of medicine, patient care, and health care practices
          </p>

          <a href="services"
            class="text-[#3f3a64] font-bold hover:cursor-pointer hover:text-blue-900"
          >
            Learn More
        </a>
        </div>
      </div>

      <div class="storyContainer w-full">
        <img src="/img/s3.jpg" alt="image" class="rounded-xl" />
        <div class="overlay-text w-full">
          <h2
            class="p-2 bg-white rounded text-center text-xl font-bold text-[#3f3a64]"
          >
          Ethical Development
          </h2>

          <div class="w-full"></div>
        </div>
        <div class="grid grid-cols-1 gap-4 place-items-center">
          <p class="mt-10 text-center text-[#7e7d7d]">
            focuses on the emergence, change, and understanding of morality from early childhood through adulthood
          </p>

          <a href="services"
            class="text-[#3f3a64] font-bold hover:cursor-pointer hover:text-blue-900"
          >
            Learn More
        </a>
        </div>
      </div>
    </div>
  </div>

  <!-- PATHNERS -->

  <div
    class="grid md:grid-cols-6 grid-cols-3 w-10/12 place-items-center md:pt-20 md:pl-60 ml-10 md:pr-60 pr-2 pb-0 pl-20 pr-20 mt-10 md:mt-0"
  >
    <img src="/img/brand1.png" class="w-8/12" />
    <img src="/img/brand2.png" class="w-8/12" />
    <img src="/img/brand3.png" class="w-8/12" />
    <img src="/img/brand4.png" class="w-8/12" />
    <img src="/img/brand5.png" class="w-8/12" />
    <img src="/img/brand6.png" class="w-8/12" />
  </div>

  <!-- our success -->
  <div class="grid md:grid-cols-2 gap-2 pt-20 md:pl-20 pl-5 md:pr-20 pr-2 pb-0 place-items-start">
    <div class="md:p-10 p-5 rounded-xl">
      <img src="/img/ceo.jpg" class="rounded-xl" />
    </div>

    <div class="grid grid-cols-1 gap-1 md:p-10 p-5 space-y-10">
      <div class="space-y-1">
        <h4 class="md:text-[15px] font-bold text-[#7e7d7d]">
          YOUR SUCCESS IS OUR SUCCESS
        </h4>
        <h2 class="font-bold md:text-2xl text-2xl text-[#3f3a64]">
          CHIEF EXECUTIVE OFFICER (CEO): PROF. BERTRAM EKEJIUBA BRIGHT NWOKE, FAS 
        </h2>
      </div>

      <p>
          Prof. Bertram Ekejiuba Bright Nwoke is from Umuariam, Obowo LGA in Imo State, Nigeria. He was a pioneer student of Institute of Management and Technology, Enugu where he obtained OND (Science Laboratory Technology) in 1975. He was one of the pioneer students of University of Jos who matriculated in 1976. He obtained B.Sc. (Zoology) Second Class Upper Division in 1979 and came out as the first best graduating student of Zoology, University of Jos. He also has to his credit an MSc degree in Applied Entomology & Parasitology (1981) and PhD degree in Medical Parasitology & Entomology (1987) all from the University of Jos. He is well trained in Total Quality Management and has a certificate on it.... <a href="about" clas="font-bold text-blue-500 text-2xl ">Read More</a>
        </p>

      
    </div>
  </div>

  <!-- Testimony -->

  <TestimonyView />
</template>

<script setup lang="ts">
import { ref } from "vue";

// import Buttons from "../components/Buttons.vue";
// import { useAuthStore } from "../core/store";

// const authStore = useAuthStore();

let open = ref(false);
let Links = [
  { name: "Home", link: "/" },
  { name: "About", link: "about" },
  { name: "Services", link: "services" },
  { name: "Contact", link: "contact" },
];

function Menuopen() {
  open.value = !open.value;
}
function Closeopen() {
  open.value = !open.value;
}

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    
    document.getElementById("gen")!.className =
      "md:bg-white w-full md:fixed absolute z-50  transition delay-150 duration-300 ease-in-out will-change-scroll shadow "; // Fade in

    document.getElementById("namecenter")!.className =
      "text-4xl text-[#3f3a64]  font-bold  transition delay-150 duration-300 ease-in-out will-change-scroll "; // Fade in

    document.getElementById("linkname")!.className =
      "opacity-90 z-40 md:flex md:items-right md:px-0 px=10 md:pb-0 pb-10 md:static absolute   md:w-auto w-full top-14 duration-700 ease-in text-[#3f3a64]"; // Fade in
  } else {
    document.getElementById("gen")!.className =
      "bg-transparent w-full fixed z-[9999] transition delay-150 duration-300 ease-in-out will-change-scroll"; // Fade in

    document.getElementById("namecenter")!.className =
      "text-4xl text-white  font-bold  transition delay-150 duration-300 ease-in-out will-change-scroll "; // Fade in

    document.getElementById("linkname")!.className =
      "opacity-90 z-40 md:flex md:items-right md:px-0 px=10 md:pb-0 pb-10 md:static absolute   md:w-auto w-full top-14 duration-700 ease-in text-white"; // Fade in
  }
}
</script>

<template>
 <div class="bg-transparent w-full fixed z-[9999] transition delay-150 duration-300 ease-in-out will-change-scroll  " id="gen">
    <div
      class="bg-[ rgba(126, 82, 193,0.7)] md:opacity-90 z-50 text-gray-100 py-5 px-6 md:flex justify-between items-center w-full border-b-[1px] border-[#bfcdeb]"
    >
      <div class="flex items-center">
        <ul class="flex md:ml-20">
          <li>
            <router-link to="/" class="md:flex items-center grid grid-cols-2">
              <span class="md:py-1 md:px-1 md:mr-1">
              <img src="/img/rehh.png" class="md:w-24 px-2 w-2/6" />
              </span>
              <div class="text-center namecenter hidden md:grid">
                <h1 class="text-[24px] text-white font-bold" id="namecenter">
                  My Health
                </h1>
                <p class="font-bold text-blue-900">Leadership</p>
              </div>
            </router-link>
          </li>
        </ul>
        <hr />
      </div>
      <span
        @click="Menuopen()"
        class="absolute md:hidden right-6 top-3 cursor-pointer text-2xl"
      >
        <i :class="[open ? 'fa fa-times' : 'fa fa-bars']"></i>
      </span>

      <ul
        id="link name"
        class="opacity-90 z-40 md:flex md:items-right md:px-0 px=20 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-14 duration-700 ease-in pl-10    bg-[#19092d] md:bg-transparent text-blue-900"
        :class="[open ? 'right-[0%]' : 'right-[100%]']"
      >
        
        <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.name">
          <router-link :to="link.link"  @click="Closeopen()" class="font-bold">{{
            link.name
          }}</router-link>
        </li>

        <div class="flex space-x-3 pl-20">
          <!-- <Buttons route="/signup" class="bg-blue-800 text-white p-2 rounded">
            Get Started
          </Buttons> -->
        </div>
      </ul>

      <div class="flex space-x-3 mr-20">
        <div class="flex space-x-2"></div>
      </div>
    </div>
  </div>  
 
 
</template>
<style scoped>
.activepage {
  padding-bottom: 8px;
  border-bottom: 2px solid red;
  margin-bottom: 20px;
  /* transition-delay: 100ms; */
  transition-duration: 1000ms;
}
.activepage:hover {
  color: red;
}
</style>

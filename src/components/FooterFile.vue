<script setup lang="ts"></script>

<template>
  <div class="bg-[#151421] space-y-5">
    <div
      class="grid grid-cols-1 gap-4 place-items-center p-10 ftmap bg-contain bg-center bg-no-repeat"
    >
      <h1 class="font-bold md:text-4xl text-2xl text-white text-center">
        Let’s find out how to work together
      </h1>
      <p class="text-white text-center">
       Feel free to subscribe to our newsletter service
      </p>

      <form>
        <div class="flex">
          <span
            class="fa fa-envelope pt-3 p-2 border border-gray-500 rounded-tl-xl rounded-bl-xl text-white"
          ></span>
          <input
            name="email"
            class="p-2 border border-gray-500 bg-transparent"
            placeholder="Your Email Address"
          />
          <button
            class="p-2 border border-gray-500 bg-blue-900 font-bold text-white rounded-tr-xl rounded-br-xl"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>

    <div
      class="grid md:grid-cols-2 gap-4 place-items-centerpt-20 md:pl-20 pl-5 md:pr-20 pr-2 pb-0 border-t border-b pt-10 pb-10 border-gray-500"
    >
      <!-- about -->
      <div class="grid md:grid-cols-2 gap-4 space-y-10 md:space-y-0">
        <div classs="space-y-10">
          <div class="flex space-x-5 pb-">
            <img src="/img/rehh.png" class="w-4/12" />
            <div class="text-center namecenter">
              <h1 class="text-2xl text-white font-bold" id="namecenter">
                My Health
              </h1>
              <p class="font-bold text-blue-900">Leadership</p>
            </div>
          </div>

          <div class="pb-5">
            <p class="text-[#7e7d7d] text-[18px] font-bold">
              Create an enabling environment for efficient and effective prevention and control strategies for Public health important endemic diseases and development of persons in authority to be truly inspirational.
            </p>
          </div>

          <div class="space-x-8 text-[#677d8d]">
            <span class="fa-brands fa-twitter"></span>

            <span class="fa fa-envelope"></span>

            <span class="fa-brands fa-facebook"></span>

            <span class="fa-brands fa-instagram"></span>
          </div>
        </div>

        <!-- contact info -->
        <div classs="space-y-10">
          <div class="flex space-x-5 pb-5">
            <h1 class="text-2xl text-white font-bold" id="namecenter">
              CONTACT INFO
            </h1>
          </div>

          <div class="pb-5 space-y-5 text-[#7e7d7d] text-[18px] font-bold">
            <div class="text-[#7e7d7d] flex">
              <h1></h1>
              <p>
                Address : Corp Vision, 343 marketing, #21 cravel 1st lane
                street, NY - 62617.
              </p>
            </div>

            <div class="text-[#7e7d7d] flex">
              <h1></h1>
              <p>Phone Number : +2348033273915</p>
            </div>

            <div class="text-[#7e7d7d] flex">
              <h1></h1>
              <p>Email : contact@myhealthleadership.com</p>
            </div>
          </div>
        </div>
      </div>

      <!-- services -->
      <div class="grid grid-cols-2 gap-4 md:space-x-10 ">
        <div classs="space-y-10">
          <div class="flex space-x-5 pb-5">
            <h1 class="text-2xl text-white font-bold" id="namecenter">
              SERVICES
            </h1>
          </div>

          <div class="pb-5 space-y-5 text-[#7e7d7d] font-bold">
            <p class=" ">SERVICES TO SCIENCE</p>
            <p>SERVICE TO HUMANITY</p>
            <p>Contribition To Government</p>
            <p>Contribition To Science</p>
          </div>
        </div>

        <!-- company -->
        <div classs="space-y-10">
          <div class="flex space-x-5 pb-5">
            <h1 class="text-2xl text-white font-bold" id="namecenter">
              COMPANY
            </h1>
          </div>

          <div class="pb-5 space-y-10 text-[#7e7d7d] font-bold">
            <a href="index" class=" ">VISIT HOME</a><br><br>
            <a href="about">ABOUT THE COMPANY</a><br><br>
            <a href="services">COMPANY SERVICES</a><br><br>
            <a href="contact">CONTACT THE COMPANY</a><br><br>
          </div>
        </div>

      </div>

    </div>

    <div class="grid grid-cols-1 gap-4 place-items-center p-2">
      <p class="text-[#677d8d] text-center">
        © 2024 My Health Leadership. All rights reserved. Design by
        <span class="text-blue-900">Daniel Chigozie</span>
      </p>
    </div>
  </div>
</template>

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
        Lorem ipsum dolor sit amet elit. Velit beatae rem ullam dolore nisi esse
        quasi, sit amet. Lorem ipsum dolor sit amet elit.
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
            <img src="/img/reh.png" class="w-2/12" />
            <div class="text-center namecenter">
              <h1 class="text-2xl text-white font-bold" id="namecenter">
                My Health
              </h1>
              <p class="font-bold text-blue-900">Leadership</p>
            </div>
          </div>

          <div class="pb-5">
            <p class="text-[#7e7d7d] text-[18px] font-bold">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
              amet Semper at elit team advisors.
            </p>
          </div>

          <div class="space-x-8 text-[#677d8d]">
            <span class="fa fa-twitter"></span>

            <span class="fa fa-envelope"></span>

            <span class="fa fa-facebook"></span>

            <span class="fa fa-facebook"></span>
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
              <p>Phone Number : +1(21) 234 4567</p>
            </div>

            <div class="text-[#7e7d7d] flex">
              <h1></h1>
              <p>Email : info@example.com</p>
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
            <p class=" ">UI/UX Design</p>
            <p>Creative agency</p>
            <p>Positive thinking</p>
            <p>Marketing service</p>
          </div>
        </div>

        <!-- company -->
        <div classs="space-y-10">
          <div class="flex space-x-5 pb-5">
            <h1 class="text-2xl text-white font-bold" id="namecenter">
              COMPANY
            </h1>
          </div>

          <div class="pb-5 space-y-5 text-[#7e7d7d] font-bold">
            <p class=" ">VISIT HOME</p>
            <p>ABOUT THE COMPANY</p>
            <p>COMPANY SERVICES</p>
            <p>CONTACT THE COMPANY</p>
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

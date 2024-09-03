<template>
  <div class="grid md:grid-cols-2">
    <div class="grid p-10">
      <p>Say Hello</p>
      <p class="text-4xl font-bold text-blue-500">Get In Touch</p>

      <p>
        Start working with Us that can provide everything you need to generate
        awareness, drive traffic, connect.We guarantee that you’ll be able to
        have any issue resolved within 24 hours.
      </p>

      <div class="grid mt-10 space-y-5">
        <div class="flex place-items-center space-x-5">
          <span
            class="fa fa-phone text-blue-700 rounded-full bg-blue-200 p-2 text-blue-900"
          ></span>
          <div class="">
            <p class="font-bold">Phone Number</p>
            <p class="text-blue-500">+2348033273915</p>
          </div>
        </div>

        <div class="flex place-items-center space-x-5">
          <span
            class="fa fa-envelope text-blue-700 rounded-full bg-blue-200 p-2"
          ></span>
          <div class="">
            <p class="font-bold">Send Email</p>
            <a
              class="text-blue-500"
              href="mailto:contact@myhealthleadership.com"
              >contact@myhealthleadership.com</a
            >
          </div>
        </div>

        <div class="flex place-items-center space-x-5">
          <span
            class="fa fa-map-marker text-blue-700 rounded-full bg-blue-200 p-2"
          ></span>
          <div class="">
            <p class="font-bold">Office Address</p>
            <p class="text-blue-500">
              Address here, 434 Agency Honey street, London, UK - 62617.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-10 rounded-xl">
      <div class="map-content-9">
        <div
          class="map-iframe border-2 border-blue-500 rounded-xl"
          style="overflow: hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
            width="100%"
            height="400"
            frameborder="0"
            style="border: 0px"
            
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-200 grid grid-cols-1  ">

    <div class="grid   mt-10  w-full ">
      <p class="text-gray-600 text-center">Write Us</p>

      <p class="text-2xl md:text-4xl font-bold text-center text-blue-500 md:p-0 p-2 ">Ready to talk with our experts?    </p>

      <form class="form border-red-500 md:pl-24 md:pr-24 md:pt-10 pl-10 pr-10 mt-5">
        <div class="grid md:grid-cols-3  gap-3  mb-10">
            <input class="rounded-xl p-3 text-gray-500" placeholder="name" >
            <input class="rounded-xl p-2 text-gray-500" placeholder="Email" >
            <input class="rounded-xl p-2 text-gray-500" placeholder="Subject" >
        </div>
        <textarea class="w-full rounded-xl p-24" rows="3">

        </textarea>

        <div class="grid mt-2 place-items-center mb-10">
            <Button type="submit"  class="bg-blue-800 text-white p-2 rounded">
            Send Message
          </Button>
        </div>
       
      </form>
    </div>

  </div>
</template>

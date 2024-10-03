<script setup lang="ts">
import { reactive, ref } from "vue";
import { useAuth } from "../composable/auth.composable";
 
import { useAuthStore } from "../core/store";

 
const store = useAuthStore();
const loading = ref(false);
const disabled = ref(false);

const userInfo = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});


const Responsevalue=reactive({
networkvalue:""

})


const proceed = async () => {

  let loader = document.getElementsByClassName ('loader') as HTMLCollectionOf<HTMLElement>;
    let errorid = document.getElementById ('errorid') as HTMLElement
  
    if (loader.length != 0) {
  loader[0].style.display = "";
}

const data = {
    email: userInfo.email as string,
    name: userInfo.name as string,
    subject: userInfo.subject as string,
    message: userInfo.message as string,
}

const [error, success] = await useAuth(store.userRegister(data), loading);
if (success || error) {
      disabled.value = false;
      if (loader.length != 0) {
  loader[0].style.display = "none";
}
    }
    if (success.value !== "") {
      //   redirect to the signin page
      
     Responsevalue.networkvalue="Message Sent successfully, you will be responded to shortly"
 errorid.style.color="green"
 userInfo.email=" "
 userInfo.message=" "
 userInfo.name=" "
 userInfo.subject=" "


    }
       
    if(error.value!==""){
      // alert(error.value)
     Responsevalue.networkvalue="there was an Error, kindly Trying again later"
     errorid.style.color="red"
    }
  



}


</script>

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

  <div class="bg-gray-200 grid grid-cols-1">
    <div class="grid mt-10 w-full">
      <p class="text-gray-600 text-center">Write Us</p>

      <p
        class="text-2xl md:text-4xl font-bold text-center text-blue-500 md:p-0 p-2"
      >
        Ready to talk with our experts?
      </p>
      <p id="errorid" class="md:mt-10 text-center text-sm text-red-500 font-bold"> {{Responsevalue.networkvalue}}</p>
      <div
        class="form border-red-500 md:pl-24 md:pr-24 md:pt-10 pl-10 pr-10 mt-5"
      >
        <div class="grid md:grid-cols-3 gap-3 mb-10">
          <input
            v-model="userInfo.name"
            class="rounded-xl p-3 text-gray-500"
            placeholder="name"
          />
          <input v-model="userInfo.email" class="rounded-xl p-2 text-gray-500" placeholder="Email" />
          <input v-model="userInfo.subject" class="rounded-xl p-2 text-gray-500" placeholder="Subject" />
        </div>
        <textarea v-model="userInfo.message" class="w-full rounded-xl p-2 h-24" rows="3"> </textarea>

        <div class="grid mt-2 place-items-center mb-10">
          <Button
           @click="proceed"
          
          type="submit" class="bg-blue-800 text-white p-2 rounded">
            Send Message 
            <span id="loader" class="fa fa-spin fa-spinner loader" style="display:none;"> </span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

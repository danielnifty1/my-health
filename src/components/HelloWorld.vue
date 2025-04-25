<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="bg-red-900">{{ msg }}</h1>

  <div class="card flex justify-center items-center">
    <button type="button" @click="count++" class="bg-red-900 ring-[1.5px] text-white ring-md " > click here to count {{ count }}</button>
    
  </div>

  <p>
   Website service paused for now
  </p>
  <p>
   
  </p>
 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

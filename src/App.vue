<template>
  <div class="relative">
    <router-view name="NavBar"></router-view>

    <main>
      <router-view name="banner"></router-view> 
      <router-view />
    </main>

    <router-view name="FooterFile"></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col gap-5 container mx-auto p-6
    text-lg md:text-md sm:text-md text-right">
    <header class="header flex gap-9 font-bold
     bg-white drop-shadow-md rounded-md w-full p-4 pr-[25px]">
      <router-link to="/" class="text-md">
        آدرس جدید
      </router-link>
      <RouterLink to="/showAddress"
       class="text-md text-green-500">
        مشاهده آدرس ها 
      </RouterLink>
    </header>
    <div class="flex">
      <router-view />
    </div>
  </div>
</template>

<style scoped>

</style>

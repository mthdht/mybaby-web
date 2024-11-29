<template>
  <header class="bg-sky-500 hidden md:block" >
    <div class="p-4 flex gap-8">
      <div class="brand">My Baby</div>
      <nav class="flex gap-4" >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">Suivi</RouterLink>
        <RouterLink to="/">Favori</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView></RouterView>

  <footer class="bg-slate-100 flex divide-x divide-slate-200 fixed w-full bottom-0">
    <RouterLink to="/" class="py-1 w-1/3 flex flex-col justify-center items-center">
        <HomeModernIcon class="size-7"></HomeModernIcon>
        <p class="font-bold text-xs">Home</p>
    </RouterLink>

    <RouterLink to="/ok" class="py-1 w-1/3 flex flex-col justify-center items-center">
      <ArrowTrendingUpIcon class="size-7"></ArrowTrendingUpIcon>
      <p class="font-bold text-xs">Suivi</p>
    </RouterLink>

    <RouterLink to="/ok1" class="py-1 w-1/3 flex flex-col justify-center items-center">
      <HeartIcon class="size-7"></HeartIcon>
      <p class="font-bold text-xs">Favoris</p>      
    </RouterLink>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { HomeModernIcon, ArrowTrendingUpIcon, HeartIcon } from '@heroicons/vue/24/outline'

</script>

<style scoped>

</style>

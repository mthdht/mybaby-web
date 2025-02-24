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

  <header class="relative flex justify-between items-center bg-sky-500 py-4 px-8 text-white">
      <div class="brand font-semibold text-xl">My Baby</div>
      <nav class="flex gap-4 ">
          <RouterLink to="/notifications">
            <BellIcon class="size-6"></BellIcon>
          </RouterLink>

          <RouterLink to="/notifications">
            <UserIcon class="size-6"></UserIcon>
          </RouterLink>
      </nav>
  </header>
  <main>
    <RouterView></RouterView>
  </main>

  <footer class="bg-slate-100 flex fixed w-full bottom-0">
    <RouterLink to="/" class="py-1 w-1/3 flex flex-col justify-center items-center border-b-4">
        <HomeModernIcon class="size-7 stroke-2"></HomeModernIcon>
        <p class="font-bold text-xs">Home</p>
    </RouterLink>

    <RouterLink to="/child-centers" class="py-1 w-1/3 flex flex-col justify-center items-center border-b-4">
      <ArrowTrendingUpIcon class="size-7 stroke-2"></ArrowTrendingUpIcon>
      <p class="font-bold text-xs">Crèches</p>
    </RouterLink>

    <RouterLink to="/children" class="py-1 w-1/3 flex flex-col justify-center items-center border-b-4">
      <UserGroupIcon class="size-7 stroke-2"></UserGroupIcon>
      <p class="font-bold text-xs">Enfants</p>      
    </RouterLink>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { HomeModernIcon, ArrowTrendingUpIcon, HeartIcon, BellIcon, UserIcon, UserGroupIcon } from '@heroicons/vue/24/outline'

</script>

<style scoped>

</style>

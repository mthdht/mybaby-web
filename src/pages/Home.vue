<template>
   <section class="stats p-4 flex gap-4 font-semibold">
        <div class="w-1/2 border h-24 rounded shadow flex justify-center items-center gap-2">
           <p>3</p>
           <p>crèches</p>
        </div>
        <div class="w-1/2 border h-24 rounded shadow flex flex-col justify-center items-center">
            <p>32 enfants</p>
            <p class="text-xs font-normal">27 présents</p>
        </div>
   </section>
</template>

<script setup>
import FoodIcon from '../components/FoodIcon.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'

</script>
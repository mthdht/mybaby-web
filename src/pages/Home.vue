<template>
   <div class="p-4 space-y-6">
      <!-- Titre de bienvenue -->
      <h2 class="font-semibold text-xl flex gap-3">
         <HandRaisedIcon class="size-7 text-indigo-500"></HandRaisedIcon>
         Welcome David !
      </h2>

      <!-- Stats -->
      <section class="stats grid grid-cols-2 gap-4 font-semibold">
         <div class="h-24 rounded shadow flex flex-col justify-center items-center bg-indigo-50 text-indigo-700">
            <p class="text-2xl font-bold">3</p>
            <p>Crèches</p>
         </div>

         <div class="h-24 rounded shadow flex flex-col justify-center items-center bg-green-50 text-green-700">
            <p class="text-2xl font-bold">32 enfants</p>
            <p class="text-xs font-normal">27 présents</p>
         </div>
      </section>

      <!-- Accès rapide -->
      <section class="menu grid grid-cols-2 md:grid-cols-4 gap-4">
         <RouterLink to="/journaux" class="hover:bg-sky-50 aspect-square border shadow flex flex-col items-center justify-center gap-2 rounded-lg bg-white transition-colors hover:border-sky-200">
            <ClipboardDocumentListIcon class="size-14 stroke-2 text-sky-500"></ClipboardDocumentListIcon>
            <p>Journaux</p>
         </RouterLink>

         <RouterLink to="/messages" class="aspect-square border shadow flex flex-col items-center justify-center gap-2 rounded-lg bg-white transition-colors hover:bg-emerald-50 hover:border-emerald-200">
            <ChatBubbleLeftRightIcon class="size-14 stroke-2 text-emerald-500"></ChatBubbleLeftRightIcon>
            <p>Messages</p>
         </RouterLink>

         <RouterLink to="/equipes" class="aspect-square border shadow flex flex-col items-center justify-center gap-2 rounded-lg bg-white transition-colors hover:bg-purple-50 hover:border-purple-200">
            <UsersIcon class="size-14 stroke-2 text-purple-600"></UsersIcon>
            <p>Équipes</p>
         </RouterLink>

         <RouterLink to="/notes" class="aspect-square border shadow flex flex-col items-center justify-center gap-2 rounded-lg bg-white transition-colors hover:bg-yellow-50 hover:border-yellow-200">
            <BookmarkIcon class="size-14 stroke-2 text-yellow-600"></BookmarkIcon>
            <p>Notes</p>
         </RouterLink>
      </section>

      <!-- Dernière alerte -->
      <section class="last-alert bg-white shadow rounded-lg p-4 flex items-center justify-between hover:bg-sky-50 transition-colors">
         <div class="flex items-center gap-3">
            <ChatBubbleLeftRightIcon class="size-14 text-sky-500"></ChatBubbleLeftRightIcon>
            <p class="text-sm font-semibold text-sky-700">Nouveau message d'un parent</p>
         </div>
         <RouterLink to="/notifications" class="text-sky-500 font-semibold">Voir</RouterLink>
      </section>


   </div>
</template>

<script setup>
import { ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, HandRaisedIcon, UsersIcon, BookmarkIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
</style>

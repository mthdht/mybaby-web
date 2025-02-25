<template>
   <div class="p-4 space-y-6">
      <h2 class="font-semibold text-xl flex gap-3">
         <HandRaisedIcon class="size-7"></HandRaisedIcon>
         Welcome David !
      </h2>
      <section class="stats flex gap-4 font-semibold">
         <div class="w-1/2 border h-24 rounded shadow flex justify-center items-center gap-2">
            <p>3</p>
           <p>crèches</p>
        </div>

        <div class="w-1/2 border h-24 rounded shadow flex flex-col justify-center items-center">
           <p>32 enfants</p>
           <p class="text-xs font-normal">27 présents</p>
         </div>
      </section>
      
      <section class="menu grid grid-cols-2 gap-4">
         <div class="daily-sheet aspect-square border shadow flex flex-col items-center justify-center gap-4 rounded">
            <ClipboardDocumentListIcon class="size-14 stroke-2"></ClipboardDocumentListIcon>
            <p>Jounaux quotidien</p>
         </div>

         <div class="daily-sheet aspect-square border shadow flex flex-col items-center justify-center gap-4 rounded">
            <ChatBubbleLeftRightIcon class="size-14 stroke-2"></ChatBubbleLeftRightIcon>
            <p>Messages</p>
         </div>
         
         <div class="daily-sheet aspect-square border shadow flex flex-col items-center justify-center gap-4 rounded">
            <UsersIcon class="size-14 stroke-2"></UsersIcon>
            <p>Equipes</p>
         </div>

         <div class="daily-sheet aspect-square border shadow flex flex-col items-center justify-center gap-4 rounded">
            <BookmarkIcon class="size-14 stroke-2"></BookmarkIcon>
            <p>Notes</p>
         </div>
      </section>
   </div>
</template>

<script setup>
import { ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, HandRaisedIcon, UsersIcon, BookmarkIcon } from '@heroicons/vue/24/outline'

</script>
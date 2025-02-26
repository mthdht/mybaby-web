<template>
    <div class="relative w-full">
      <!-- Bouton pour afficher les options -->
      <button
        @click="isOpen = !isOpen"
        @keydown.enter="isOpen = !isOpen"
        @keydown.esc="isOpen = false"
        class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-left flex justify-between items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        <span>{{ selectedOption ? selectedOption.label : placeholder }}</span>
        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
  
      <!-- Liste des options -->
      <transition
        enter-active-class="transition transform duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition transform duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <ul
          v-show="isOpen"
          class="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md max-h-60 overflow-auto z-10"
        >
          <li
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
            class="px-4 py-2 cursor-pointer hover:bg-sky-100"
            :class="{ 'bg-sky-500 text-white': option.value === selectedOption?.value }"
          >
            {{ option.label }}
          </li>
        </ul>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  defineProps({
    options: { type: Array, required: true },
    placeholder: { type: String, default: 'Sélectionnez une option' }
  })
  
  const isOpen = ref(false)
  const selectedOption = ref(null)
  
  const selectOption = (option) => {
    selectedOption.value = option
    isOpen.value = false
  }
  
  // Fermer le dropdown si on clique à l'extérieur
  </script>
  
<template>
    <div class="p-4 space-y-6">
      <!-- En-tête avec les informations de base -->
      <header class="flex gap-4 items-center">
        <div class="avatar w-24 h-24 rounded-full overflow-hidden border-2" :class="[child.sexe == 'male' ? 'border-sky-500' : 'border-pink-500']">
          <img :src="child.avatar || 'default-avatar.png'" alt="avatar de l'enfant" class="object-cover w-full h-full">
        </div>
        <div class="info">
          <h3 class="font-semibold text-2xl">{{ child.name }}</h3>
          <p class="text-slate-500">{{ child.age }} | <span :class="{ 'text-sky-500': child.sexe === 'male', 'text-pink-500': child.sexe === 'female' }">{{ child.sexe == 'male' ? 'Garçon': 'Fille' }}</span></p>
        </div>
      </header>
  
      <!-- Tabs ou sections de contenu -->
      <section class="tabs flex gap-4 font-semibold">
        <button class="tab-btn border-2 border-sky-500 text-sky-500 py-2 px-4 rounded w-1/3 " 
          :class="{ 'bg-sky-500 text-white': activeTab === 'activities' }" @click="activeTab = 'activities'"
        >
          Activités
        </button>

        <button class="tab-btn border-2 border-emerald-500 text-emerald-500 py-2 px-4 rounded w-1/3 " 
          :class="{ 'bg-emerald-500 text-white': activeTab === 'journal' }" @click="activeTab = 'journal'"
        >
          Journal
        </button>
        <button class="tab-btn border-2 border-yellow-500 py-2 px-4 rounded w-1/3 " 
          :class="{ 'bg-yellow-500 text-white': activeTab === 'alerts', 'text-yellow-500': activeTab !== 'alerts' }" @click="activeTab = 'alerts'"
        >
          Alertes
        </button>
      </section>
  
      <!-- Contenu de l'onglet sélectionné -->
      <div v-show="activeTab === 'activities'">
        <!-- Liste des activités -->
        <div class="activity-card bg-sky-100 p-4 rounded-lg shadow">
          <h4 class="font-semibold">Activités de la journée</h4>
          <ul>
            <li>Repas: <span>10h30 - Purée de légumes</span></li>
            <li>Coucher: <span>12h - Sieste de 2 heures</span></li>
          </ul>
        </div>
      </div>
  
      <div v-show="activeTab === 'journal'">
        <!-- Journal quotidien -->
        <div class="journal-card bg-emerald-100 p-4 rounded-lg shadow">
          <h4 class="font-semibold">Journal de la journée</h4>
          <p>12h30 - Henry a bien mangé et est allé se coucher. Aucun problème de santé à signaler.</p>
        </div>
      </div>
  
      <div v-show="activeTab === 'alerts'">
        <!-- Alertes et messages -->
        <div class="alert-card bg-yellow-50 p-4 rounded-lg shadow">
          <p class="font-semibold text-red-600">Alerte</p>
          <p>Problème de couche à 11h - Changement nécessaire.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const child = {
    name: "Henry Dubois",
    age: "6 mois",
    sexe: "male",
    avatar: "https://placekitten.com/200/200"
  }
  
  const activeTab = ref('activities')
  </script>
  
  <style scoped>

  </style>
  
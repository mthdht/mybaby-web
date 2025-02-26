<template>
    <div class="p-4 space-y-6">
      <!-- En-tête avec les informations de base -->
      <header class="flex gap-4 items-center">
        <div class="avatar w-24 h-24 rounded-full overflow-hidden">
          <img :src="child.avatar || 'default-avatar.png'" alt="avatar de l'enfant" class="object-cover w-full h-full">
        </div>
        <div class="info">
          <h3 class="font-semibold text-2xl">{{ child.name }}</h3>
          <p class="text-slate-500">{{ child.age }} | <span :class="{ 'text-blue-500': child.sexe === 'male', 'text-pink-500': child.sexe === 'female' }">{{ child.sexe }}</span></p>
        </div>
      </header>
  
      <!-- Tabs ou sections de contenu -->
      <section class="tabs flex gap-4">
        <button class="tab-btn bg-sky-500 text-white py-2 px-4 rounded-lg" :class="{ 'bg-sky-600': activeTab === 'activities' }" @click="activeTab = 'activities'">Activités</button>
        <button class="tab-btn bg-green-500 text-white py-2 px-4 rounded-lg" :class="{ 'bg-green-600': activeTab === 'journal' }" @click="activeTab = 'journal'">Journal</button>
        <button class="tab-btn bg-yellow-500 text-white py-2 px-4 rounded-lg" :class="{ 'bg-yellow-600': activeTab === 'alerts' }" @click="activeTab = 'alerts'">Alertes</button>
      </section>
  
      <!-- Contenu de l'onglet sélectionné -->
      <div v-if="activeTab === 'activities'">
        <!-- Liste des activités -->
        <div class="activity-card bg-white p-4 rounded-lg shadow">
          <h4 class="font-semibold">Activités de la journée</h4>
          <ul>
            <li>Repas: <span>10h30 - Purée de légumes</span></li>
            <li>Coucher: <span>12h - Sieste de 2 heures</span></li>
          </ul>
        </div>
      </div>
  
      <div v-if="activeTab === 'journal'">
        <!-- Journal quotidien -->
        <div class="journal-card bg-white p-4 rounded-lg shadow">
          <h4 class="font-semibold">Journal de la journée</h4>
          <p>12h30 - Henry a bien mangé et est allé se coucher. Aucun problème de santé à signaler.</p>
        </div>
      </div>
  
      <div v-if="activeTab === 'alerts'">
        <!-- Alertes et messages -->
        <div class="alert-card bg-red-50 p-4 rounded-lg shadow">
          <p class="font-semibold text-red-600">Alerte</p>
          <p>Problème de couche à 11h - Changement nécessaire.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const child = {
    name: "Henry",
    age: "6 mois",
    sexe: "male",
    avatar: "https://placekitten.com/200/200"
  }
  
  const activeTab = ref('activities')
  </script>
  
  <style scoped>
  /* Style personnalisé pour les onglets */
  .tab-btn {
    transition: background-color 0.3s;
  }
  .tab-btn:hover {
    background-color: #3b82f6; /* couleur de survol */
  }
  </style>
  
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
        :class="{ 'bg-sky-500 text-white': activeTab === 'journal' }" @click="activeTab = 'journal'"
      >
        Journaux 
      </button>

      <button class="tab-btn border-2 border-emerald-500 text-emerald-500 py-2 px-4 rounded w-1/3 " 
        :class="{ 'bg-emerald-500 text-white': activeTab === 'messages' }" @click="activeTab = 'messages'"
      >
        Messages
      </button>
      <button class="tab-btn border-2 border-yellow-500 py-2 px-4 rounded w-1/3 " 
        :class="{ 'bg-yellow-500 text-white': activeTab === 'informations', 'text-yellow-500': activeTab !== 'informations' }" @click="activeTab = 'informations'"
      >
        Informations
      </button>
    </section>

    <!-- Contenu de l'onglet sélectionné -->
    <Transition mode="out-in"
        enter-active-class="transition duration-200 ease-out"
        leave-active-class="transition duration-200 ease-in"
        enter-from-class="opacity-0 -translate-y-2"
        leave-to-class="opacity-0 translate-y-2"
    >

      <div v-if="activeTab === 'journal'">
        <!-- Liste des activités -->
        <div class="activity-card bg-sky-100 p-4 rounded shadow">
          <Accordion label="Lundi 24 Février 2025" open>
            <ul>
              <li>Repas: <span>10h30 - Purée de légumes</span></li>
              <li>Coucher: <span>12h - Sieste de 2 heures</span></li>
            </ul>
          </Accordion>
        </div>
      </div>
      
      <div v-else-if="activeTab === 'messages'">
        <!-- Journal quotidien -->
        <div class="journal-card bg-emerald-100 p-4 rounded shadow">
          <h4 class="font-semibold">Journal de la journée</h4>
          <p>12h30 - Henry a bien mangé et est allé se coucher. Aucun problème de santé à signaler.</p>
        </div>
      </div>
      
      <div v-else-if="activeTab === 'informations'">
        <!-- Alertes et messages -->
        <div class="alert-card bg-yellow-50 p-4 rounded shadow">
          <p class="font-semibold text-red-600">Alerte</p>
          <p>Problème de couche à 11h - Changement nécessaire.</p>
        </div>
      </div>
    </Transition>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import Accordion from '../components/Accordion.vue';

const child = {
  name: "Henry Dubois",
  age: "6 mois",
  sexe: "male",
  avatar: "https://placekitten.com/200/200"
}

const activeTab = ref('journal')
</script>
  
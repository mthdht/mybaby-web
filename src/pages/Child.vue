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
        :class="{ 'bg-emerald-500 text-white': activeTab === 'messages' }" @click="activeTab = 'messages'"
      >
        Messages
      </button>
      <button class="tab-btn border-2 border-yellow-500 py-2 px-4 rounded w-1/3 " 
        :class="{ 'bg-yellow-500 text-white': activeTab === 'informations', 'text-yellow-500': activeTab !== 'informations' }" @click="activeTab = 'informations'"
      >
        Infos
      </button>
    </section>

    <!-- Contenu de l'onglet sélectionné -->
    <Transition mode="out-in"
        enter-active-class="transition duration-200 ease-out"
        leave-active-class="transition duration-200 ease-in"
        enter-from-class="opacity-0 -translate-y-2"
        leave-to-class="opacity-0 translate-y-2"
    >

      <div v-if="activeTab === 'activities'">
        <!-- Liste des activités -->
        <div class="space-y-4">
          <Accordion
            :label="readableDay(transmission[0])" 
            class="bg-sky-100 activity-card rounded shadow p-4"
            v-for="(transmission,index)  in transmissionByDate(transmissions)"
            :open="index == 0"
          >
            <ul class="divide-y-2 divide-sky-200">
              <li class="flex gap-2 p-4" v-for="activity in transmission[1]">
                <template v-if="activity.type != 'resume'">
                  <span class="font-semibold w-12">{{ readableTime(activity.date) }}:</span>
                  <component :is="getIconFromTransmission(activity)" class="size-5 mt-[3px]"></component>
                  <p class="">
                    <span class="border-b-2 border-slate-500">{{  activity.type }}</span>: <span class="italic">{{ activity.type == 'sieste' ? timeFromValue(activity.value) : activity.value }}</span> 
                  </p>
                </template>
              </li>

              <li class="p-4 border journal-card p-4 rounded shadow" v-if="getResumeOfTheDay(transmission[1])">
                <h4 class="font-semibold mb-4">Journal de la journée</h4>
                <p> {{ getResumeOfTheDay(transmission[1]) }}</p>
              </li>
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
import { ref, computed } from 'vue'
import Accordion from '../components/Accordion.vue';
import { ArrowPathIcon, CakeIcon, MoonIcon } from '@heroicons/vue/24/outline';
import { timeFromValue, transmissions, readableTime, transmissionByDate, getResumeOfTheDay } from '../utils/data.js'
import { readableDay } from '../utils/data';

const child = {
  name: "Henry Dubois",
  age: "6 mois",
  sexe: "male",
  avatar: "https://placekitten.com/200/200"
}

const activeTab = ref('activities')


const getIconFromTransmission = (transmission) => {
  switch (transmission.type) {
    case 'sieste':
      return MoonIcon
      break;
    case 'repas':
      return CakeIcon
      break;
    case 'hygiene':
      return ArrowPathIcon
      break
  }
}

console.log(transmissionByDate(transmissions))
</script>
  
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
        <h4 class="mb-4 text-xl font-semibold flex justify-between items-center">
          <span class="flex gap-2 items-center">
            <NewspaperIcon class="size-6"></NewsPaperIcon>
            Tout les journaux quotidien    
          </span>
          <button class="bg-emerald-500 text-white rounded gap-2 p-2">
            <PlusCircleIcon class="size-6 stoke-2"></PlusCircleIcon>
          </button>
        </h4>

        <div class="space-y-4">
          <Accordion
            :label="readableDay(transmission[0])" 
            class="bg-sky-100 activity-card rounded shadow"
            v-for="(transmission,index)  in transmissionByDate(transmissions)"
            :open="index == 0"
          >
            <ul class="space-y-2">
              <template  v-for="activity in transmission[1]">
                <li class="flex gap-2 p-4 bg-sky-50 shadow  rounded" v-if="activity.type != 'resume'">
                  <span class="font-semibold w-12">{{ readableTime(activity.date) }}:</span>
                  <component :is="getIconFromTransmission(activity)" class="size-5 mt-[3px]"></component>
                  <p class="">
                    <span class="border-b-2 border-slate-500">{{  activity.type }}</span>: <span class="italic">{{ activity.type == 'sieste' ? timeFromValue(activity.value) : activity.value }}</span> 
                  </p>
                </li>
              </template>

              <li class="p-4 mt-4 border journal-card rounded shadow bg-sky-50" v-if="getResumeOfTheDay(transmission[1])">
                <h4 class="font-semibold mb-4">Journal de la journée</h4>
                <p> {{ getResumeOfTheDay(transmission[1]) }}</p>
              </li>
            </ul>
          </Accordion>

          
        </div>
      </div>
      
      <div v-else-if="activeTab === 'messages'" class="space-y-4">
        <h4 class="text-xl font-semibold flex items-center gap-2">
          <ChatBubbleBottomCenterTextIcon class="size-6"></ChatBubbleBottomCenterTextIcon>
          Messages reçus
        </h4>

        <div v-if="messages.length > 0" class="space-y-4">
          <div 
            v-for="message in sortedMessages" 
            :key="message.id"
            class="p-4 border-l-4 rounded shadow bg-white"
            :class="messageSeverityClass(message.severity)"
          >
            <div class="flex justify-between items-center">
              <h5 class="font-semibold">{{ message.object }}</h5>
              <span class="text-sm text-gray-500">{{ new Date(message.created_at).toLocaleDateString() }}</span>
            </div>

            <p class="text-gray-700 mt-2 whitespace-pre-line">{{ message.message }}</p>

            <span class="inline-block mt-2 text-xs font-semibold px-2 py-1 rounded-full" 
              :class="messageTypeClass(message.target)">
              {{ messageTargetLabel(message.target) }}
            </span>
          </div>
        </div>

        <p v-else class="text-gray-500 italic">Aucun message reçu pour l’instant.</p>
      </div>

      
      <div v-else-if="activeTab === 'informations'">
        <!-- Alertes et messages -->
        <div class="alert-card bg-yellow-50 p-4 rounded shadow">
          
        </div>
      </div>
    </Transition>
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'
import Accordion from '../components/Accordion.vue';
import { ArrowPathIcon, CakeIcon, ChatBubbleBottomCenterTextIcon, MoonIcon, NewspaperIcon, PlusCircleIcon } from '@heroicons/vue/24/outline';
import { timeFromValue, transmissions, readableTime, transmissionByDate, getResumeOfTheDay, readableDay, messages } from '../utils/data.js'

const child = {
  name: "Henry Dubois",
  age: "6 mois",
  sexe: "male",
  avatar: "https://placekitten.com/200/200"
}

const activeTab = ref('activities')


const getIconFromTransmission = (transmission) => {

  const iconMap = {
    sieste: MoonIcon,
    repas: CakeIcon,
    hygiene: ArrowPathIcon,
  };

  return iconMap[transmission.type] || null;
  
}

const sortedMessages = computed(() => {
  return [...messages].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
})

// Classe pour la bordure en fonction de la gravité du message
const messageSeverityClass = (severity) => {
  return {
    'border-red-500 bg-red-50': severity === 'danger',
    'border-yellow-500 bg-yellow-50': severity === 'warning',
    'border-sky-500 bg-sky-50': severity === 'info',
    'border-gray-500 bg-gray-50': severity === 'default'
  }
}

// Classe pour le badge en fonction du type de message
const messageTypeClass = (target) => {
  return {
    'bg-red-500 text-white': target === 'all',
    'bg-sky-500 text-white': target === 'creche',
    'bg-emerald-500 text-white': target === 'child'
  }
}

// Texte du badge en fonction du type de message
const messageTargetLabel = (target) => {
  return {
    'all': 'Message général',
    'creche': 'Message de la crèche',
    'child': 'Message personnel'
  }[target] || 'Inconnu'
}

</script>
  
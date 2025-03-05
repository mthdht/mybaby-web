<template>
  <div class=" space-y-">
    <div data-observer-intercept ref="intercept"></div>

    <div class="space-y-6 sticky top-0 z-50 bg-slate-50 p-4" ref="headerShadow">

      <!-- En-tête avec les informations de base -->
      <header class="flex gap-4 items-center">
          <div class="avatar w-24 h-24 rounded-full overflow-hidden border-2" :class="[child.sexe == 'male' ? 'border-sky-500' : 'border-pink-500']">
          <img :src="child.avatar || 'default-avatar.png'" alt="avatar de l'enfant" class="object-cover w-full h-full">
        </div>
        <div class="info">
          <h3 class="font-semibold text-2xl">{{ child.name }}</h3>
          <p class="text-slate-500">{{ calculateAge(child.birth_date) }} | <span :class="{ 'text-sky-500': child.sexe === 'male', 'text-pink-500': child.sexe === 'female' }">{{ child.sexe == 'male' ? 'Garçon': 'Fille' }}</span></p>
        </div>
      </header>


      <!-- Tabs ou sections de contenu -->
      <section class="tabs flex gap-2 font-semibold">
        <button class="tab-btn border-2 border-sky-500 text-sky-500 bg-sky-50 p-1 rounded w-1/3 " 
          :class="{ 'bg-sky-500 text-white': activeTab === 'activities' }" @click="activeTab = 'activities'"
        >
          Activités 
        </button>

        <button class="tab-btn border-2 border-sky-500 text-sky-500 bg-sky-50 p-1 rounded w-1/3 " 
          :class="{ 'bg-sky-500 text-white': activeTab === 'messages' }" @click="activeTab = 'messages'"
        >
          Messages
        </button>
        <button class="tab-btn border-2 border-sky-500 text-sky-500 bg-sky-50 p-1 rounded w-1/3 " 
          :class="{ 'bg-sky-500 text-white': activeTab === 'informations' }" @click="activeTab = 'informations'"
          >
          Infos
        </button>
      </section>
    </div>

    <!-- Contenu de l'onglet sélectionné -->
    <Transition mode="out-in"
        enter-active-class="transition duration-200 ease-out"
        leave-active-class="transition duration-200 ease-in"
        enter-from-class="opacity-0 -translate-y-2"
        leave-to-class="opacity-0 translate-y-2"
    >

      <div v-if="activeTab === 'activities'" class="p-4">
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

        <div class="space-y-4" v-if="transmissions">
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

        <p v-else>Aucune activité !</p>
      </div>
      
      <div v-else-if="activeTab === 'messages'" class="space-y-4 p-4">
        <h4 class="text-xl font-semibold flex items-center justify-between">
          <span class="flex gap-2 items-center">
            <ChatBubbleBottomCenterTextIcon class="size-6"></ChatBubbleBottomCenterTextIcon>
            Messages reçus
          </span>

          <button class="bg-emerald-500 text-white rounded gap-2 p-2">
            <PlusCircleIcon class="size-6 stoke-2"></PlusCircleIcon>
          </button>
        </h4>

        <section class="filters grid grid-cols-2 gap-2">
            <Select v-model="filters.severity" :options="severityOptions" placeholder="Types" class=""></Select>
            <Select v-model="filters.target" :options="targetOptions" placeholder="Destinataire" class=""></Select>
        </section>

        <div v-if="messages.length > 0" class="space-y-4">
          <div 
            v-for="message in filteredMessages" 
            :key="message.id"
            class="p-4 border-l-4 rounded shadow"
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

      
      <div v-else-if="activeTab === 'informations'" class="p-4">
        <!-- Informations -->
        <h4 class="mb-4 text-xl font-semibold flex justify-between items-center">
          <span class="flex gap-2 items-center">
            <InformationCircleIcon class="size-6"></InformationCircleIcon>
            Informations sur {{ child.first_name }}    
          </span>
          <button class="bg-emerald-500 text-white rounded gap-2 p-2">
            <PlusCircleIcon class="size-6 stoke-2"></PlusCircleIcon>
          </button>
        </h4>

        <div class="space-y-4">
          <Accordion
            label="Parents" 
            class="bg-sky-100 activity-card rounded shadow"
            open
          >
            <ul class="space-y-2">
              <template  v-for="parent in child.parents">
                <li class="p-4 bg-sky-50 shadow rounded">
                  <p class="font-semibold mb-2">
                    {{ parent.first_name }} {{  parent.last_name }}
                  </p>

                  <p class="text-sm"><span class="font-semibold">Email:</span> <span>{{ parent.email }}</span></p>

                  <p class="text-sm"><span class="font-semibold">Tél:</span> <span>{{ parent.phone }}</span></p>
                </li>
              </template>
            </ul>
          </Accordion>


          <Accordion
            label="Maladies" 
            class="bg-sky-100 activity-card rounded shadow"
          >
            <ul class="space-y-2" v-if="child.health.illnesses">
              <template  v-for="illness in child.health.illnesses">
                <li class="p-4 bg-sky-50 shadow rounded">
                  <p class="font-semibold mb-2">
                    {{ illness.name }}
                  </p>

                  <p class="text-sm">{{ illness.description }}</p>
                </li>
              </template>
            </ul>

            <p v-else class="text-gray-500 italic">Aucun maladie coonu à ce jour.</p>
          </Accordion>

          <Accordion
            label="Allergies" 
            class="bg-sky-100 activity-card rounded shadow"
          >
            <ul class="space-y-2" v-if="child.health.allergies">
              <template  v-for="allergy in child.health.allergies">
                <li class="p-4 bg-sky-50 shadow rounded">
                  <p class="font-semibold mb-2 flex justify-between">
                    {{ allergy.name }}

                    <span class="rounded-full border px-2 py-1 font-normal text-xs" :class="allergyBadgeClass(allergy.severity)">{{ allergy.severity }}</span>
                  </p>

                  <p class="text-sm">{{ allergy.description }}</p>
                </li>
              </template>
            </ul>

            <p v-else class="text-gray-500 italic">Aucun allergie connu à ce jour.</p>
          </Accordion>

          <Accordion
            label="Medications" 
            class="bg-sky-100 activity-card rounded shadow"
          >
            <ul class="space-y-2" v-if="child.health.medications">
              <template  v-for="medication in child.health.medications">
                <li class="p-4 bg-sky-50 shadow rounded">
                  <p class="font-semibold mb-2 flex justify-between">
                    {{ medication.name }}
                  </p>

                  <p class="text-sm">{{ medication.dosage }}</p>
                  <p class="text-sm flex gap-2 items-center border p-3 mt-2">
                    <InformationCircleIcon class="size-6"></InformationCircleIcon>
                    {{ medication.note }}
                  </p>
                </li>
              </template>
            </ul>

            <p v-else class="text-gray-500 italic">Aucun medication requise.</p>
          </Accordion>

          <Accordion
            label="Informations complémentaire" 
            class="bg-sky-100 activity-card rounded shadow"
          >
            <ul class="space-y-2" v-if="child.additional_notes">
              <template  v-for="note in child.additional_notes">
                <li class="p-4 bg-sky-50 shadow rounded">
                  <p class=" text-sm flex gap-2">
                    <component :is="noteSeverityIcon(note)" class="size-6"></component>
                    {{ note.note }}
                  </p>
                </li>
              </template>
            </ul>
            
            <p v-else class="text-gray-500 italic">Aucun notes.</p>
          </Accordion>
        </div>
      </div>
    </Transition>
  </div>
</template>
  
<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import Accordion from '../components/Accordion.vue';
import { ArrowPathIcon, CakeIcon, ChatBubbleBottomCenterTextIcon, MoonIcon, NewspaperIcon, PlusCircleIcon, InformationCircleIcon, ExclamationTriangleIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline';
import { timeFromValue, transmissions, readableTime, transmissionByDate, getResumeOfTheDay, readableDay, messages, child } from '../utils/data.js'
import Select from '../components/Select.vue'


onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    headerShadow.value.classList.toggle("shadow", !entry.isIntersecting);
  });

  observer.observe(intercept.value);
})

const activeTab = ref('activities')
const headerShadow = ref()
const intercept = ref()

const filters = reactive({
    severity: "",
    target: "",
})

const severityOptions = [
  {label: 'Tous les types', value: null},
  {label: 'Information', value: 'info'},
  {label: 'Attention', value: 'warning'},
  {label: 'Important', value: 'danger'},
]

const targetOptions = [
  {label: 'Tout destinataires', value: null},
  {label: 'Enfant', value: 'child'},
  {label: 'Crèche', value: 'creche'},
  {label: 'Générale', value: 'all'},
]


const filteredMessages = computed(() => {
    return messages
        .filter(message => filters.severity ? message.severity == filters.severity : true)
        .filter(message => filters.target ? message.target == filters.target : true)
        .slice()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
})

const getIconFromTransmission = (transmission) => {

  return  {
    sieste: MoonIcon,
    repas: CakeIcon,
    hygiene: ArrowPathIcon,
  }[transmission.type] || null;
  
}

const calculateAge = (birthdate) => {
  const now = new Date();
  const birthDate = new Date(birthdate);
  
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  
  // Si le mois actuel est avant le mois de naissance, on retire 1 an et on ajuste les mois
  if (months < 0) {
    years--;
    months += 12;
  }

  // Si l'enfant n'a pas encore un an, afficher en mois uniquement
  if (years === 0) {
    return `${months} mois`;
  }

  // Si l'enfant a plus d'un an, afficher l'âge en années et mois
  if (months === 0) {
    return `${years} an${years > 1 ? 's' : ''}`;
  }

  return `${years} an${years > 1 ? 's' : ''} et ${months} mois`;
};

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


const allergyBadgeClass = (severity) => {
  return {
    'border-red-500 bg-red-50': severity === 'forte',
    'border-yellow-500 bg-yellow-50': severity === 'moyenne',
    'border-sky-500 bg-sky-50': severity === 'legère',
    'border-gray-500 bg-gray-50': severity === 'default'
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

const noteSeverityIcon = (note) => {
  return {
    'info': InformationCircleIcon,
    'warning': ExclamationCircleIcon,
    'danger': ExclamationTriangleIcon
  }[note.severity]
}
</script>
  
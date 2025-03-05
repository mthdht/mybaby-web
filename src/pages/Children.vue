<template>
    <div class="p-4 space-y-4">
        <h2 class="font-semibold text-xl flex justify-between">
            <div class="flex gap-3 items-center">
                <UserIcon class="size-7 text-indigo-500"></UserIcon>
                Gerer les enfants !
            </div>
            <button class="bg-emerald-500 px-3 py-1 rounded shadow">
                <UserPlusIcon class="size-7 text-white"></UserPlusIcon>
            </button>
        </h2>

        <div class="wrapper space-y-3">
            
            <section class="search relative">
                <MagnifyingGlassIcon class="size-6 absolute text-slate-500 m-[9px]"></MagnifyingGlassIcon>
                <input 
                    v-model="filters.search" 
                    type="text" 
                    placeholder="Rechercher un enfant..." 
                    class="w-full px-3 py-2 pl-9 border rounded shadow focus:ring focus:outline-sky-500 focus-visible:outline-none"
                >
            </section>

            <section class="filters flex justify-between gap-2">
                <Select v-model="filters.creche" 
                    :options="[{label: 'Toutes crèches', value: null}, {label: 'Creche 1', value: 'creche 1'}, {label: 'Creche 2', value: 'creche 2'}]" 
                    class="w-1/2"
                    placeholder="Trier par crèche"
                ></Select>

                <Select v-model="filters.sort" 
                    :options="[{label: 'Aucun tri', value: null}, {label: 'Nom', value: 'name'}, {label: 'Sexe', value: 'sexe'}]" 
                    placeholder="Trier par" class="w-1/2"
                ></Select>
            </section>

            <p v-if="filteredChildren.length === 0" class="flex gap-4 items-center text-gray-500 border p-4 rounded">
                <ExclamationCircleIcon class="size-7 text-yellow-500"></ExclamationCircleIcon>
                Aucun enfant trouvé pour ces critères.
            </p>

            <section class="children grid grid-cols-3 gap-4" v-else>
                <div class="child aspect-square border shadow flex flex-col justify-between items-center p-2 relative rounded" v-for="(child, index) in filteredChildren">
                    <div class="badge absolute top-2 left-2 size-4 rounded-full"
                    :class="[child.sexe == 'male' ? 'bg-sky-500' : 'bg-pink-500']"></div>
                    
                    <div class="avatar self-center size-16 rounded-full border overflow-hidden">
                        <img :src="child.avatar || 'ok'" alt="" class="size-full object-cover">
                    </div>
                    
                    <span class="font-semibold">{{  child.name }}</span>
                </div>
            </section>
        </div>

        <RouterLink to="/children/child">child detail</RouterLink>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import Select from '../components/Select.vue'
import { UserPlusIcon, UserIcon, ExclamationCircleIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';
import { children } from '../utils/data.js'

const filters = reactive({
    creche: "",
    sort: "",
    search: ""
})

const filteredChildren = computed(() => {
    return children
        .filter(child => filters.creche ? child.creche == filters.creche : true)
        .filter(child => child.name.toLowerCase().includes(filters.search.toLowerCase()))
        .slice()
        .sort((a, b) => a[filters.sort]?.localeCompare(b[filters.sort]))
})
</script>
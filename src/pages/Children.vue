<template>
    <div class="p-4 space-y-6">
        <h2 class="font-semibold text-xl flex gap-3">
            <UserIcon class="size-7 text-indigo-500"></UserIcon>
            Gerer les enfants !
        </h2>

        <section class="filters flex gap-4">
            <Select v-model="filters.creche" :options="['creche 1', 'creche 2']" class="grow"></Select>
            <Select v-model="filters.sort" :options="['Nom', 'Prénom']" class="grow"></Select>
            <button class="bg-emerald-500 px-3 py-1 rounded shadow">
                <UserPlusIcon class="size-7 text-white"></UserPlusIcon>
            </button>
        </section>

        <section class="children grid grid-cols-3 gap-4">
            <div class="child aspect-square border shadow flex flex-col justify-between items-center p-2 relative rounded" v-for="(child, index) in filteredChildren">
                <div class="badge absolute top-2 left-2 size-4 bg-sky-500 rounded-full"
                    :class="[child.sexe == 'male' ? 'bg-sky-500' : 'bg-pink-500']"></div>

                <div class="avatar self-center size-16 rounded-full border"></div>
                
                <span class="font-semibold">{{  child.name }}</span>
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import Select from '../components/Select.vue'
import { UserPlusIcon, UserIcon } from '@heroicons/vue/24/outline';

const filters = reactive({
    creche: "creche 1",
    sort: "Trier par"
})

const children = [
    {
        name: "Henry",
        creche: "creche 1",
        age: "6 mois",
        sexe: 'male'
    },
    {
        name: "Stephanie",
        creche: "creche 1",
        age: "6 mois",
        sexe: 'female'
    },
    {
        name: "Stephanie",
        creche: "creche 2",
        age: "6 mois",
        sexe: 'female'
    },
    {
        name: "Stephanie",
        creche: "creche 2",
        age: "6 mois",
        sexe: 'female'
    },
    {
        name: "Oscar",
        creche: "creche 1",
        age: "6 mois",
        sexe: 'male'
    },
    {
        name: "Arthur",
        creche: "creche 2",
        age: "6 mois",
        sexe: 'male'
    },
    {
        name: "Stephanie",
        age: "6 mois"
    },
    {
        name: "Stephanie",
        age: "6 mois"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },
    {
        name: "Stephanie"
    },

]

const filteredChildren = computed(() => {
    return children.filter(child => child.creche == filters.creche)
})
</script>
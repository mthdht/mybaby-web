<template>
    <div class="p-4 space-y-6">
        <section class="filters flex gap-4">
            <Select v-model="filters.creche" :options="['creche 1', 'creche 2']" class="grow"></Select>
            <Select v-model="filters.sort" :options="['Nom', 'Prénom']" class="grow"></Select>
            <button class="bg-emerald-500 px-3 py-1 rounded shadow">
                <UserPlusIcon class="size-7 text-white"></UserPlusIcon>
            </button>
        </section>

        <section class="children grid grid-cols-3 gap-4">
            <div class="child aspect-square border shadow" v-for="(child, index) in filteredChildren">
                {{ child.name }}
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import Select from '../components/Select.vue'
import { UserPlusIcon } from '@heroicons/vue/24/outline';

const filters = reactive({
    creche: "creche 1",
    sort: "Trier par"
})

const children = [
    {
        name: "Henry",
        creche: "creche 1"
    },
    {
        name: "Stephanie",
        creche: "creche 1"
    },
    {
        name: "Stephanie",
        creche: "creche 2"
    },
    {
        name: "Stephanie",
        creche: "creche 2"
    },
    {
        name: "Oscar",
        creche: "creche 1"
    },
    {
        name: "Arthur",
        creche: "creche 2"
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
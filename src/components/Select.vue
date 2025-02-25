<template>
    <div class="select-wrapper relative">
        <div class="select px-3 py-1 rounded border flex gap-2 items-center font-semibold shadow" @click="showOptions = !showOptions">
            <p>{{  model }}</p>
            <ChevronDownIcon class="size-5 stroke-2"></ChevronDownIcon>
        </div>
        
        <div class="options mt-2 rounded border divide-y absolute bg-white min-w-40 shadow" v-show="showOptions">
            <div class="option px-3 py-1 hover:bg-slate-50" v-for="option in options" @click="chooseOption(option)">{{ option }}</div>
        </div>
    </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const props = defineProps({
    options: {
        type: Array,
        default: () => []
    }
})
const model = defineModel()

const showOptions = ref(false)

const chooseOption = (option) => {
    showOptions.value = false
    model.value = option
}


</script>
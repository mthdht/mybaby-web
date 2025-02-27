<template>
    <div class="accordion space-y-4">
        <p class="font-semibold flex justify-between items-center cursor-pointer" @click="showContent = !showContent">
            <span>{{ props.label }}</span>
            <span><ChevronDownIcon class="size-6 stroke-2"></ChevronDownIcon></span>
        </p>
        <Transition
            enter-active-class="transition-[grid-template-rows] duration-200 ease-in-out"
            leave-active-class="transition duration-200 ease-in-out"
            enter-from-class="opacity-0 -translate-y-2 grid-rows-0"
            leave-to-class="opacity-0 -translate-y-2 grid-rows-0"
        >
            <div class="accordion-content grid-rows-1"v-show="showContent">
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    label: String,
    open: Boolean
})

const showContent = ref(props.open)
</script>
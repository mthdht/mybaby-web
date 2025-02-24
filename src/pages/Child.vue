<template>
    <section class="rounded-lg overflow-hidden bg-yellow-200 relative">
        <img src="" alt="" class="w-full object-cover h-96 max-h-96">
        <p class="absolute bottom-4 px-4 flex w-full gap-4 items-center">
            <span class="grow font-bold text-xl">Oscar</span>
            <span class="font-bold text-sm">6mois</span>
            <span class="font-bold text-sm">7.5 kg</span>
        </p>
    </section>

    <section class="font-semibold">
        <h3 class="font-bold mb-4 text-xl flex justify-between">
            <span>Dernière activités</span>
            <button class="rounded bg-emerald-500 text-white text-sm px-2 py-1 flex gap-2 items-center">
                Ajouter <plusIcon class="size-6 stroke-2"></plusIcon>
            </button>
        </h3>
        <ul class="space-y-2">
            <li class="flex gap-6 bg-sky-50 px-3 py-2 items-center rounded shadow">
                <div class="icon">
                    <FoodIcon class="size-6 fill-sky-500"></FoodIcon>
                </div>
                <div class="label text-lg grow">Repas</div>
                <div class="value">210 ml</div>
                <div class="time">14h30</div>
            </li>

            <li class="flex gap-6 bg-sky-50 px-3 py-2 items-center rounded shadow">
                <div class="icon">
                    <FoodIcon class="size-6 fill-sky-500"></FoodIcon>
                </div>
                <div class="label text-lg grow">Repas</div>
                <div class="value">210 ml</div>
                <div class="time">14h30</div>
            </li>

            <li class="flex gap-6 bg-sky-50 px-3 py-2 items-center rounded shadow">
                <div class="icon">
                    <FoodIcon class="size-6 fill-sky-500"></FoodIcon>
                </div>
                <div class="label text-lg grow">Repas</div>
                <div class="value">210 ml</div>
                <div class="time">14h30</div>
            </li>

            <li class="flex gap-6 bg-sky-50 px-3 py-2 items-center rounded shadow">
                <div class="icon">
                    <FoodIcon class="size-6 fill-sky-500"></FoodIcon>
                </div>
                <div class="label text-lg grow">Repas</div>
                <div class="value">210 ml</div>
                <div class="time">14h30</div>
            </li>

            <li class="flex gap-6 bg-sky-50 px-3 py-2 items-center justify-center rounded shadow">
                <button class="font-bold">Voir plus +</button>
            </li>
        </ul>
    </section>
</template>
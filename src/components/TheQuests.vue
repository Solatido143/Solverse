<script setup>
import { ref } from 'vue';

const mainQuests = ref([
    { id: 1, title: "First Main Quest", desc: "First Main Quest", reward: "+200 EXP", status: "Available" },
    { id: 2, title: "Second Main Quest", desc: "Second Main Quest", reward: "50 Gold", status: "In Progress" },
])

</script>

<template>
    <div class="w-full p-4 sm:p-8 mt-3">
        <div
            class="flex items-center justify-between mb-4 bg-slate-gray bg-center rounded-2xl shadow-lg p-3 ">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Quest Board
            </h5>
            <a href="#" class="text-sm hover:text-yellow-400 hover:underline">See more</a>
        </div>

        <div class="w-full">
            <h5 class="text-lg my-5! font-bold leading-none text-gray-900 dark:text-white">Main Quest</h5>
            <div>
                <ul role="list" class="divide-y divide-gray-200">

                    <li v-for="(mainQuest, index) in mainQuests" :key="mainQuest.id">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ mainQuest.title }}
                                </h3>
                                <p class="text-sm text-gray-600 dark:text-gray-400">{{ mainQuest.desc }}</p>
                                <span class="text-xs text-green-600">{{ mainQuest.reward }}</span>
                            </div>
                            <button class="bg-yellow-400 text-black px-3 dark:text-yellow py-1 rounded-lg hover:bg-yellow-500">
                                Complete
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="w-full">
            <h5 class="text-lg my-5! font-bold leading-none text-gray-900 dark:text-white">Side Quest</h5>

        </div>


        <div class="w-full">
            <h5 class="text-lg my-5! font-bold leading-none text-gray-900 dark:text-white">Adventure Quest</h5>

        </div>
    </div>
</template>

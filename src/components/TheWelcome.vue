<script setup></script>

<template>
  <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Welcome, Adventurer!</h2>
  <p class="hidden text-lg text-gray-300 mb-8 max-w-2xl mt-3!">
    Track your coding quests, earn rewards, and level up your developer journey. Will you conquer
    the scroll… or be conquered by it?
  </p>
  <p class="md:hidden text-lg text-gray-300 mb-8 max-w-2xl mt-3!">
    Track your coding quests, earn rewards, and level up your developer journey.
  </p>
  <RouterLink to="/quests"
    class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 mt-3! rounded-xl shadow-lg transition inline-flex justify-center items-center gap-2">
    Start Quest
    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M1 5h12m0 0L9 1m4 4L9 9" />
    </svg>
  </RouterLink>
</template>

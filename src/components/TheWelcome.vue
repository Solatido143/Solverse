<script setup>

</script>

<template>
  <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Welcome, Adventurer!</h2>
      <p class="text-lg text-gray-300 mb-8 max-w-2xl">
        Track your coding quests, earn rewards, and level up your developer journey. 
        Will you conquer the scroll… or be conquered by it?
      </p>
      <RouterLink
        to="/quests"
        class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transition"
      >
        Start Questing
      </RouterLink>
</template>

<script setup>
import TheCard from '../components/TheCard.vue'
</script>

<template>
  <main class="flex-grow px-6 py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
    <div class="flex justify-center">
      <div class="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <TheCard 
        title="Mudae Extractor"
        desription="Extract name from your $top"
        to="/mudae-top-name-extractor"
        />
        <TheCard 
        title="Tiypaniki"
        desription="A world where hidden powers shape fate — and family ties are more dangerous than any curse."
        to="/tiypaniki"
        />
      </div>
    </div>
  </main>
</template>

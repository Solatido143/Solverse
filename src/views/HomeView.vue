<script setup>
import TheCard from '../components/TheCard.vue'
</script>

<template>
  <main class="flex-grow p-2 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
    <div class="flex justify-center">
      <div class="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <TheCard 
          title="Mudae Extractor" 
          desription="Extract name from your $top" 
          to="/mudae-top-name-extractor" />
        <TheCard 
          title="Tiypaniki"
          desription="A world where hidden powers shape fate — and family ties are more dangerous than any curse."
          to="/tiypaniki" />
        <TheCard 
          title="Coordinates Converter"
          desription="Convert your minecraft coordinates from overworld to nether or nether to overworld"
          to="/coor-convert" />
      </div>
    </div>
  </main>
</template>

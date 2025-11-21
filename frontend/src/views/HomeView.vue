<script setup>
import TheCard from '../components/TheCard.vue'
</script>

<template>
  <main class="flex-grow mt-16 p-3 bg-gradient-to-b from-gray-900 to-black">
    <div class="flex justify-center">
      <div class="max-w-4xl">
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <TheCard title="Mudae Extractor" desription="Extract name from your $top" to="/mudae-top-name-extractor" />
          <TheCard title="Tiypaniki"
            desription="A world where hidden powers shape fate — and family ties are more dangerous than any curse."
            to="/tiypaniki" />
          <TheCard title="Coordinates Converter"
            desription="Convert your minecraft coordinates from overworld to nether or nether to overworld"
            to="/coor-convert" />
          <TheCard title="Sample API Implementation"
            desription="Books API implementation using Laravel Restful API and Vue 3"
            to="/books" />
        </div>
      </div>
    </div>
  </main>
</template>

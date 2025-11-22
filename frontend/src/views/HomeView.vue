<script setup>
import TheCard from '../components/TheCard.vue'
</script>

<template>
  <main class="mt-16 bg-gradient-to-b">
    <section class="p-5 pb-10 md:p-10">
      <div
        class="grid grid-cols-1 md:grid-cols-2 bg-starry-night-void/80 border border-info-blue-azurmist rounded-base shadow-xs md:flex-row">
        <img class="object-contain max-h-screen w-full rounded-base mb-4 md:mb-0" src="../assets/solverseicon.png"
          alt="">

        <div class="flex flex-col justify-center p-4 leading-normal">
          <h5 class="mb-8 text-5xl font-bold tracking-tight text-heading">Explore digital creativity through interactive
            tools</h5>
          <p class="mb-8 text-body">Solverse transforms curiosity into digital experiences. We build experimental web tools that challenge imagination and push technological boundaries.</p>
          <div class="flex space-x-4">
            <button type="button"
              class="inline-flex items-center w-auto text-starry-night-void bg-accent-glow-lumina-core box-border border border-gray-300/20 hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Explore
            </button>
            <button type="button"
              class="inline-flex items-center w-auto text-starry-night-void bg-accent-pink-seraph box-border border border-gray-300/20 hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Learn
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="max-h-screen p-10">
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
              desription="Books API implementation using Laravel Restful API and Vue 3" to="/books" />
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
</script>

<template>

  <div class="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

    <RouterLink to="/mudae-top-name-extractor"
      class="group block p-6 rounded-2xl border border-gray-300/20 bg-white/10 dark:bg-gray-800/40 backdrop-blur-sm shadow-md transition-all duration-300 ease-out hover:scale-[1.04] hover:border-accent-glow-lumina-core hover:shadow-[0_0_20px_var(--color-accent-glow-lumina-core)] relative overflow-hidden">

      <!-- Glow Overlay -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,var(--color-accent-glow-lumina-core)_0%,transparent_70%)] blur-xl">
      </div>

      <!-- Title -->
      <h5 class="relative mb-2 text-2xl font-semibold tracking-wide text-raisin-black dark:text-white">
        Mudae Extractor
      </h5>

      <!-- Description -->
      <p class="relative text-sm text-slate-gray dark:text-gray-300">Extract name from your $top </p>
    </RouterLink>

  </div>

</template>

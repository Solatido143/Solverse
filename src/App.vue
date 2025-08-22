<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col">
    <!-- Header -->
    <header class="p-6 flex justify-between items-center border-b border-gray-700">
      <div class="flex items-center">
        <img src="./assets/dsoqtransparenticon.png" height="50" width="50">
        <h1 class="text-2xl font-bold tracking-wide"> Doom Scroll of Quest</h1>
      </div>
      <nav class="space-x-4 flex gap-3">
        <RouterLink to="/" class="hover:text-yellow-400">Home</RouterLink>
        <RouterLink to="/quests" class="hover:text-yellow-400">Quests</RouterLink>
        <RouterLink to="/about" class="hover:text-yellow-400">About</RouterLink>
      </nav>
    </header>

    <!-- Main Content -->
    <RouterView />

    <!-- Footer -->
    <footer class="p-4 text-center text-gray-500 text-sm border-t border-gray-700">
      &copy; 2025 Doom Scroll of Quest. All rights reserved.
    </footer>
  </div>

  
</template>

<style scoped>
</style>

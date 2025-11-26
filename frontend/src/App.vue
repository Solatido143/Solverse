<script setup>
import {RouterView } from 'vue-router'
import TheNav from "./components/TheNav.vue";

</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-starry-night-void via-midnight-panel-astral to-starry-night-void 
  text-text-primary-silverlight flex flex-col font-sans tracking-wide selection:bg-accent-glow-lumina-core selection:text-starry-night-void">

    <!-- Header -->52
    <TheNav />

    <!-- Main Content -->
    <RouterView />

    <!-- Footer -->
    <footer
      class="p-1 text-center text-text-muted-ashen text-sm border-t border-border-soft-veil bg-midnight-panel-astral shadow-inner">
      &copy; 2025 Solverse. All rights reserved.
    </footer>
  </div>
</template>

<style scoped></style>

<script setup>
import {RouterView } from 'vue-router'
import TheNav from "./components/TheNav.vue";

</script>

<template>
  <div
    class="min-h-screen text-text-primary-silverlight flex flex-col tracking-wide selection:bg-accent-glow-lumina-core selection:text-starry-night-void">

    <!-- Header -->
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

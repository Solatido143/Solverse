<script setup>
import { RouterView } from 'vue-router'
import TheNav from "./components/TheNav.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <div class="min-h-screen text-text-primary-silverlight flex flex-col tracking-wide selection:bg-accent-glow-lumina-core selection:text-starry-night-void">
    <TheNav />
    <RouterView /> <!-- Main Content -->
    <Footer />
  </div>
</template>

<style scoped></style>

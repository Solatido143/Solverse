<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-starry-night-void via-midnight-panel-astral to-starry-night-void 
  text-text-primary-silverlight flex flex-col font-sans tracking-wide selection:bg-accent-glow-lumina-core selection:text-starry-night-void">

    <!-- Header -->
    <header class="border-b border-border-soft-veil bg-midnight-panel-astral shadow-md">
      <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./assets/solverseicon.png" class="h-8 hidden  " alt="Solverse Logo" />
            <span
              class="self-center text-2xl font-bold whitespace-nowrap text-accent-glow-lumina-core tracking-widest uppercase">
              Solverse
            </span>
          </a>

          <!-- Burger button -->
          <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text-muted-ashen rounded-lg md:hidden 
          hover:bg-surface-hover-oblivion focus:outline-none focus:ring-2 focus:ring-accent-soft-ethereal transition">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <!-- Navigation Links -->
          <div :class="[isOpen ? 'block' : 'hidden', 'w-full md:block md:w-auto mt-3 md:mt-0 pt-3 md:pt-0']" id="navbar-default">
            <ul class="font-medium flex flex-col gap-3 p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 
            md:border-0 border-border-soft-veil bg-midnight-panel-astral/70 backdrop-blur-sm">
              <li>
                <RouterLink to="/" class="block hover:text-accent-glow-lumina-core transition-colors">Home</RouterLink>
              </li>
              <!-- <li>
                <RouterLink to="/quests" class="hover:text-accent-pink-seraph transition-colors">Quests</RouterLink>
              </li> -->
              <li>
                <RouterLink to="/about" class="block hover:text-accent-soft-ethereal transition-colors">About</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <RouterView />

    <!-- Footer -->
    <footer
      class="p-4 text-center text-text-muted-ashen text-sm border-t border-border-soft-veil bg-midnight-panel-astral shadow-inner">
      &copy; 2025 Solverse. All rights reserved.
    </footer>
  </div>
</template>

<style scoped></style>

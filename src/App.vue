<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col"
  >
    <!-- Header -->
    <header class="border-b border-gray-700">
      <nav class="">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="http://localhost:5173/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./assets/dsoqtransparenticon.png" class="h-8" alt="Flowbite Logo" />
            <span class="hidden sm:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Doom Scroll of Quest</span
            >
          </a>
          <!-- Burger button -->
          <button
            @click="isOpen= !isOpen"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div :class="[isOpen ? 'block' : 'hidden', 'w-full md:block md:w-auto mt-3! md:mt-0!']" id="navbar-default">
            <ul
              class="font-medium flex flex-col gap-3 p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
            >
              <li>
                <RouterLink to="/" class="hover:text-yellow-400 ">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/quests" class="hover:text-yellow-400">Quests</RouterLink>
              </li>
              <li>
                <RouterLink to="/about" class="hover:text-yellow-400">About</RouterLink>
              </li>
            </ul>
          </div>
        </div>
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

<style scoped></style>

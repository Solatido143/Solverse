<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue";
import TheSideBar from "./TheSideBar.vue"

const isSidebarOpen = ref(false)

</script>

<template>
    <header class="border-b border-border-soft-veil bg-midnight-panel-astral shadow-md">
        <nav>
            <div class="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./assets/solverseicon.png" class="h-8 hidden  " alt="Solverse Logo" />
                    <span
                        class="self-center text-2xl font-bold whitespace-nowrap text-accent-glow-lumina-core tracking-widest uppercase">
                        Solverse
                    </span>
                </a>

                <button @click="isSidebarOpen = true" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text-muted-ashen rounded-lg md:hidden hover:bg-surface-hover-oblivion focus:outline-none focus:ring-2 focus:ring-accent-soft-ethereal transition">
                    <span class="sr-only">Menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <TheSideBar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />

                <div class="hidden md:block md:w-auto mt-3 md:mt-0 pt-3 md:pt-0">
                    <ul
                        class="font-medium flex flex-col gap-2 p-2 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-border-soft-veil bg-midnight-panel-astral/70 backdrop-blur-sm">
                        <li>
                            <RouterLink to="/" class="block hover:text-accent-glow-lumina-core transition-colors">Home
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about" class="block hover:text-accent-soft-ethereal transition-colors">
                                About</RouterLink>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>
    </header>

</template>
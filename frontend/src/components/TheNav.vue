<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref } from "vue";
import TheSideBar from "./TheSideBar.vue"

const isSidebarOpen = ref(false)
const route = useRoute()

const isActive = (path) => {
    return route.path === path;
}

</script>

<template>
    <header class="border-b border-border-soft-veil bg-cinder shadow-md fixed z-30 w-full h-16">
        <nav>
            <div class="flex flex-wrap items-center justify-between mx-auto px-4 md:px-10 h-16">
                <div class="hidden md:block md:w-auto mt-3 md:mt-0 pt-3 md:pt-0">
                    <ul
                        class="font-medium flex flex-col gap-2 p-2 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 border-border-soft-veil bg-midnight-panel-astral/70 backdrop-blur-sm">
                        <li>
                            <RouterLink to="/" :class="[
                                'block transition-colors hover:text-cornflower-blue',
                                isActive('/') ? 'text-cornflower-blue' : 'text-text-primary-silverlight',
                            ]">
                                Home
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about" :class="[
                                'block transition-colors hover:text-cornflower-blue',
                                isActive('/about') ? 'text-cornflower-blue' : 'text-text-primary-silverlight',
                            ]">
                                About
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Logo/Title -->
                <a href="/"
                    class="flex items-center space-x-3 rtl:space-x-reverse md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                    <img src="../assets/favicon.png" class="h-8 md:hidden" alt="Solverse Logo" />
                    <span
                        class="hidden md:block self-center text-2xl font-bold whitespace-nowrap text-cornflower-blue tracking-widest uppercase">
                        Solverse
                    </span>
                </a>

                <!-- Button -->
                <button class="hidden md:inline-flex items-center px-4 py-1 bg-cornflower-blue text-text-primary-silverlight font-medium shadow-[0_4px_0_0] shadow-cornflower-blue-darker hover:bg-cornflower-blue-dark active:shadow-[0_0_0_0] active:translate-y-[4px] transition-all rounded-md">Start</button>


                <button @click="isSidebarOpen = true" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text-muted-ashen rounded-lg md:hidden hover:bg-surface-hover-oblivion focus:outline-none focus:ring-2 focus:ring-melrose transition">
                    <span class="sr-only">Menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <TheSideBar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />
            </div>
        </nav>
    </header>

</template>
<script setup>
import { ref } from "vue";

const proceed = ref(false);

const clickToContinue = () => {
    proceed.value = true; // when clicked, show the card and hide the synopsis
};
</script>

<template>
    <main @click="clickToContinue"
        class="flex-grow flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-gray-900 to-black transition-all duration-500">
        <!-- Synopsis Section -->
        <div v-if="!proceed" class="text-center max-w-2xl cursor-pointer select-none transition-opacity duration-700">
            <h1 class="text-2xl font-bold mb-4 text-text-primary-silverlight">
                Synopsis
            </h1>
            <p class="mb-6 text-text-primary-silverlight">
                In a world where supernatural powers intertwine with everyday life, a group of adopted siblings navigate
                their tangled emotions, mysterious rules, and a hidden force threatening their world. Among them is Jim,
                a calm yet conflicted young man with a power he barely understands — and bonds that blur the line
                between love, loyalty, and destiny.
            </p>
            <div class="text-text-muted-ashen italic">Click to continue...</div>
        </div>

        <!-- Chapter Card -->
        <div v-else
            class="max-w-md w-full p-6 rounded-2xl border border-gray-300/20 bg-white/10 dark:bg-gray-800/40 backdrop-blur-sm shadow-lg relative overflow-hidden transition-all duration-700 ease-out hover:shadow-[0_0_20px_var(--color-accent-glow-lumina-core)] cursor-default">
            <!-- Glow -->
            <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-glow-lumina-core)_0%,transparent_70%)] opacity-10 blur-2xl pointer-events-none">
            </div>

            <h2 class="text-xl text-center text-accent-glow-lumina-core font-semibold mb-2">
                Chapter 1
            </h2>
            <h1 class="text-3xl font-bold text-center text-text-primary-silverlight mb-4">
                The Rule I Broke
            </h1>
            <p class="text-text-muted-ashen/80 text-center">
                The story begins on a quiet night — one that was never meant to happen.
            </p>
        </div>
    </main>
</template>

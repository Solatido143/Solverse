<script setup>
import { ref } from "vue";

const adventurePoints = ref(0);
const message = ref("Click 'Explore' to begin your journey!");
const discoveries = [
    "You found a Sweet Flower 🌸",
    "You battled a Hilichurl 🪓",
    "You discovered a hidden shrine ⛩️",
    "You caught a crystalfly ✨",
    "You found a luxurious chest 💎",
    "You climbed a tall cliff and admired the view 🌄",
];

function explore() {
    const gain = Math.floor(Math.random() * 5) + 1;
    adventurePoints.value += gain;
    const randomDiscovery =
        discoveries[Math.floor(Math.random() * discoveries.length)];
    message.value = `${randomDiscovery} (+${gain} AP)`;
}
</script>

<template>
    <main
        class="flex-grow flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-sky-50 to-indigo-100 dark:from-gray-900 dark:to-black">
        <!-- Card -->
        <div
            class="max-w-md w-full p-6 rounded-2xl border border-gray-300/20 bg-white/10 dark:bg-gray-800/40 backdrop-blur-sm shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_var(--color-accent-glow-lumina-core)]">
            <!-- Glow -->
            <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-glow-lumina-core)_0%,transparent_70%)] opacity-10 blur-2xl pointer-events-none">
            </div>

            <!-- Header -->
            <h1 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                Explore Tiypaniki
            </h1>

            <!-- Adventure Points -->
            <div class="text-center text-lg font-semibold text-accent-glow-lumina-core mb-3">
                Adventure Points: {{ adventurePoints }}
            </div>

            <!-- Message -->
            <p class="text-center text-gray-700 dark:text-gray-300 mb-6 min-h-[48px]">
                {{ message }}
            </p>

            <!-- Explore Button -->
            <div class="flex justify-center">
                <button @click="explore"
                    class="px-6 py-3 text-lg font-semibold rounded-xl bg-accent-glow-lumina-core text-white shadow-md hover:scale-105 transition-transform duration-200">
                    Explore
                </button>
            </div>
        </div>
    </main>
</template>

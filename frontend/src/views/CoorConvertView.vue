<script setup>
import { ref } from 'vue'

const input = ref('')
const result = ref('')
const mode = ref('overworld')
const hasError = ref(false)

const convert = () => {
    const [x, y, z] = input.value.split(',').map(v => parseFloat(v.trim()))

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        hasError.value = true
        result.value = `Invalid coordinates!`
        return
    }

    hasError.value = false

    if (mode.value === 'overworld') {
        result.value = `Nether Coordinates: ${(x / 8).toFixed(2)}, ${y}, ${(z / 8).toFixed(2)}`
    } else {
        result.value = `Overworld Coordinates: ${(x * 8).toFixed(2)}, ${y}, ${(z * 8).toFixed(2)}`
    }
}
</script>

<template>
    <main class="flex-grow p-2 text-floral-white mt-16">
        <div class="flex flex-col gap-3 items-center">
            <h2 class="text-xl font-semibold text-accent-soft-ethereal">Minecraft Coordinate Converter</h2>

            <label for="coordinates" class="text-sm text-gray-300">
                Enter your coordinates <span class="text-accent-soft-ethereal">x, y, z</span>
            </label>
            <input v-model="input" id="coordinates" placeholder="Example: 120, 64, -450"
                class="p-2 rounded-lg bg-midnight-panel-astral border border-border-soft-veil text-floral-white focus:outline-none focus:ring-2 focus:ring-accent-soft-ethereal" />

            <div class="flex gap-2">
                <button @click="mode = 'overworld'; convert()"
                    class="flex-1 p-2 rounded-lg bg-accent-soft-ethereal text-midnight font-semibold hover:opacity-80 transition">
                    Overworld → Nether
                </button>
                <button @click="mode = 'nether'; convert()"
                    class="flex-1 p-2 rounded-lg bg-floral-white text-midnight font-semibold hover:opacity-80 transition">
                    Nether → Overworld
                </button>
            </div>

            <p class="mt-3 text-sm font-mono transition-colors"
                :class="hasError ? 'text-error-red-crimsonfall' : 'text-gray-300'">
                {{ result }}
            </p>
        </div>
    </main>
</template>
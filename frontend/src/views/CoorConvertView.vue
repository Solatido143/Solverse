<script setup>
import { ref } from 'vue'

const input = ref('')
const result = ref('')
const mode = ref('overworld')
const hasError = ref(false)

const convert = () => {
    const parts = input.value
        .trim()
        .replace(/,/g, ' ')
        .split(/\s+/)
        .map(v => parseFloat(v))

    if (!input.value.trim()) {
        hasError.value = true
        result.value = 'Please enter coordinates to convert.'
        return
    }

    if (parts.length !== 3 || parts.some(v => isNaN(v))) {
        hasError.value = true
        result.value = 'Invalid coordinates!'
        return
    }

    const [x, y, z] = parts

    hasError.value = false

    if (mode.value === 'overworld') {
        result.value = `Nether Coordinates: ${(x / 8).toFixed(2)}, ${y}, ${(z / 8).toFixed(2)}`
    } else {
        result.value = `Overworld Coordinates: ${(x * 8).toFixed(2)}, ${y}, ${(z * 8).toFixed(2)}`
    }
}

</script>

<template>
    <main class="flex-grow p-4 md:p-12 text-text-primary-silverlight mt-16 bg-gradient-to-b from-woodsmoke-darkest to-cinder min-h-screen">
        <div class="flex flex-col gap-3 text-center items-center">
            <h2 class="text-xl font-semibold text-accent-soft-ethereal">Minecraft Coordinate Converter</h2>

            <label for="coordinates" class="text-sm text-gray-300">
                Enter your coordinates <span class="text-accent-soft-ethereal">x, y, z</span>
            </label>
            <input v-model="input" id="coordinates" placeholder="Example: 120, 64, -450"
                class="p-2 rounded-lg bg-midnight-panel-astral border border-border-soft-veil text-text-primary-silverlight focus:outline-none focus:ring-2 focus:ring-accent-soft-ethereal" />

            <div class="flex gap-2">
                <button @click="mode = 'overworld'; convert()"
                    class="flex-1 p-2 rounded-lg bg-accent-glow-lumina-core text-text-primary-silverlight font-semibold hover:opacity-80 transition">
                    Overworld → Nether
                </button>
                <button @click="mode = 'nether'; convert()"
                    class="flex-1 p-2 rounded-lg bg-accent-soft-ethereal text-midnight-panel-astral/80 font-semibold hover:opacity-80 transition">
                    Nether → Overworld
                </button>
            </div>

            <p class="mt-3 text-sm font-mono transition-colors"
                :class="hasError ? 'text-error-bittersweet' : 'text-gray-300'">
                {{ result }}
            </p>
        </div>
    </main>
</template>
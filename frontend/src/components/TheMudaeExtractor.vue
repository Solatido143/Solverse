<script setup>
import { ref, watch } from 'vue'

const message = ref('');
const totalCharacters = ref(0)
const topNames = ref('')
const copied = ref(false)

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(topNames.value)
        copied.value = true
        setTimeout(() => (copied.value = false), 1500)
    } catch (err) {
        console.error('Failed to copy:', err)
    }
}

watch(message, (newValue) => {
    const names = [];
    const topMessage = newValue.split("#")

    const hasEmojis = /[\p{Extended_Pictographic}]/u.test(newValue)

    topMessage.forEach((element) => {
        const matches = element.matchAll(/ - (.*?) - /g)
        for (const match of matches) {
            let name = match[1].trim()
            if (hasEmojis) {
                // Remove emojis if they exist (normal $top)
                name = name.replace(/[\p{Extended_Pictographic}]/gu, '').trim()
            }

            // Remove leftover weird symbols, specific for 2B or character with number in their names
            name = name.replace(/\s{2,}/g, ' ')

            if (name) names.push(name)
        }
    })
    topNames.value = names.join(" $ ")
    totalCharacters.value = names.length
    console.log('Total Characters:', names.length)
    console.log('Extracted names:', names)
    console.log('Joined string:', topNames.value)
})

</script>

<template>

    <label for="message" class="block mb-2 text-sm font-medium">
        Paste any text you gotten from a character list command such as <code style="user-select: all;">$topux-</code>
        mudae channel and copy paste the result here
    </label>

    <textarea id="message" v-model="message" rows="4"
        class="block w-full p-3 mb-2 rounded-xl bg-shadow-deep-umbra/80 border border-gray-300/20 backdrop-blur-sm text-sm text-text-primary-silverlight focus:ring-2 focus:ring-accent-glow-lumina-core focus:border-accent-glow-lumina-core outline-none transition"
        placeholder="Example: #7 - Bunny Girl Senpai - Seishun Buta Yarou #15 - Makima 💞 - Chainsaw Man"></textarea>

    <div class="mb-2">
        <span class="text-sm text-text-primary-silverlight">
            Total number of characters:
            <strong>{{ totalCharacters }}</strong>
        </span>
    </div>

    <div v-if="topNames"
        class="mb-3 text-sm text-text-primary-silverlight break-words mt-2 border border-overlay-dark-nebulis/20 rounded-lg p-2 bg-disabled-gray-dormant/50">
        {{ topNames }}

    </div>
    <div class="flex gap-0 sm:gap-3 justify-between sm:justify-start">
        <button v-if="topNames" @click="copyToClipboard"
            class="text-sm px-3 py-1.5 rounded-lg bg-accent-glow-lumina-core/20 border border-accent-glow-lumina-core/30 text-text-primary-silverlight hover:bg-accent-glow-lumina-core/30 transition-all">
            {{ copied ? 'Copied' : 'Copy Result' }}
        </button>
        <button v-if="message" @click="message = ''; topNames = ''; totalCharacters = 0;"
            class="text-sm px-3 py-1.5 rounded-lg bg-text-muted-ashen/20 border border-text-muted-ashen/30 text-text-primary-silverlight hover:bg-text-muted-ashen/30 transition-all ml-2">
            Clear
        </button>
    </div>
</template>
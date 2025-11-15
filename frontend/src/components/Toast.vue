<script setup>
</script>

<template>
    <div class="flex items-center justify-between gap-6 w-full max-w-xs p-4 rounded-2xl border bg-midnight-panel-astral border-border-soft-veil text-text-primary-silverlight backdrop-blur-md shadow-[0_0_15px_var(--color-ambient-shadow-veilborne)]">

        <!-- Text -->
        <div class="text-sm tracking-wide">
            Hello.
        </div>

        <!-- Close Button -->
        <button type="button" class="ms-auto flex items-center justify-center h-8 w-8 rounded-lg transition text-text-muted-ashen hover:text-text-primary-silverlight hover:bg-surface-hover-oblivion border border-transparent hover:border-highlight-glow-aether focus:outline-none focus:ring-2 focus:ring-highlight-glow-aether">

            <span class="sr-only">Close</span>

            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18 18 6M18 18 6 6" />
            </svg>
        </button>
    </div>
</template>

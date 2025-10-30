<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, onBeforeUnmount, ref } from 'vue'

defineProps({
    isOpen: Boolean
})
const emit = defineEmits(['close'])

const sidebarRef = ref(null)

const HandleClickOutside = (e) => {
    if (sidebarRef.value && !sidebarRef.value.contains(e.target)) {
        emit('close');
    }
}

onMounted(() => {
    document.addEventListener('mousedown', HandleClickOutside)
})
onBeforeUnmount(() => {
    document.removeEventListener('mousedown', HandleClickOutside)
})
</script>

<template>

    <div v-if="isOpen" class="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        @click="emit('close')"></div>

    <!-- Sidebar Container -->
    <div ref="sidebarRef" :class="[
        'fixed top-0 left-0 z-40 h-screen w-64 p-4 transition-transform duration-300 border-r',
        'border-border-soft-veil bg-midnight-panel-astral/80 backdrop-blur-lg',
        'shadow-[0_0_15px_rgba(110,155,255,0.1)]',
        isOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
        <!-- Glow Accent -->
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-accent-glow-lumina-core)_0%,transparent_70%)] opacity-10 blur-2xl pointer-events-none">
        </div>

        <!-- Header -->
        <div class="relative flex items-center justify-between mb-6">
            <h5 class="text-base font-semibold uppercase tracking-wide text-lumina-core">
                Solverse
            </h5>

            <button type="button" @click="emit('close')"
                class="text-floral-white hover:text-lumina-core hover:scale-110 transition-all duration-200 bg-transparent rounded-lg w-8 h-8 flex items-center justify-center">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>

        <!-- Menu Links -->
        <div class="py-4 overflow-y-auto relative">
            <ul class="space-y-3 font-medium">
                <li>
                    <RouterLink to="/" @click="emit('close')"
                        class="flex items-center p-2 rounded-lg text-floral-white/80 hover:text-lumina-core hover:bg-white/5 transition-all duration-200 group">
                        <svg class="w-5 h-5 text-gray-400 transition duration-75 group-hover:text-lumina-core"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path
                                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                            <path
                                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span class="!ms-3">Home</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/projects" @click="emit('close')"
                        class="flex items-center p-2 rounded-lg text-floral-white/80 hover:text-lumina-core hover:bg-white/5 transition-all duration-200 group">
                        <svg class="w-5 h-5 text-gray-400 transition duration-75 group-hover:text-lumina-core"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9V9h2v4zm0-6H9V5h2v2z" />
                        </svg>
                        <span class="!ms-3">Projects</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

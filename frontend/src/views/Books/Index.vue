<script setup>
import { ref, onMounted } from 'vue';
import api from '@/api/axios'

import Table from '@/components/TheTable.vue'
import Toast from '@/components/Toast.vue'

const books = ref([])

onMounted(() => {
    api.get('/books')
        .then(function (response) {
            console.log(response.data)
            books.value = response.data
        })
        .catch(function (error) {
            console.log('Error fetching books:', error)
            alert('Something went wrong, try again later')
        })
})

</script>

<template>
    <main class="flex-grow mt-16 p-5 bg-gradient-to-b from-gray-900 to-black">

        <div class="flex items-center justify-between align-items-center">
            <h1 class="text-3xl font-semibold text-text-primary-silverlight">Books</h1>
            <RouterLink to="/" class="text-text-primary-silverlight bg-accent-glow-lumina-core box-border border border-transparent hover:bg-accent-glow-lumina-core/80 focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded text-sm px-4 py-1.5 focus:outline-none">Create</RouterLink>
        </div>
        
        <div class="relative mt-5 overflow-x-auto shadow-xs rounded border-border-soft-veil border">
            <Table :books="books" />
        </div>
        <div class="fixed hidden bottom-4 right-4 z-50 min-w-[300px]">
            <Toast/>
        </div>
    </main>
</template>
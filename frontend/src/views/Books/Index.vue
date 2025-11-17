<script setup>
import { ref, onMounted } from 'vue';
import api from '@/api/axios'

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
    <main class="flex-grow p-5 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        <div class="relative overflow-x-auto shadow-xs rounded border">
            <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-body bg-midnight-panel-astral text-floral-white border-border-soft-veil border-b rounded-base">
                    <tr>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Author
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Published date
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="book in books" class="bg-midnight-panel-astral border-b border-border-soft-veil hover:bg-surface-hover-oblivion transition-colors duration-200">
                        <th scope="row" class="px-6 py-4 font-medium text-heading text-floral-white whitespace-nowrap">
                            {{ book.name }}
                        </th>
                        <td class="px-6 py-4">
                            {{ book.author }}
                        </td>
                        <td class="px-6 py-4">
                            {{ book.publish_date }}
                        </td>
                        <td class="px-6 py-4">
                            <RouterLink :to="`/books/${book.id}`" class="font-medium text-accent-glow-lumina-core hover:underline">Edit</RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="fixed hidden bottom-4 right-4 z-50 min-w-[300px]">
            <Toast/>
        </div>
    </main>
</template>
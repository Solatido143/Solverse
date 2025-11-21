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
    <main class="flex-grow mt-16 p-5 bg-gradient-to-b from-gray-900 to-black">
        
        <button type="button" class="text-text-primary-silverlight bg-accent-glow-lumina-core box-border border border-transparent hover:bg-accent-glow-lumina-core/80 focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded text-sm px-4 py-2.5 focus:outline-none">Create</button>
        
        <div class="relative mt-5 overflow-x-auto shadow-xs rounded border-border-soft-veil border">
            <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-body bg-midnight-panel-astral text-text-primary-silverlight border-border-soft-veil border-b rounded-base">
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
                        <td class="px-6 py-4">
                            {{ book.name }}
                        </td>
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
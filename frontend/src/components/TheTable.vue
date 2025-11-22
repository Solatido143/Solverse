<script setup>
import TableHead from '@/components/TheTableHead.vue'
import TableData from '@/components/TheTableData.vue'

const props = defineProps({
    books: {
        type: Array,
        default: () => [],
    }
})
</script>

<template>
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-midnight-panel-astral text-text-primary-silverlight border-border-soft-veil border-b rounded-base">
            <tr>
                <TableHead thname="Name"/>
                <TableHead thname="Author"/>
                <TableHead thname="Publish date"/>
                <TableHead thname="Action"/>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in props.books" :key="book.id"
            class="bg-midnight-panel-astral border-b border-border-soft-veil hover:bg-surface-hover-oblivion transition-colors duration-200">
                <TableData :tdname="book.name"/>
                <TableData :tdname="book.author"/>
                <TableData :tdname="book.publish_date"/>
                <TableData>
                    <RouterLink :to="`/books/${book.id}`" class="font-medium text-accent-glow-lumina-core hover:underline">View</RouterLink>
                </TableData>
            </tr>
        </tbody>
    </table>
</template>
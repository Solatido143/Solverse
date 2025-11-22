<script setup>
defineProps({
    thname: String,
})
</script>

<template>
    <th scope="col" class="px-6 py-3 font-medium">
        {{ thname }}
    </th>
</template>
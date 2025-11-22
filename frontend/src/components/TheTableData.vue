<script setup>
defineProps({
    tdname: {
        type: String,
        defaullt: '',
    }
})
</script>

<template>
    <td class="px-6 py-4">
        <slot> {{ tdname }} </slot>
    </td>
</template>
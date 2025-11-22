<script setup>
const props = defineProps({
    columns: Array,
    data: Array,
})
</script>

<template>
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <!-- Header -->
        <thead class="text-sm text-body bg-midnight-panel-astral text-text-primary-silverlight border-border-soft-veil border-b rounded-base">
            <tr>
                <th 
                    v-for="col in props.columns"
                    :key="col.key"
                    class="px-6 py-3 font-medium"
                >
                    {{ col.label }}
                </th>
            </tr>
        </thead>
        <!-- Rows -->
        <tbody>
            <tr v-for="row in props.data" :key="row.id"
            class="bg-midnight-panel-astral border-b border-border-soft-veil hover:bg-surface-hover-oblivion transition-colors duration-200">
                <td
                    v-for="col in props.columns"
                    :key="col.key"
                    class="px-6 py-4"
                >
                    <slot
                        :name="col.key"
                        :row="row"
                    >
                        {{ row[col.key] }}
                    </slot>
                </td>
            </tr>
        </tbody>
    </table>
</template>
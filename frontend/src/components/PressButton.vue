<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    stateMatter: {
        type: String,
        default: 'filled' // other option could be 'hollow'
    },
    bgColor: {
        type: String,
        default: 'cornflower-blue'
    },
    bgHover: {
        type: String,
        default: 'cornflower-blue-dark'
    },
    shadow: {
        type: String,
        default: 'cornflower-blue-darker'
    },
    textColor: {
        type: String,
        default: 'text-text-primary-silverlight'
    },
    textColorHover: {
        type: String,
        default: ''
    }
});

const buttonClasses = computed(() => {
    const base = 'inline-flex items-center w-auto font-medium leading-5 rounded-full text-sm px-4 py-2.5 transition-all select-none shadow-[0_4px_0_0] active:shadow-[0_0_0_0] active:translate-y-[4px]';

    const bgHover = `hover:bg-${props.bgHover}` || `hover:bg-${props.bgHover}`;
    const shadow = `shadow-${props.shadow}` || `shadow-${props.shadow}`;

    const textColorHover = `hover:text-${props.textColorHover}` || `hover:text-${props.textColorHover}`

    if (props.stateMatter === 'hollow' && props.bgColor) {
        return `${base} box-border border-t border-l border-r border-${props.bgColor} shadow-${props.bgColor}-darker hover:bg-${props.bgColor}-dark ${props.textColor} ${textColorHover}`;
    }
    return `${base} bg-${props.bgColor} shadow-${props.bgColor}-darker hover:bg-${props.bgColor}-dark ${props.textColor}`;
})

</script>

<template>
    <a :class="buttonClasses">
        {{ label }}
    </a>
</template>
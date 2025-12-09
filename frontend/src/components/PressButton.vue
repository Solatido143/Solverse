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
        default: 'bg-cornflower-blue'
    },
    borderColor: {
        type: String,
        default: 'border-cornflower-blue-darker'
    },
    bgHover: {
        type: String,
        default: 'hover:bg-cornflower-blue-dark'
    },
    shadow: {
        type: String,
        default: 'shadow-cornflower-blue-darker'
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
    const base = 'inline-flex items-center w-auto font-medium leading-5 text-sm px-4 py-2.5 transition-all select-none shadow-[0_4px_0_0] active:shadow-[0_0_0_0] active:translate-y-[4px]';

    const bgHover = props.bgHover;
    const shadow = props.shadow;
    const border = props.borderColor;

    if (props.stateMatter === 'hollow') {
        return `${base}`;
    }
    return `${base} ${props.bgColor} border ${border} ${shadow} ${bgHover} ${props.textColor}`;
})

</script>

<template>
    <a :class="buttonClasses">
        {{ label }}
    </a>
</template>
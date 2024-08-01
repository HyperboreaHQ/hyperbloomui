<script setup>
    import { defineProps } from 'vue';
    import state from '../state';

    const props = defineProps({
        margin: String,
        padding: String
    });

    const emit = defineEmits([
        'click'
    ]);
</script>

<template>
    <div
        aria-component-id="flat-button"
        :style="`
            margin: ${props.margin ?? '0px'};
            padding: ${props.padding ?? '0px'};
        `"
        :class="`
            hyperbloomui--button
            hyperbloomui--${state.hyperbloomui.theme.name}--flat-button
        `"
        @click="$emit('click')"
    >
        <slot />
    </div>
</template>

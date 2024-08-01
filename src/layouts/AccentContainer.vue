<script setup>
    import { defineProps } from 'vue';
    import state from '../state';

    const props = defineProps({
        margin: String,
        padding: String
    });
</script>

<style lang="sass">
    .hyperbloomui--accent-container
        display: block
        background-color: var(--hyperbloomui--colors--accent)
</style>

<template>
    <div
        aria-component-id="accent-container"
        :style="`
            margin: ${props.margin ?? '0px'};
            padding: ${props.padding ?? '0px'};
        `"
        :class="`
            hyperbloomui--accent-container
            hyperbloomui--${state.hyperbloomui.theme.name}--accent-container
        `"
    >
        <slot />
    </div>
</template>

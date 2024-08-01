<script setup>
    import { defineProps } from 'vue';
    import state from '../state';

    const props = defineProps({
        margin: String,
        padding: String
    });
</script>

<style lang="sass">
    .hyperbloomui--muted-container
        display: block
</style>

<template>
    <div
        aria-component-id="muted-container"
        :style="`
            margin: ${props.margin ?? '0px'};
            padding: ${props.padding ?? '0px'};
        `"
        :class="`hyperbloomui--muted-container hyperbloomui--${state.hyperbloomui.theme.name}--muted-container`"
    >
        <slot />
    </div>
</template>

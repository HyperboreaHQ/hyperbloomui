<script setup>
    import { defineProps } from 'vue';
    import state from '../state';

    const props = defineProps({
        margin: String,
        padding: String
    });
</script>

<style lang="sass">
    .hyperbloomui--text
        display: block
        text-align: start
</style>

<template>
    <div
        aria-component-id="text"
        :style="`
            margin: ${props.margin ?? '0px'};
            padding: ${props.padding ?? '0px'};
        `"
        :class="`hyperbloomui--text hyperbloomui--${state.hyperbloomui.theme.name}--text`"
    >
        <slot />
    </div>
</template>

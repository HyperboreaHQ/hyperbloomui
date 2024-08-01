<script setup>
    import { defineProps } from 'vue';
    import state from '../state';

    const props = defineProps({
        spacing: String,
        margin: String,
        padding: String,
        justify: String
    });
</script>

<style lang="sass">
    .hyperbloomui--horizontal-box
        display: flex
        flex-direction: row
        flex-wrap: nowrap
        width: 100%
</style>

<template>
    <div
        aria-component-id="horizontal-box"
        :style="`
            gap: ${props.spacing ?? '0px'};
            margin: ${props.margin ?? '0px'};
            padding: ${props.padding ?? '0px'};
            justify-content: ${props.justify ?? 'flex-start'};
        `"
        :class="`hyperbloomui--horizontal-box hyperbloomui--${state.hyperbloomui.theme.name}--horizontal-box`"
    >
        <slot />
    </div>
</template>

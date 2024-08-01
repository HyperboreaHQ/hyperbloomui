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
    .hyperbloomui--vertical-box
        display: flex
        flex-direction: column
        flex-wrap: nowrap
        height: 100%
</style>

<template>
    <div
        aria-component-id="vertical-box"
        :style="`
            gap: ${props.spacing ?? '0px'};
            margin: ${props.margin ?? '0px'};
            padding: ${props.padding ?? '0px'};
            justify-content: ${props.justify ?? 'flex-start'};
        `"
        :class="`hyperbloomui--vertical-box hyperbloomui--${state.hyperbloomui.theme.name}--vertical-box`"
    >
        <slot />
    </div>
</template>

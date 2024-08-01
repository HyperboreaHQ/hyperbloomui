<script setup>
    import { defineProps } from 'vue';
    import state from '../state';

    const props = defineProps({
        margin: String,
        width: String,
        height: String
    });
</script>

<style lang="sass">
    .hyperbloomui--clamp-container
        display: flex
        align-items: center
        justify-content: center

        width: 100%
        height: 100%

        .hyperbloomui--clamp
            display: block

            width: 100%
            height: 100%
</style>

<template>
    <div
        aria-component-id="clamp-container"
        :style="`
            margin: ${props.margin ?? '0px'};
        `"
        :class="`hyperbloomui--clamp-container hyperbloomui--${state.hyperbloomui.theme.name}--clamp-container`"
    >
        <div
            aria-component-id="clamp"
            :style="`
                max-width: ${props.width ?? '600px'};
                max-height: ${props.height ?? 'unset'};
            `"
            :class="`hyperbloomui--clamp hyperbloomui--${state.hyperbloomui.theme.name}--clamp`"
        >
            <slot />
        </div>
    </div>
</template>

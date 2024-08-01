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

<style lang="sass">
    .hyperbloomui--button
        display: inline-block
        cursor: pointer
        text-align: center
        text-decoration: none
        user-select: none
</style>

<template>
    <div
        aria-component-id="button"
        :style="`
            margin: ${props.margin ?? '0px'};
            padding: ${props.padding ?? '0px'};
        `"
        :class="`
            hyperbloomui--button
            hyperbloomui--${state.hyperbloomui.theme.name}--button
        `"
        @click="$emit('click')"
    >
        <slot />
    </div>
</template>

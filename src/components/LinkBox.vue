<script setup>
    import { defineProps, defineEmits } from 'vue';
    import state from '../state';

    const props = defineProps({
        margin: String,
        padding: String,
        href: String
    });

    const emit = defineEmits([
        'click'
    ]);
</script>

<style lang="sass">
    .hyperbloomui--link-box
        display: block
        text-align: start
</style>

<template>
    <a
        aria-component-id="link-box"
        :href="props.href ?? '#'"
        :style="`
            margin: ${props.margin ?? '0px'};
            padding: ${props.padding ?? '0px'};
        `"
        :class="`
            hyperbloomui--link-box
            hyperbloomui--${state.hyperbloomui.theme.name}--link-box
        `"
        @click="$emit('click')"
    >
        <slot />
    </a>
</template>

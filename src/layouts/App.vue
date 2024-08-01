<script async setup>
    import { defineProps } from 'vue';
    import state from '../state';
    import { loadTheme } from '../themes/index';

    const props = defineProps({
        theme: String | undefined
    });

    loadTheme(props.theme)
        .then((name) => state.hyperbloomui.theme = name)
        .catch((err) => console.error(`Failed to load theme ${props.theme}: ${err}`));
</script>

<style lang="sass">
    .hyperbloomui--app
        width: 100%
        height: 100%
        margin: 0
        padding: 0

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
        font-size: 16px
</style>

<template>
    <div :class="`hyperbloomui--app hyperbloomui--${state.hyperbloomui.theme}--app`">
        <slot />
    </div>
</template>

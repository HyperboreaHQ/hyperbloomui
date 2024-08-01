<script async setup>
    import { defineProps } from 'vue';
    import { loadTheme } from '../themes/index';

    import state from '../state';

    const props = defineProps({
        theme: String,
        accentColor: String
    });

    loadTheme(props.theme)
        .then((name) => state.hyperbloomui.theme.name = name)
        .catch((err) => console.error(`Failed to load theme ${props.theme}: ${err}`));

    if (typeof(props.accentColor) === 'string')
        state.hyperbloomui.theme.colors.accent = props.accentColor;
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
    <div
        aria-component-id="app"
        :style="`
            --hyperbloomui--colors--accent: ${state.hyperbloomui.theme.colors.accent};
        `"
        :class="`
            hyperbloomui--app
            hyperbloomui--${state.hyperbloomui.theme.name}--app
        `"
    >
        <slot />
    </div>
</template>

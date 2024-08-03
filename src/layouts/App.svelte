<script lang="ts">
    import { loadTheme } from '../themes/index';

    import state from '../state';

    export let theme: string | undefined = undefined;
    export let accentColor: string = 'black';

    let currentTheme: string | null = null;

    state.subscribe((state) => {
        currentTheme = state.hyperbloomui.theme.name;
        accentColor = state.hyperbloomui.theme.colors.accent;
    });

    $: loadTheme(theme)
        .then((name) => {
            state.update((state) => {
                state.hyperbloomui.theme.name = name;

                return state;
            });
        })
        .catch((err) => console.error(`Failed to load theme ${theme}: ${err}`));

    $: state.update((state) => {
        if (typeof(accentColor) === 'string')
            state.hyperbloomui.theme.colors.accent = accentColor;

        return state;
    });
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

<div
    style={`
        --hyperbloomui--colors--accent: ${accentColor}
    `}
    class={`
        hyperbloomui--app
        hyperbloomui--${currentTheme}--app
    `}
>
    <slot />
</div>

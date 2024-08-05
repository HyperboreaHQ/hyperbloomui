<script lang="ts">
    import { onMount } from 'svelte';

    import { loadTheme } from '../themes';

    import state from '../state';

    export let theme: string | undefined = undefined;
    export let accentColor: string = 'black';

    let currentTheme: string | null = null;

    $: if (typeof(accentColor) === 'string') {
        state.update((state) => {
            console.log(`[app] loaded accent color: ${accentColor}`);

            state.hyperbloomui.theme.colors.accent = accentColor;

            return state;
        });
    }

    $: loadTheme(theme)
        .then((name) => {
            state.update((state) => {
                console.log(`[app] loaded theme: ${name}`);

                state.hyperbloomui.theme.name = name;

                return state;
            });
        })
        .catch((err) => console.error(`Failed to load theme ${theme}: ${err}`));

    onMount(() => {
        state.subscribe((state) => {
            console.log('[app] hydrating state', state);

            currentTheme = state.hyperbloomui.theme.name;
            accentColor = state.hyperbloomui.theme.colors.accent;
        });
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

        *
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

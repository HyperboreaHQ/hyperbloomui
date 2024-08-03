<script lang="ts">
    import state from '../state';

    export let margin: string = '0px';
    export let padding: string = '0px';

    let currentTheme: string | null = null;

    state.subscribe((state) => currentTheme = state.hyperbloomui.theme.name);
</script>

<style lang="sass">
    .hyperbloomui--accent-container
        display: block
        background-color: var(--hyperbloomui--colors--accent)
</style>

<div
    style:margin={margin}
    style:padding={padding}
    class={`
        hyperbloomui--accent-container
        hyperbloomui--${currentTheme}--accent-container
    `}
>
    <slot />
</div>

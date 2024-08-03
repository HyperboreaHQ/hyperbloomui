<script lang="ts">
    import state from '../state';

    export let margin: string = '0px';
    export let padding: string = '0px';
    export let sensitive: boolean = true;

    export let click: () => void = () => {};

    let currentTheme: string | null = null;

    state.subscribe((state) => currentTheme = state.hyperbloomui.theme.name);
</script>

<style lang="sass">
    .hyperbloomui--accent-button
        display: inline-block
        cursor: pointer
        text-align: center
        text-decoration: none
        user-select: none
</style>

<button
    style:margin={margin}
    style:padding={padding}
    class={`
        hyperbloomui--accent-button
        hyperbloomui--${currentTheme}--accent-button
    `}
    disabled={!sensitive}
    on:click={click}
>
    <slot />
</button>

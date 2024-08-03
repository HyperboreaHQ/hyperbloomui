<script lang="ts">
    import state from '../state';

    export let margin: string = '0px';
    export let padding: string = '0px';

    let currentTheme: string | null = null;

    state.subscribe((state) => currentTheme = state.hyperbloomui.theme.name);
</script>

<style lang="sass">
    .hyperbloomui--text-box
        display: block
        text-align: start
</style>

<div
    style:margin={margin}
    style:padding={padding}
    class={`
        hyperbloomui--text-box
        hyperbloomui--${currentTheme}--text-box
    `}
>
    <slot />
</div>

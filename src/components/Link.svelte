<script lang="ts">
    import state from '../state';

    export let margin: string = '0px';
    export let padding: string = '0px';
    export let href: string = '#';

    export let click: () => void = () => {};

    let currentTheme: string | null = null;

    state.subscribe((state) => currentTheme = state.hyperbloomui.theme.name);
</script>

<style lang="sass">
    .hyperbloomui--link
        display: block
        text-align: start
</style>

<a
    href={href}
    style:margin={margin}
    style:padding={padding}
    class={`
        hyperbloomui--link
        hyperbloomui--${currentTheme}--link
    `}
    on:click={click}
>
    <slot />
</a>

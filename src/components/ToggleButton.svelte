<script lang="ts">
    import state from '../state';

    export let margin: string = '0px';
    export let padding: string = '0px';
    export let sensitive: boolean = true;
    export let toggled: boolean = false;

    export let toggle: (toggled: boolean) => void = () => {};

    let currentTheme: string | null = null;

    state.subscribe((state) => currentTheme = state.hyperbloomui.theme.name);
</script>

<style lang="sass">
    .hyperbloomui--toggle-button
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
        hyperbloomui--toggle-button
        hyperbloomui--${currentTheme}--toggle-button
        ${toggled ? `hyperbloomui--${currentTheme}--toggle-button--toggled` : ''}
    `}
    disabled={!sensitive}
    on:click={() => {
        toggled = !toggled;

        if (typeof(toggle) === 'function')
            // @ts-ignore
            toggle(toggled);
    }}
>
    <slot />
</button>

<script lang="ts">
    import state from '../state';

    export let margin: string = '0px';
    export let width: string = '600px';
    export let height: string = 'unset';

    let currentTheme: string | null = null;

    state.subscribe((state) => currentTheme = state.hyperbloomui.theme.name);
</script>

<style lang="sass">
    .hyperbloomui--clamp-container
        display: flex
        align-items: center
        justify-content: center

        width: 100%
        height: 100%

        .hyperbloomui--clamp
            display: block

            width: 100%
            height: 100%
</style>

<div
    style:margin={margin}
    class={`
        hyperbloomui--clamp-container
        hyperbloomui--${currentTheme}--clamp-container
    `}
>
    <div
        style:max-width={width}
        style:max-height={height}
        class={`
            hyperbloomui--clamp
            hyperbloomui--${currentTheme}--clamp
        `}
    >
        <slot />
    </div>
</div>

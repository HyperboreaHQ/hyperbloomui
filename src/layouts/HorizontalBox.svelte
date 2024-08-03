<script lang="ts">
    import { Justify } from './index';

    import state from '../state';

    export let spacing: string = '0px';
    export let margin: string = '0px';
    export let padding: string = '0px';
    export let justify: Justify = Justify.Start;

    let currentTheme: string | null = null;

    state.subscribe((state) => currentTheme = state.hyperbloomui.theme.name);
</script>

<style lang="sass">
    .hyperbloomui--horizontal-box
        display: flex
        flex-direction: row
        flex-wrap: nowrap
        width: 100%
</style>

<div
    style:gap={spacing}
    style:margin={margin}
    style:padding={padding}
    style:justify-content={justify.toString()}
    class={`
        hyperbloomui--horizontal-box
        hyperbloomui--${currentTheme}--horizontal-box
    `}
>
    <slot />
</div>

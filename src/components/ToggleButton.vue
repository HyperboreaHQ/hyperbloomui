<script setup>
    import { defineProps } from 'vue';
    import state from '../state';

    const props = defineProps({
        margin: String,
        padding: String,
        toggled: Boolean
    });

    const emit = defineEmits([
        'click'
    ]);

    const isToggled = () =>
        props.toggled === true ||
        props.toggled === 'true' ||
        props.toggled === '1' ||
        props.toggled === 'yes';

    const toggle = () => props.toggled = !isToggled();

    const toggleEvent = () => {
        toggle();

        emit('click');
    };
</script>

<template>
    <div
        aria-component-id="toggle-button"
        :style="`
            margin: ${props.margin ?? '0px'};
            padding: ${props.padding ?? '0px'};
        `"
        :class="`
            hyperbloomui--button
            hyperbloomui--${state.hyperbloomui.theme.name}--toggle-button
            ${isToggled() ? `hyperbloomui--${state.hyperbloomui.theme.name}--toggle-button--toggled` : ''}
        `"
        @click="toggleEvent"
    >
        <slot />
    </div>
</template>

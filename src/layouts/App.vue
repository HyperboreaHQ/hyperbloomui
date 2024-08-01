<script setup>
    import { defineProps } from 'vue';
    import state from '../state';

    const props = defineProps({
        theme: String | undefined
    });
</script>

<style lang="css">
    .hyperbloomui--app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
    }
</style>

<template>
    <div class="hyperbloomui--app {{ props.theme ?? ''  }}">
        <slot />
    </div>
</template>

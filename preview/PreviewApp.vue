<script setup>
    import {
        App,
        HorizontalBox,
        VerticalBox,
        Text
    } from '../src/index';
</script>

<template>
    <App accentColor="red">
        <HorizontalBox justify="center" spacing="8px">
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
        </HorizontalBox>

        <VerticalBox>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
        </VerticalBox>

        <Text>123</Text>
    </App>
</template>

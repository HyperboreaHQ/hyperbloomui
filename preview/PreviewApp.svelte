<script lang="ts">
    import {
        App,
        HorizontalBox,
        VerticalBox,
        Clamp,
        MutedContainer,
        AccentContainer,

        Text,
        Link,
        TextBox,
        LinkBox,
        Button,
        FlatButton,
        AccentButton,
        ToggleButton,

        Justify
    } from '../src/index';
</script>

<App theme={'hyperbloomui-light'} accentColor={'#84a98c'}>
    <HorizontalBox justify={Justify.Middle} spacing={'8px'}>
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

    <div style="height: 400px">
        <Clamp height={'200px'}>
            <Text>Example clamp</Text>
        </Clamp>
    </div>

    <MutedContainer>
        <Text>Muted Container</Text>
    </MutedContainer>

    <AccentContainer>
        <Text>Accent Container</Text>
    </AccentContainer>

    <Text>123</Text>

    <Link click={() => console.log(123)}>Example link</Link>

    <HorizontalBox padding={'4px 8px'} spacing={'8px'}>
        <Button click={() => console.log(123)}>Example button</Button>
        <FlatButton click={() => console.log(123)}>Example flat button</FlatButton>
        <AccentButton click={() => console.log(123)}>Example accent button</AccentButton>
        <ToggleButton toggle={() => console.log(123)}>Example toggle button</ToggleButton>
    </HorizontalBox>
</App>

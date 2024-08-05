export default async function(): Promise<string> {
    await import('./fonts/fonts.sass');
    await import('./variants/light.sass');

    return 'hyperbloomui-light';
};

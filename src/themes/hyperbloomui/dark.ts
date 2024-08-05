export default async function(): Promise<string> {
    await import('./fonts/fonts.sass');
    await import('./variants/dark.sass');

    return 'hyperbloomui-dark';
};

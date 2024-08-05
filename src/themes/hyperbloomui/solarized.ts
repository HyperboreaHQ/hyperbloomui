export default async function(): Promise<string> {
    await import('./fonts/fonts.sass');
    await import('./variants/solarized.sass');

    return 'hyperbloomui-solarized';
};

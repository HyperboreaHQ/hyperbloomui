export default async function(): Promise<string> {
    await import('./fonts/fonts.sass');
    await import('./variants/nord.sass');

    return 'hyperbloomui-nord';
};

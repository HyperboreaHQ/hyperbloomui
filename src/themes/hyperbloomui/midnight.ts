export default async function(): Promise<string> {
    await import('./fonts/fonts.sass');
    await import('./variants/midnight.sass');

    return 'hyperbloomui-midnight';
};

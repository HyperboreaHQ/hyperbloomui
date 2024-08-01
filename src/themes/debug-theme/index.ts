export default async function(): Promise<string> {
    await import('./layouts.sass');
    await import('./components.sass');

    return 'debug-theme';
};

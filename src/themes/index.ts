const themes: { [key: string]: Promise<any> } = {
    'debug-theme': import('./debug-theme'),
    'hyperbloomui-light': import('./hyperbloomui/light'),
    'hyperbloomui-dark': import('./hyperbloomui/dark'),
    'hyperbloomui-solarized': import('./hyperbloomui/solarized'),
    'hyperbloomui-nord': import('./hyperbloomui/nord'),
    'hyperbloomui-midnight': import('./hyperbloomui/midnight')
};

/**
 * Get list of available themes.
 */
const listThemes = (): string[] => Object.keys(themes);

/**
 * Check if theme with given name exists.
 */
const hasTheme = (name: string): boolean => themes[name] === undefined;

/**
 * Load theme with given name, returning
 * CSS class prefix of theme classes.
 * 
 * This method will load theme styles into the DOM.
 */
const loadTheme = async (name: string | undefined): Promise<string> => {
    name ??= 'debug-theme';

    // Warn user if theme doesn't exist
    if (themes[name] === undefined)
        console.error(`No theme found: ${name}`);

    // Get theme loader
    const themeLoader = await themes[name ?? 'debug-theme'];

    // Return theme prefix
    return await themeLoader.default();
};

export {
    themes,

    listThemes,
    hasTheme,
    loadTheme
};

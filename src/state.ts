import { writable } from 'svelte/store';

export default writable({
    hyperbloomui: {
        theme: {
            name: 'debug-theme',
            colors: {
                accent: 'black'
            }
        }
    }
});

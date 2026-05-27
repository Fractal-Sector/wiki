// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Orehum Sector',
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/Orehum-Project/Orehum-Sector' },
            { icon: 'discord', label: 'Discord', href: 'https://discord.gg/ZC94VrbFNY' },
        ],
        logo: {
            src: './src/assets/logo.png',
            replacesTitle: true,
        },
        customCss: [
            './src/styles/custom.css',
        ],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                items: [{ autogenerate: { directory: 'reference' } }],
            },
        ],
		}), markdoc()],
});
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    site: 'https://orehum-project.github.github.io',
    base: '/wiki/',
    trailingSlash: 'always',
    build: {
        format: 'directory'
    },
    integrations: [starlight({
        title: 'Orehum Sector',
        tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
        defaultLocale: 'ru',
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
            { label: 'Правила сервера', slug: 'rules/rules' },
            {
                label: 'Прочее',
                items: [
                    { label: 'Часто задаваемые вопросы', slug: 'resources/ask' },
                    { label: 'Проблемы с пингом', slug: 'resources/lag' },
                    { label: 'Программа общественного радио', slug: 'resources/radio' },
                ],
            }
        ],
        components: {
            SocialIcons: './src/components/HeaderButtons.astro',
        },
		}), markdoc()],
    
});
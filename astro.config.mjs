// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.mkdirs.com',
	integrations: [
		starlight({
			title: 'Mkdirs',
			favicon: './favicon.ico',
			social: {
				github: 'https://github.com/MkdirsHQ',
				twitter: 'https://x.com/MkdirsHQ',
			},
			logo: {
				src: './src/assets/logo-rounded.png',
				alt: 'Mkdirs Logo',
			},
			sidebar: [
				{
					label: 'Introduction',
					slug: 'index',
				},
				{
					label: 'Installation',
					slug: 'installation',
				},
				{
					label: 'Configuration',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Sanity', slug: 'configuration/sanity' },
						{ label: 'Email', slug: 'configuration/email' },
						{ label: 'Authentication', slug: 'configuration/authentication' },
						{ label: 'Stripe', slug: 'configuration/stripe' },
						{ label: 'Analytics', slug: 'configuration/analytics' },
					],
				},
				{
					label: 'Deployment',
					items: [
						{ label: 'Vercel', slug: 'deployment/vercel' },
						{ label: 'Docker', slug: 'deployment/docker' },
						{ label: 'Dokploy', slug: 'deployment/dokploy' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});

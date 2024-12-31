// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.mkdirs.com",
	integrations: [
		sitemap(),
		starlight({
			title: "Mkdirs",
			favicon: "./favicon.ico",
			social: {
				github: "https://github.com/MkdirsHQ",
				// twitter: "https://x.com/javay_hu",
				youtube: "https://www.youtube.com/@MkdirsHQ",
			},
			logo: {
				src: "./src/assets/logo-rounded.png",
				alt: "Mkdirs Logo",
			},
			// https://starlight.astro.build/guides/i18n/#use-a-root-locale
			defaultLocale: "root",
			locales: {
				root: {
					label: "English",
					lang: "en", // lang is required for root locales
				},
				// Simplified Chinese docs in `src/content/docs/zh-cn/`
				"zh-cn": {
					label: "简体中文",
					lang: "zh-CN",
				},
			},
			sidebar: [
				{
					label: "Introduction",
					slug: "index",
				},
				{
					label: "Prerequisites",
					slug: "prerequisites",
				},
				{
					label: "Installation",
					slug: "installation",
				},
				{
					label: "Configuration",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Sanity", slug: "configuration/sanity" },
						{ label: "Resend", slug: "configuration/resend" },
						{ label: "Stripe", slug: "configuration/stripe" },
						{ label: "Auth", slug: "configuration/auth" },
						{ label: "Analytics", slug: "configuration/analytics" },
					],
				},
				{
					label: "Deployment",
					items: [
						{ label: "Vercel", slug: "deployment/vercel" },
						{ label: "Docker", slug: "deployment/docker" },
						{ label: "Dokploy", slug: "deployment/dokploy" },
					],
				},
				{
					label: "Guide",
					items: [
						{ label: "Develop", slug: "guide/develop" },
						{ label: "Information", slug: "guide/information" },
						{ label: "Logo", slug: "guide/logo" },
						{ label: "Font", slug: "guide/font" },
						{ label: "Theme", slug: "guide/theme" },
						{ label: "Card", slug: "guide/card" },
						{ label: "Email", slug: "guide/email" },
						{ label: "Sanity", slug: "guide/sanity" },
					],
				},
			],
		}),
	],
});

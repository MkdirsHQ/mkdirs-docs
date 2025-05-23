// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	// site: "http://localhost:4321",
	site: "https://docs.mkdirs.com",
	integrations: [
		sitemap(),
		starlight({
			title: "Mkdirs",
			favicon: "./favicon.ico",
			social: {
				github: "https://github.com/MkdirsHQ",
				twitter: "https://x.com/javay_hu",
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
					lang: "en",
				},
				"zh-cn": {
					label: "简体中文",
					lang: "zh-CN",
				},
			},
			components: {
				Head: './src/components/Head.astro',
			},
			sidebar: [
				{
					label: "Introduction",
					translations: {
						"zh-CN": "模板介绍"
					},
					slug: "index",
				},
				{
					label: "FAQ",
					translations: {
						"zh-CN": "常见问题"
					},
					slug: "faq",
				},
				{
					label: "Roadmap",
					translations: {
						"zh-CN": "路线图"
					},
					link: "https://github.com/MkdirsHQ/mkdirs-template/issues/10",
				},
				{
					label: "Prerequisites",
					translations: {
						"zh-CN": "前提条件"
					},
					slug: "prerequisites",
				},
				{
					label: "Installation",
					translations: {
						"zh-CN": "安装部署"
					},
					slug: "installation",
				},
				{
					label: "Configuration",
					translations: {
						"zh-CN": "配置环境"
					},
					items: [
						{
							label: "Sanity",
							translations: {
								"zh-CN": "数据服务 - Sanity"
							},
							slug: "configuration/sanity"
						},
						{
							label: "Resend",
							translations: {
								"zh-CN": "邮件服务 - Resend"
							},
							slug: "configuration/resend"
						},
						{
							label: "Stripe",
							translations: {
								"zh-CN": "支付服务 - Stripe"
							},
							slug: "configuration/stripe"
						},
						{
							label: "Auth",
							translations: {
								"zh-CN": "认证服务 - Auth"
							},
							slug: "configuration/auth"
						},
						{
							label: "Analytics",
							translations: {
								"zh-CN": "数据分析 - Analytics"
							},
							slug: "configuration/analytics"
						},
						{
							label: "AI",
							translations: {
								"zh-CN": "AI 模型 - AI"
							},
							slug: "configuration/ai"
						},
					],
				},
				{
					label: "Deployment",
					translations: {
						"zh-CN": "部署上线"
					},
					items: [
						{
							label: "Vercel",
							translations: {
								"zh-CN": "部署到 Vercel"
							},
							slug: "deployment/vercel"
						},
						{
							label: "Docker",
							translations: {
								"zh-CN": "Docker 自部署"
							},
							slug: "deployment/docker"
						},
						{
							label: "Dokploy",
							translations: {
								"zh-CN": "部署到 Dokploy"
							},
							slug: "deployment/dokploy"
						},
					],
				},
				{
					label: "Customization",
					translations: {
						"zh-CN": "自定义"
					},
					items: [
						{
							label: "Customize Information",
							translations: {
								"zh-CN": "自定义网站信息"
							},
							slug: "customization/information"
						},
						{
							label: "Customize Logo",
							translations: {
								"zh-CN": "自定义 Logo"
							},
							slug: "customization/logo"
						},
						{
							label: "Customize Font",
							translations: {
								"zh-CN": "自定义字体"
							},
							slug: "customization/font"
						},
						{
							label: "Customize Theme",
							translations: {
								"zh-CN": "自定义主题"
							},
							slug: "customization/theme"
						},
						{
							label: "Customize Card",
							translations: {
								"zh-CN": "自定义卡片样式"
							},
							slug: "customization/card"
						},
						{
							label: "Customize Category",
							translations: {
								"zh-CN": "自定义分类"
							},
							slug: "customization/category"
						},
						{
							label: "Customize Email",
							translations: {
								"zh-CN": "自定义邮件"
							},
							slug: "customization/email"
						},
						{
							label: "Customize Page",
							translations: {
								"zh-CN": "自定义页面"
							},
							slug: "customization/custom-page"
						},
					],
				},
				{
					label: "Guide",
					translations: {
						"zh-CN": "使用指南"
					},
					items: [
						{
							label: "Development",
							translations: {
								"zh-CN": "开发相关"
							},
							slug: "guide/develop"
						},
						{
							label: "Submission",
							translations: {
								"zh-CN": "提交数据"
							},
							slug: "guide/submission"
						},
						{
							label: "Sponsor Ads",
							translations: {
								"zh-CN": "赞助广告"
							},
							slug: "guide/sponsor-ads"
						},
						{
							label: "Sanity",
							translations: {
								"zh-CN": "Sanity 相关"
							},
							slug: "guide/sanity"
						},
					],
				},
			]
		}),
	],
});

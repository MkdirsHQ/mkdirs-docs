import { zhCN } from '@fumapress/language/zh-cn';
import { defineConfig } from 'fumapress';
import { fumadocsMdx } from 'fumapress/adapters/mdx';
import { flexsearchPlugin } from 'fumapress/plugins/flexsearch';
import { llmsPlugin } from 'fumapress/plugins/llms.txt';
import { sitemapPlugin } from 'fumapress/plugins/sitemap';
import { takumiPlugin } from 'fumapress/plugins/takumi';
import { defineI18n } from 'fumadocs-core/i18n';
import { lucideIconsPlugin } from 'fumadocs-core/source/plugins/lucide-icons';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx';
import * as LucideIcons from 'lucide-react';
import type { MDXComponents } from 'mdx/types';
import { docs } from './.source/server';
import { Github } from './src/components/github-icon';
import { SidebarFooter } from './src/components/sidebar-footer';
import { Youtube } from './src/components/youtube-icon';
import { YoutubeVideo } from './src/components/youtube-video';
import { siteConfig } from './src/site.config';

const i18n = defineI18n({
  languages: ['en', 'zh'],
  defaultLanguage: 'en',
  hideLocale: 'default-locale',
});

const translations = i18n
  .translations()
  .preset('zh', zhCN())
  .add({
    en: { displayName: '🇺🇸 English' },
    zh: { displayName: '🇨🇳 中文' },
  });

const lucideMdxComponents = Object.fromEntries(
  Object.entries(LucideIcons).filter(([name]) => /^[A-Z]/.test(name)),
) as MDXComponents;

export default defineConfig({
  mode: 'static',
  content: docs.toFumadocsSource(),
  translations,
  loaderOptions: {
    plugins: [lucideIconsPlugin()],
  },
  site: {
    name: siteConfig.name,
    baseUrl: siteConfig.url,
    git: siteConfig.git,
  },
  meta: {
    root() {
      return (
        <>
          <meta name="description" content={siteConfig.description} />
          <meta name="theme-color" content="#0b0d12" />
          <meta property="og:site_name" content={siteConfig.name} />
          <meta
            property="og:image"
            content={new URL('/og.png', siteConfig.url).toString()}
          />
          <meta
            name="twitter:image"
            content={new URL('/og.png', siteConfig.url).toString()}
          />
          <link rel="icon" href={siteConfig.favicon} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Geist:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
            rel="stylesheet"
          />
        </>
      );
    },
  },
})
  .plugins(
    flexsearchPlugin(),
    llmsPlugin(),
    sitemapPlugin(),
    takumiPlugin(),
  )
  .adapters(
    fumadocsMdx({
      async getMdxComponents(page) {
        const source = await this.getLoader();

        return {
          ...defaultMdxComponents,
          ...lucideMdxComponents,
          a: createRelativeLink(source, page),
          Accordion,
          Accordions,
          File,
          Files,
          Folder,
          Github,
          Step,
          Steps,
          Tab,
          Tabs,
          TypeTable,
          Youtube,
          YoutubeVideo,
        };
      },
    }),
  )
  .layouts({
    async defaultProps() {
      return {
        githubUrl: '',
        nav: {
          title: (
            <>
              <img
                src={siteConfig.logo}
                alt=""
                aria-hidden="true"
                className="size-7 rounded-md"
              />
              <span className="font-semibold">{siteConfig.name}</span>
            </>
          ),
          url: '/',
        },
        links: [
          {
            text: siteConfig.homeLabel,
            url: siteConfig.homeUrl,
            external: true,
          },
          {
            text: 'Roadmap',
            url: siteConfig.roadmapUrl,
            external: true,
          },
          {
            text: 'X (Twitter)',
            url: siteConfig.twitterUrl,
            external: true,
          },
        ],
        i18n: false,
        themeSwitch: {
          enabled: false,
        },
        sidebar: {
          footer: (
            <SidebarFooter
              githubUrl={siteConfig.githubUrl}
              twitterUrl={siteConfig.twitterUrl}
              youtubeUrl={siteConfig.youtubeUrl}
            />
          ),
        },
      };
    },
  });

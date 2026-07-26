export const siteConfig = {
  name: 'Mkdirs Docs',
  description:
    'Documentation for Mkdirs, the directory website template with submissions, payments, CMS, authentication, newsletters, SEO, themes, and more.',
  url:
    import.meta.env.PUBLIC_SITE_URL ??
    'https://mkdirs-docs.javayhu.workers.dev',
  logo: '/logo-rounded.png',
  favicon: '/favicon.ico',
  homeLabel: 'Mkdirs',
  homeUrl: 'https://mkdirs.com',
  githubUrl: 'https://github.com/MkdirsHQ',
  roadmapUrl: 'https://github.com/MkdirsHQ/mkdirs-template/issues/10',
  twitterUrl: 'https://mksaas.link/fox-x',
  youtubeUrl: 'https://www.youtube.com/@MkdirsHQ',
  git: {
    user: 'MkdirsHQ',
    repo: 'mkdirs-docs',
    branch: 'main',
  },
} as const;

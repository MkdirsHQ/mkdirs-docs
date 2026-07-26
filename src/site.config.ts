export const siteConfig = {
  name: 'Mkdirs Docs',
  description:
    'The best directory boilerplate, packed with AI, Listings, Payment, Submission, CMS, Blog, Authentication, Newsletter, SEO, Themes and more.',
  url:
    import.meta.env.PUBLIC_SITE_URL ??
    'https://docs.mkdirs.com',
  logo: '/logo-rounded.png',
  favicon: '/favicon.ico',
  ogImage: '/og.png',
  ogImageWidth: 1376,
  ogImageHeight: 768,
  twitterHandle: '@indie_maker_fox',
  homeLabel: 'Mkdirs',
  homeUrl: 'https://mkdirs.com',
  githubUrl: 'https://github.com/MkdirsHQ/mkdirs-docs',
  git: {
    user: 'MkdirsHQ',
    repo: 'mkdirs-docs',
    branch: 'main',
  },
} as const;

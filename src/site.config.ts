export const siteConfig = {
  name: 'MkDocs',
  description:
    'A fast documentation template powered by FumaPress and deployed on Cloudflare Workers.',
  url:
    import.meta.env.PUBLIC_SITE_URL ??
    'https://docs.mksaas.link',
  logo: '/logo.svg',
  favicon: '/favicon.svg',
  homeLabel: 'Website',
  homeUrl: 'https://github.com/open-fox/mkdocs',
  githubUrl: 'https://github.com/open-fox/mkdocs',
  git: {
    user: 'open-fox',
    repo: 'mkdocs',
    branch: 'main',
  },
} as const;

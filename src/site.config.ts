export const siteConfig = {
  name: 'Docs',
  description:
    'A fast documentation template powered by FumaPress and deployed on Cloudflare Workers.',
  url:
    import.meta.env.PUBLIC_SITE_URL ??
    'https://docs.mksaas.link',
  logo: '/logo.svg',
  favicon: '/favicon.svg',
  homeLabel: 'Website',
  homeUrl: 'https://github.com/open-fox/docs-template',
  githubUrl: 'https://github.com/open-fox/docs-template',
  git: {
    user: 'open-fox',
    repo: 'docs-template',
    branch: 'main',
  },
} as const;

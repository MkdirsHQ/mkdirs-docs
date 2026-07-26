<p align="center">
  <img src="./public/logo.svg" alt="MkDocs" width="72" height="72" />
</p>

<h1 align="center">MkDocs</h1>

<p align="center">
  A fast documentation template powered by <a href="https://press.fumadocs.dev">FumaPress</a> and deployed on Cloudflare Workers.
</p>

<p align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/open-fox/mkdocs" alt="License" /></a>
  <a href="https://github.com/open-fox/mkdocs/stargazers"><img src="https://img.shields.io/github/stars/open-fox/mkdocs" alt="GitHub stars" /></a>
  <a href="https://press.fumadocs.dev"><img src="https://img.shields.io/badge/FumaPress-powered-18181b" alt="FumaPress" /></a>
  <a href="https://workers.cloudflare.com"><img src="https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&amp;logoColor=white" alt="Cloudflare Workers" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&amp;logoColor=white" alt="TypeScript" /></a>
</p>

<p align="center">
  <a href="https://docs.mksaas.link">Live Demo</a> ·
  <a href="https://docs.mksaas.link">Documentation</a> ·
  <a href="https://github.com/open-fox/mkdocs/issues">Report a Bug</a>
</p>

![MkDocs screenshot](./public/screenshot.png)

## Features

- Content-first documentation with Markdown and MDX
- Static search with keyboard shortcuts
- Responsive navigation, table of contents, and light/dark/system themes
- Locale-aware routing with a customizable language switcher
- Reusable cards, callouts, steps, tabs, accordions, file trees, type tables, Lucide icons, and video embeds
- Per-page Markdown, `llms.txt`, Open Graph images, and sitemap generation
- Static deployment to Cloudflare Workers with Wrangler
- No Worker runtime code or application bindings required

## Tech stack

- [FumaPress](https://press.fumadocs.dev) and [Fumadocs](https://fumadocs.dev)
- [Waku](https://waku.gg) and React
- TypeScript and Tailwind CSS
- [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)

## Getting started

### Prerequisites

- Node.js 20.19 or later
- [pnpm](https://pnpm.io)

### Installation

```bash
git clone https://github.com/open-fox/mkdocs.git
cd mkdocs
pnpm install
pnpm dev
```

Open the local URL printed in the terminal.

### Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Generate the production-ready static site |
| `pnpm check` | Run source generation, TypeScript, build, and Wrangler dry-run checks |
| `pnpm deploy` | Build and deploy the site with Wrangler |

## Deploy to Cloudflare Workers

1. Authenticate Wrangler:

   ```bash
   pnpm exec wrangler login
   ```

2. Update the Worker name and optional custom domain in `wrangler.jsonc`.

3. Validate and deploy:

   ```bash
   pnpm check
   pnpm deploy
   ```

For CI deployments, provide `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as secrets.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a branch for your change.
3. Run `pnpm check` before committing.
4. Open a pull request with a clear description of the change.

For bugs and feature requests, please [open an issue](https://github.com/open-fox/mkdocs/issues).

## Author

[OpenFox](https://github.com/open-fox) is an independent developer building products and developer tools for makers. Its projects include:

- [MkSaaS](https://mksaas.com) — Make Your AI SaaS Product in a Weekend.
- [TanStarter](https://tanstarter.dev) — Ship Faster with TanStack, Cost Less with Cloudflare.
- [MkImage](https://mkimage.ai) — Make Any Images Possible.

## License

Licensed under the [MIT License](./LICENSE).

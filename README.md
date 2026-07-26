# Docs Template

A compact, production-ready documentation template powered by [FumaPress](https://press.fumadocs.dev), Waku, Fumadocs, and Cloudflare Workers static assets.

## Included

- English and Simplified Chinese content
- Static FlexSearch and keyboard search
- Responsive docs navigation, table of contents, and theme switcher
- Cards, callouts, steps, tabs, accordions, file trees, Lucide icons, and YouTube embeds
- Markdown/LLM exports, generated Open Graph images, and sitemap
- Wrangler configuration for Cloudflare Workers
- A tiny root redirect Worker (`/` to the default `/en` locale); documentation assets are still served directly from Cloudflare's static asset layer

## Development

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm check
```

## Deployment

```bash
pnpm deploy
```

## Create a documentation site

1. Copy this repository.
2. Replace the Markdown files under `content/`.
3. Update `src/site.config.ts`, the Worker name in `wrangler.jsonc`, and assets under `public/`.
4. Run `pnpm check`, then `pnpm deploy`.

Application-layer changes should be made here when they are reusable. Derived documentation sites should remain content-first.

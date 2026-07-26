# Docs Template

A compact, production-ready documentation template powered by [FumaPress](https://press.fumadocs.dev), Waku, Fumadocs, and Cloudflare Workers static assets.

Live example: [docs.mksaas.link](https://docs.mksaas.link)

## Included

- English and Simplified Chinese content
- Static FlexSearch and keyboard search
- Responsive docs navigation, table of contents, bilingual language menu, and light/dark/system theme menu
- Cards, callouts, steps, tabs, accordions, file trees, type tables, Lucide icons, and YouTube embeds
- Markdown/LLM exports, generated Open Graph images, and sitemap
- Wrangler configuration for Cloudflare Workers
- A tiny redirect Worker for `/` and legacy `/{locale}/docs/...` links; documentation assets are still served directly from Cloudflare's static asset layer

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
3. Update `src/site.config.ts`, the Worker name and custom domain in `wrangler.jsonc`, and assets under `public/`.
4. Run `pnpm check`, then `pnpm deploy`.

Application-layer changes should be made here when they are reusable. Derived documentation sites should remain content-first.

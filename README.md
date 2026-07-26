# Mkdirs Documentation

The bilingual documentation website for [Mkdirs](https://mkdirs.com), rebuilt on [FumaPress](https://press.fumadocs.dev) and deployed with Cloudflare Workers Static Assets.

## Included

- English and Simplified Chinese documentation migrated from the original Astro Starlight site
- Static search, responsive navigation, per-page table of contents, and light/dark/system themes
- Cards, callouts, guided steps, screenshots, and responsive YouTube embeds
- English pages at root paths, Chinese pages under `/zh`, plus redirects from the original `/zh-cn/...` routes
- Markdown/LLM exports, generated Open Graph images, and sitemap
- Pure static deployment without a Worker entry point or Assets binding

## Development

```bash
pnpm install
pnpm dev
```

## Validation and deployment

```bash
pnpm check
pnpm deploy
```

The production Worker name is `mkdirs-docs`.

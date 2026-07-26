import { cp, readFile, rm, writeFile } from 'node:fs/promises';

const publicPath = new URL('../dist/public/', import.meta.url);
const defaultLanguagePath = new URL('en/', publicPath);
const sitemapPath = new URL('../dist/public/sitemap.xml', import.meta.url);

await cp(defaultLanguagePath, publicPath, { recursive: true, force: true });
await rm(defaultLanguagePath, { recursive: true, force: true });

const sitemap = await readFile(sitemapPath, 'utf8');
let normalizedSitemap = sitemap;

for (const entry of sitemap.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
  const location = entry.match(/<loc>([^<]+)<\/loc>/)?.[1];

  if (!location) continue;

  const pathname = new URL(location).pathname;

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    normalizedSitemap = normalizedSitemap.replace(entry, '');
  }
}

await writeFile(sitemapPath, normalizedSitemap, 'utf8');

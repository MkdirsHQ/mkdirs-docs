import { readFile, writeFile } from 'node:fs/promises';

const sitemapPath = new URL('../dist/public/sitemap.xml', import.meta.url);
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

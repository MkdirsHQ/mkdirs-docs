import { cp, readFile, readdir, rm, writeFile } from 'node:fs/promises';

const publicPath = new URL('../dist/public/', import.meta.url);
const defaultLanguagePath = new URL('en/', publicPath);
const rscPath = new URL('RSC/R/', publicPath);
const defaultLanguageRscPath = new URL('en/', rscPath);
const sitemapPath = new URL('../dist/public/sitemap.xml', import.meta.url);
const sitemap = await readFile(sitemapPath, 'utf8');
const firstLocation = sitemap.match(/<loc>([^<]+)<\/loc>/)?.[1];

if (!firstLocation) {
  throw new Error('The generated sitemap does not contain a site URL.');
}

const siteOrigin = new URL(firstLocation).origin;

/** @param {string} content */
function normalizeDefaultLanguageContent(content) {
  return content
    .replaceAll(`${siteOrigin}/en/`, `${siteOrigin}/`)
    .replaceAll('"markdownUrl":"/en/', '"markdownUrl":"/')
    .replaceAll('\\"markdownUrl\\":\\"/en/', '\\"markdownUrl\\":\\"/')
    .replaceAll('route:/en/', 'route:/')
    .replaceAll('route:/en"', 'route:/"')
    .replaceAll('route:/en\\"', 'route:/\\"')
    .replaceAll('layout:/en/', 'layout:/')
    .replaceAll('layout:/en"', 'layout:/"')
    .replaceAll('layout:/en\\"', 'layout:/\\"')
    .replaceAll('page:/en/', 'page:/')
    .replaceAll('page:/en"', 'page:/"')
    .replaceAll('page:/en\\"', 'page:/\\"')
    .replaceAll('"ROUTE":["/en/', '"ROUTE":["/')
    .replaceAll('"ROUTE":["/en"', '"ROUTE":["/"')
    .replaceAll('\\"ROUTE\\":[\\"/en/', '\\"ROUTE\\":[\\"/')
    .replaceAll('\\"ROUTE\\":[\\"/en\\"', '\\"ROUTE\\":[\\"/\\"');
}

/**
 * @param {URL} source
 * @param {URL} destination
 * @returns {Promise<void>}
 */
async function normalizeCopiedFiles(source, destination) {
  for (const entry of await readdir(source, { withFileTypes: true })) {
    const sourcePath = new URL(entry.name, source);
    const destinationPath = new URL(entry.name, destination);

    if (entry.isDirectory()) {
      await normalizeCopiedFiles(
        new URL(`${entry.name}/`, source),
        new URL(`${entry.name}/`, destination),
      );
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.txt')) {
      const content = await readFile(destinationPath, 'utf8');
      await writeFile(
        destinationPath,
        normalizeDefaultLanguageContent(content),
        'utf8',
      );
    }
  }
}

await cp(defaultLanguagePath, publicPath, { recursive: true, force: true });
await normalizeCopiedFiles(defaultLanguagePath, publicPath);
await rm(defaultLanguagePath, { recursive: true, force: true });
await cp(defaultLanguageRscPath, rscPath, { recursive: true, force: true });
await normalizeCopiedFiles(defaultLanguageRscPath, rscPath);
await cp(new URL('en.txt', rscPath), new URL('../R.txt', rscPath), {
  force: true,
});
const rootRscPath = new URL('../R.txt', rscPath);
const rootRsc = await readFile(rootRscPath, 'utf8');
await writeFile(
  rootRscPath,
  normalizeDefaultLanguageContent(rootRsc),
  'utf8',
);

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

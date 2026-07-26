const supportedLocales = new Set(['en', 'zh']);

function getLegacyDocsPath(pathname: string): string | undefined {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'docs') {
    return ['/en', ...segments.slice(1)].join('/');
  }

  const locale = segments[0];

  if (locale && supportedLocales.has(locale) && segments[1] === 'docs') {
    return [`/${locale}`, ...segments.slice(2)].join('/');
  }
}

export default {
  fetch(request, env): Response | Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      return Response.redirect(new URL('/en', url), 307);
    }

    const legacyPath = getLegacyDocsPath(url.pathname);

    if (legacyPath) {
      url.pathname = legacyPath;
      return Response.redirect(url, 308);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

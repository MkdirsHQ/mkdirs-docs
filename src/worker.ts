function joinPath(prefix: string, segments: string[]): string {
  return [prefix, ...segments].join('/') || '/';
}

function getCanonicalRedirect(pathname: string): string | undefined {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'en') {
    return joinPath('', segments.slice(segments[1] === 'docs' ? 2 : 1));
  }

  if (segments[0] === 'docs') {
    return joinPath('', segments.slice(1));
  }

  if (segments[0] === 'zh' && segments[1] === 'docs') {
    return joinPath('/zh', segments.slice(2));
  }
}

async function fetchDefaultLanguage(
  request: Request,
  env: Env,
  url: URL,
): Promise<Response> {
  const localizedUrl = new URL(url);
  const hasFileExtension = /\/[^/]+\.[^/]+$/.test(url.pathname);
  const trailingSlash =
    url.pathname.endsWith('/') || hasFileExtension ? '' : '/';

  localizedUrl.pathname =
    url.pathname === '/' ? '/en/' : `/en${url.pathname}${trailingSlash}`;

  return env.ASSETS.fetch(new Request(localizedUrl, request));
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const canonicalPath = getCanonicalRedirect(url.pathname);

    if (canonicalPath && canonicalPath !== url.pathname) {
      url.pathname = canonicalPath;
      return Response.redirect(url, 308);
    }

    if (url.pathname === '/') {
      return fetchDefaultLanguage(request, env, url);
    }

    const response = await env.ASSETS.fetch(request);

    if (
      response.status !== 404 ||
      url.pathname === '/zh' ||
      url.pathname.startsWith('/zh/')
    ) {
      return response;
    }

    await response.body?.cancel();
    return fetchDefaultLanguage(request, env, url);
  },
} satisfies ExportedHandler<Env>;

export default {
  fetch(request, env): Response | Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      return Response.redirect(new URL('/en', url), 307);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

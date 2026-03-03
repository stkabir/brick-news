import { defineMiddleware } from 'astro:middleware';

const ADMIN_USER = import.meta.env.ADMIN_USER;
const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD;

if (!ADMIN_USER || !ADMIN_PASSWORD) {
  throw new Error('ADMIN_USER and ADMIN_PASSWORD environment variables must be set');
}

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (url.pathname === '/dashboard' || url.pathname === '/dashboard/') {
    return context.redirect('/keystatic/', 302);
  }

  if (url.pathname === '/keystatic') {
    return context.redirect('/keystatic/', 301);
  }

  // Protected routes: require Basic Auth
  if (url.pathname.startsWith('/keystatic') || url.pathname.startsWith('/api/keystatic')) {
    const auth = context.request.headers.get('Authorization');

    if (auth) {
      const [scheme, encoded] = auth.split(' ');
      if (scheme === 'Basic' && encoded) {
        const decoded = atob(encoded);
        const colonIndex = decoded.indexOf(':');
        const user = decoded.slice(0, colonIndex);
        const password = decoded.slice(colonIndex + 1);
        if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
          const response = await next();
          Object.entries(SECURITY_HEADERS).forEach(([k, v]) => response.headers.set(k, v));
          return response;
        }
      }
    }

    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Brickell News Admin"',
      },
    });
  }

  // Public routes: add security headers
  const response = await next();
  Object.entries(SECURITY_HEADERS).forEach(([k, v]) => response.headers.set(k, v));
  return response;
});

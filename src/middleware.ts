import { defineMiddleware } from 'astro:middleware';

const ADMIN_USER = import.meta.env.ADMIN_USER ?? 'admin';
const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD ?? 'admin';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  if (url.pathname === '/dashboard' || url.pathname === '/dashboard/') {
    return context.redirect('/keystatic', 302);
  }

  if (!url.pathname.startsWith('/keystatic') && !url.pathname.startsWith('/api/keystatic')) {
    return next();
  }

  const auth = context.request.headers.get('Authorization');

  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic' && encoded) {
      const decoded = atob(encoded);
      const [user, password] = decoded.split(':');
      if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
        return next();
      }
    }
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Brickell News Admin"',
    },
  });
});

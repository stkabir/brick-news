import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const apiBase = (process.env.LARAVEL_API_URL ?? import.meta.env.LARAVEL_API_URL ?? 'http://127.0.0.1:8000') + '/api';

  let articlesStatus = 'unknown';
  let firstArticle: unknown = null;
  let errorMsg: string | null = null;

  try {
    const res = await fetch(`${apiBase}/articles`, { cache: 'no-store' });
    articlesStatus = `HTTP ${res.status}`;
    if (res.ok) {
      const json = await res.json();
      const articles = json.data ?? json;
      firstArticle = Array.isArray(articles) ? articles[0] : articles;
    }
  } catch (e) {
    errorMsg = String(e);
    articlesStatus = 'FETCH_ERROR';
  }

  return Response.json({
    apiBase,
    LARAVEL_API_URL_env: process.env.LARAVEL_API_URL ?? null,
    articlesStatus,
    firstArticle,
    error: errorMsg,
  });
};

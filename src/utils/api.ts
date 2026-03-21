export interface Article {
  id: number;
  slug: string;
  titleEn: string;
  titleEs: string;
  summaryEn: string | null;
  summaryEs: string | null;
  bodyEn: string | null;
  bodyEs: string | null;
  image: string | null;
  category: string;
  section: string | null;
  author: string | null;
  date: string | null;
  featured: boolean;
  priority: number;
}

export interface Category {
  id: number;
  slug: string;
  titleEn: string;
  titleEs: string;
  defaultSection: string | null;
}

export interface Section {
  id: number;
  slug: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string | null;
  descriptionEs: string | null;
  sectionLayout: 'grid' | 'list' | 'sidebar';
  order: number;
}

async function apiFetch<T>(path: string): Promise<T> {
  const apiBase = (process.env.LARAVEL_API_URL ?? import.meta.env.LARAVEL_API_URL ?? 'http://127.0.0.1:8000') + '/api';
  const res = await fetch(`${apiBase}${path}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
  const json = await res.json();
  return (json.data ?? json) as T;
}

export async function getArticles(category?: string): Promise<Article[]> {
  const qs = category ? `?category=${encodeURIComponent(category)}` : '';
  return apiFetch<Article[]>(`/articles${qs}`);
}

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    return await apiFetch<Article>(`/articles/${encodeURIComponent(slug)}`);
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  return apiFetch<Category[]>('/categories');
}

export async function getSections(): Promise<Section[]> {
  return apiFetch<Section[]>('/sections');
}

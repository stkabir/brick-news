import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const [articles, categories] = await Promise.all([
    getCollection('articles'),
    getCollection('categories'),
  ]);

  const categoryMap = new Map(categories.map((c) => [c.id, c.data]));

  const data = articles.map((a) => {
    const cat = categoryMap.get(a.data.category);
    return {
      id: a.id,
      titleEn: a.data.titleEn,
      titleEs: a.data.titleEs,
      summaryEn: a.data.summaryEn,
      summaryEs: a.data.summaryEs,
      image: a.data.image,
      category: a.data.category,
      categoryEn: cat?.titleEn ?? a.data.category,
      categoryEs: cat?.titleEs ?? a.data.category,
      author: a.data.author,
      date: a.data.date,
    };
  });

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};

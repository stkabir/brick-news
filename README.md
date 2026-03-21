# Brick News — Frontend

Portal de noticias bilingüe para Brickell, Miami. Construido con Astro 5 + TailwindCSS 4.

## Stack

- **Astro 5** (SSR, `@astrojs/node` adapter)
- **TailwindCSS 4** (vía `@tailwindcss/vite`, sin `tailwind.config.js`)
- **Splide.js** — carrusel trending
- **Sin React** — solo componentes Astro con `<script>` vanilla

## Requisitos

- Node.js 22+
- pnpm
- [brick-news-api](../brick-news-api) corriendo localmente

## Instalación

```bash
pnpm install
cp .env.example .env   # configurar LARAVEL_API_URL
pnpm dev               # localhost:4321
```

## Variables de entorno

| Variable | Descripción | Default |
|---|---|---|
| `LARAVEL_API_URL` | URL base de la API Laravel | `http://127.0.0.1:8000` |

## Comandos

```bash
pnpm dev        # Servidor de desarrollo (localhost:4321)
pnpm build      # Build de producción
pnpm preview    # Preview del build
```

## Páginas

| Ruta | Archivo | Descripción |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage: hero grid, More News, carrusel Trending |
| `/{category}` | `src/pages/[category]/index.astro` | Listado de artículos por categoría |
| `/{category}/{slug}` | `src/pages/[category]/[slug].astro` | Detalle de artículo |
| `/api/health` | `src/pages/api/health.ts` | Health check |

## Distribución de artículos en la homepage

Los artículos se ordenan por `priority` (desc) → `date` (desc).

| Zona | Fuente |
|---|---|
| Hero (top 3), columna central, sidebar derecho | Todos los artículos (`allArticles`) |
| Carrusel Trending | Artículos con `section = slug` de la sección con `sectionLayout === "grid"` |
| More News (lista izq.) | Artículos con `section = slug` de la sección con `sectionLayout === "list"` |
| More News (col. derecha) | Artículos con `section = slug` de la sección con `sectionLayout === "sidebar"` |

> **Nota:** Para que un artículo aparezca en una sección específica (Trending, More News), debe tener `section_id` asignado en la API apuntando a la sección correspondiente.

## Sistema bilingüe

- Cada campo de texto existe en variante `*En` y `*Es`
- El idioma activo se guarda en `localStorage` bajo la clave `brickell-news-locale`
- El atributo `data-locale` en `<html>` controla la visibilidad de `.lang-en` / `.lang-es` vía CSS
- El toggle de idioma está en el header (componente en `BaseLayout.astro`)

## Estructura de archivos clave

```
src/
├── layouts/
│   └── BaseLayout.astro     # Layout único: header, footer, nav, lang toggle
├── pages/
│   ├── index.astro           # Homepage
│   ├── [category]/
│   │   ├── index.astro       # Página de categoría
│   │   └── [slug].astro      # Detalle de artículo
│   └── api/
│       └── health.ts
├── utils/
│   ├── api.ts                # Helpers tipados para la API
│   └── date.ts               # Formateo de fechas EN/ES
├── styles/
│   └── global.css            # Tokens de diseño (@theme), tipografía
└── middleware.ts             # Headers de seguridad
```

## Despliegue

- **Producción:** rama `main` → `brickell.news`
- **Desarrollo:** rama `dev` → `dev.brickell.news`
- Plataforma: Dokploy (Traefik) en VPS GoDaddy
- Docker: Node 22 alpine, puerto 4321

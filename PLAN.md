# Plan: Integrar Keystatic CMS

## Qué es Keystatic
CMS que lee/escribe directamente los archivos markdown en `src/content/`. El admin se accede en `/keystatic`.

## Paso 1: Instalar dependencias

```bash
npx astro add react markdoc node
npm install @keystatic/core @keystatic/astro
```

- `@astrojs/react` — Keystatic UI está hecho en React
- `@astrojs/markdoc` — Soporte para archivos .mdoc que crea Keystatic
- `@astrojs/node` — Adapter SSR necesario para el admin
- `@keystatic/core` + `@keystatic/astro` — El CMS

## Paso 2: Actualizar `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

export default defineConfig({
  output: 'hybrid',        // Estático por defecto, SSR solo para /keystatic
  adapter: node({ mode: 'standalone' }),
  integrations: [react(), markdoc(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

## Paso 3: Crear `keystatic.config.ts`

Configurar 3 colecciones mapeadas a las carpetas existentes:

### Articles (`src/content/articles/*`)
| Campo | Tipo Keystatic | Notas |
|---|---|---|
| titleEn | `fields.text` | |
| titleEs | `fields.text` | |
| summaryEn | `fields.text({ multiline: true })` | |
| summaryEs | `fields.text({ multiline: true })` | |
| image | `fields.url` | URL de imagen |
| category | `fields.relationship({ collection: 'categories' })` | Dropdown vinculado a categorías |
| author | `fields.text` | |
| date | `fields.date` | |
| featured | `fields.checkbox` | |
| priority | `fields.integer` | 0-10 |
| content | `fields.markdoc` | Body del archivo (puede quedar vacío) |

### Categories (`src/content/categories/*`)
| Campo | Tipo Keystatic |
|---|---|
| titleEn | `fields.text` |
| titleEs | `fields.text` |
| descriptionEn | `fields.text({ multiline: true })` |
| descriptionEs | `fields.text({ multiline: true })` |
| nav | `fields.checkbox` |
| accentColor | `fields.text` |
| content | `fields.markdoc` |

### Sections (`src/content/sections/*`)
| Campo | Tipo Keystatic |
|---|---|
| titleEn | `fields.text` |
| titleEs | `fields.text` |
| descriptionEn | `fields.text({ multiline: true })` |
| descriptionEs | `fields.text({ multiline: true })` |
| layout | `fields.select` | Opciones: hero, grid, list, sidebar |
| categories | `fields.array(fields.relationship)` | Multi-select de categorías |
| order | `fields.integer` |
| content | `fields.markdoc` |

## Paso 4: Compatibilidad de archivos

- Los archivos `.md` existentes seguirán funcionando con Astro content collections
- Los nuevos archivos creados por Keystatic serán `.mdoc` (Markdoc)
- Ambos formatos coexisten sin problema en la misma colección

## Resultado

- Dashboard admin en `http://localhost:4321/keystatic`
- Login en modo local (sin autenticación externa, solo acceso local)
- Formularios para crear/editar artículos, categorías y secciones
- Los cambios se escriben directamente en los archivos del proyecto

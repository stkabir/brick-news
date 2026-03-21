# Manual de Usuario — Brickell News

Panel de administración para publicar y gestionar el contenido del sitio web.

---

## Acceso al panel

1. Abrir el navegador e ir a: **https://api.brickell.news/admin**
2. Ingresar el correo electrónico y la contraseña proporcionados.
3. Hacer clic en **Sign in**.

> Si olvidaste la contraseña, contactar al administrador técnico para restablecerla.

---

## Pantalla principal

Al entrar verás un menú lateral izquierdo con tres secciones:

| Ícono | Sección | Para qué sirve |
|-------|---------|----------------|
| 📰 | **Articles** | Publicar y editar artículos |
| 🏷️ | **Categories** | Administrar las categorías y su sección por defecto |
| ▦ | **Sections** | Configurar las secciones de la portada |

---

## Artículos

### Ver todos los artículos

Hacer clic en **Articles** en el menú lateral. Verás una tabla con todos los artículos ordenados por prioridad.

Desde la tabla puedes:
- **Buscar** por título o autor usando la barra de búsqueda.
- **Filtrar** por categoría usando el botón "Filters".
- **Editar** un artículo haciendo clic en el ícono de lápiz ✏️.
- **Eliminar** un artículo haciendo clic en el ícono de basura 🗑️.

---

### Crear un artículo nuevo

1. Hacer clic en el botón **New Article** (arriba a la derecha).
2. Completar el formulario:

#### Sección "English Content" (contenido en inglés)

| Campo | Descripción |
|-------|-------------|
| **Title (EN)** | Título del artículo en inglés. Al escribirlo, el campo *Slug* se completa automáticamente — no es necesario tocarlo. |
| **Summary (EN)** | Resumen corto que aparece en las tarjetas del sitio (2–3 oraciones). |
| **Body (EN)** | Cuerpo completo del artículo. Tiene herramientas de formato: negrita, cursiva, listas, etc. |

#### Sección "Spanish Content" (contenido en español)

| Campo | Descripción |
|-------|-------------|
| **Title (ES)** | Título del artículo en español. |
| **Summary (ES)** | Resumen corto en español. |
| **Body (ES)** | Cuerpo completo en español. |

#### Sección "Details" (datos del artículo)

| Campo | Descripción |
|-------|-------------|
| **Slug** | Identificador único en la URL (ej. `miami-art-week-2025`). Se genera solo al escribir el título en inglés. Solo modificar si es necesario. |
| **Category** | Categoría a la que pertenece el artículo. Al seleccionarla, el artículo hereda automáticamente la sección por defecto de esa categoría. |
| **Section** | *(Opcional)* Sección donde aparecerá el artículo. Si se deja vacío, se usa la sección por defecto de la categoría. Completar solo si este artículo en particular debe aparecer en una zona diferente. |
| **Author** | Nombre del autor o redactor. |
| **Date** | Fecha de publicación del artículo. |
| **Image URL** | Dirección web de la imagen principal (debe comenzar con `https://`). |
| **Featured** | Activar si el artículo debe destacarse en la portada (interruptor azul = activo). |
| **Priority** | Número que controla el orden de aparición. Mayor número = aparece primero. Usar: `0` normal, `10` importante, `20` muy importante. |

#### Secciones disponibles

| Sección | Dónde aparece en la portada |
|---------|-----------------------------|
| **Trending** (`trending`) | Carrusel **Trending Developments** (parte inferior de la portada) |
| **Top Stories** (`top-stories`) | **More News** — columna izquierda (lista de titulares) |
| **Featured** (`featured`) | **More News** — columna central y derecha (tarjetas destacadas) |
| *(vacío)* | Solo aparece en el grid principal: hero, columna central y sidebar superior |

> **Regla general:** la mayoría de los artículos no necesitan que se les asigne sección manualmente — basta con asignar la categoría correcta y el artículo aparecerá en la zona que le corresponde según la configuración de esa categoría.

3. Hacer clic en **Create Article** para guardar y publicar.

> Los cambios se reflejan en el sitio web de inmediato, sin necesidad de hacer nada más.

---

### Editar un artículo existente

1. En la lista de artículos, hacer clic en el ícono de lápiz ✏️ del artículo.
2. Modificar los campos que necesites.
3. Hacer clic en **Save changes**.

---

### Eliminar un artículo

1. En la lista de artículos, hacer clic en el ícono de basura 🗑️.
2. Confirmar la eliminación en el cuadro de diálogo.

> ⚠️ Esta acción es permanente y no se puede deshacer.

---

## Categorías

Las categorías organizan los artículos y aparecen en el menú de navegación del sitio. Cada categoría puede tener una **sección por defecto**: todos los artículos de esa categoría aparecerán automáticamente en esa zona de la portada, sin necesidad de configurarlo en cada artículo.

### Configuración actual

| Categoría | Sección por defecto | Zona en portada |
|-----------|---------------------|-----------------|
| Business | Featured | More News — tarjetas |
| Events | Trending | Carrusel Trending |
| Headline News | Top Stories | More News — lista |
| Lifestyle | Featured | More News — tarjetas |
| News | Top Stories | More News — lista |
| Real Estate | Trending | Carrusel Trending |
| Home | *(ninguna)* | Solo grid principal |

### Ver categorías

Hacer clic en **Categories** en el menú lateral.

### Crear una categoría nueva

1. Hacer clic en **New Category**.
2. Completar:

| Campo | Descripción |
|-------|-------------|
| **Title (EN)** | Nombre de la categoría en inglés (ej. `Business`). Al escribirlo, el *Slug* se genera automáticamente. |
| **Title (ES)** | Nombre de la categoría en español (ej. `Negocios`). |
| **Slug** | Identificador único (ej. `business`). Se genera solo — no modificar salvo que sea necesario. |
| **Default Section** | Sección donde aparecerán por defecto todos los artículos de esta categoría. Seleccionar del menú desplegable. |

3. Hacer clic en **Create Category**.

> La nueva categoría ya estará disponible para asignarla a los artículos.

### Editar o eliminar una categoría

Usar los íconos de lápiz ✏️ o basura 🗑️ en la tabla.

> ⚠️ Eliminar una categoría afecta a todos los artículos que la tienen asignada. Hacerlo solo si los artículos también fueron eliminados o reasignados.

---

## Secciones

Las secciones definen las zonas de la portada donde se agrupa el contenido. Hay tres secciones activas y generalmente no es necesario modificarlas.

### Secciones activas

| Slug | Nombre | Layout | Zona en portada |
|------|--------|--------|-----------------|
| `trending` | Trending Developments | `grid` | Carrusel en la parte inferior |
| `top-stories` | Top Stories | `list` | More News — columna izquierda |
| `featured` | Featured | `sidebar` | More News — columna central y derecha |

### Ver secciones

Hacer clic en **Sections** en el menú lateral.

### Crear o editar una sección

| Campo | Descripción |
|-------|-------------|
| **Title (EN)** | Nombre de la sección en inglés. |
| **Title (ES)** | Nombre de la sección en español. |
| **Slug** | Identificador único (se genera automáticamente). |
| **Description (EN/ES)** | Descripción opcional que aparece debajo del título de la sección en la portada. |
| **Section Layout** | Diseño visual: `grid` (carrusel), `list` (lista de titulares), `sidebar` (tarjetas con imagen). |
| **Order** | Orden de aparición en la portada. Número menor = aparece antes. |

> Los artículos aparecen en una sección de dos formas: (1) porque su **categoría** tiene esa sección como default, o (2) porque se les asignó esa sección directamente en el formulario del artículo.

---

## Preguntas frecuentes

**¿Cuándo aparece el artículo en el sitio?**
Inmediatamente después de guardarlo. No hay que esperar ni hacer ningún paso adicional.

**¿Puedo dejar un artículo en borrador?**
No, actualmente todos los artículos guardados se publican. Si no querés que aparezca, asignarle prioridad negativa (ej. `-1`) hasta que esté listo.

**¿Tengo que asignar una sección a cada artículo?**
No. Si la categoría del artículo tiene una sección por defecto configurada, el artículo la hereda automáticamente. Solo es necesario asignar sección manualmente cuando se quiere que un artículo aparezca en una zona diferente a la de su categoría.

**¿Qué pasa si el artículo no tiene imagen?**
El artículo se muestra sin imagen. Se recomienda siempre incluir una URL de imagen para mejor presentación.

**¿Qué formato debe tener la URL de la imagen?**
Debe ser una dirección web completa, por ejemplo:
`https://images.unsplash.com/photo-xxxxx`
No se suben imágenes directamente al panel; la imagen debe estar alojada en otro servicio (Unsplash, Cloudinary, Google Drive con enlace público, etc.).

**¿Qué es el Slug?**
Es la parte de la URL que identifica al artículo. Por ejemplo, si el slug es `miami-art-week-2025`, el artículo se verá en:
`https://brickell.news/business/miami-art-week-2025`
Se genera automáticamente desde el título en inglés y generalmente no es necesario modificarlo.

**¿Cuál es la diferencia entre Summary y Body?**
- **Summary**: texto corto (2–3 oraciones) que aparece en las tarjetas y listados del sitio.
- **Body**: artículo completo con formato enriquecido, visible solo cuando el lector entra al artículo.

**¿Cómo controlo en qué parte de la portada aparece un artículo?**
La forma más sencilla es configurar la **sección por defecto de la categoría** — así todos los artículos de esa categoría se ubican automáticamente. Para un artículo puntual que deba ir a una zona diferente, usar el campo **Section** en el formulario del artículo.

**¿Cómo ordeno los artículos en el sitio?**
Usando el campo **Priority**. Los artículos con número más alto aparecen primero. Artículos con la misma prioridad se ordenan por fecha (más reciente primero).

**¿Qué significa "Featured"?**
Marca el artículo como destacado. Los artículos destacados pueden aparecer en posiciones especiales en la portada dependiendo de cómo estén configuradas las secciones.

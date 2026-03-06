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
| 🏷️ | **Categories** | Administrar las categorías del sitio |
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
| **Category** | Categoría a la que pertenece el artículo. Seleccionar del menú desplegable. |
| **Author** | Nombre del autor o redactor. |
| **Date** | Fecha de publicación del artículo. |
| **Image URL** | Dirección web de la imagen principal (debe comenzar con `https://`). |
| **Featured** | Activar si el artículo debe destacarse en la portada (interruptor azul = activo). |
| **Priority** | Número que controla el orden de aparición. Mayor número = aparece primero. Usar: `0` normal, `10` importante, `20` muy importante. |

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

Las categorías organizan los artículos y aparecen en el menú de navegación del sitio.

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

3. Hacer clic en **Create Category**.

> La nueva categoría ya estará disponible para asignarla a los artículos.

### Editar o eliminar una categoría

Usar los íconos de lápiz ✏️ o basura 🗑️ en la tabla.

> ⚠️ Eliminar una categoría afecta a todos los artículos que la tienen asignada. Hacerlo solo si los artículos también fueron eliminados o reasignados.

---

## Secciones

Las secciones definen cómo se agrupa el contenido en la portada del sitio. Generalmente se configuran una sola vez y no es necesario tocarlas con frecuencia.

### Ver secciones

Hacer clic en **Sections** en el menú lateral.

### Crear o editar una sección

| Campo | Descripción |
|-------|-------------|
| **Title (EN)** | Nombre de la sección en inglés. |
| **Title (ES)** | Nombre de la sección en español. |
| **Slug** | Identificador único (se genera automáticamente). |
| **Description (EN/ES)** | Descripción opcional que aparece debajo del título de la sección. |
| **Section Layout** | Diseño visual de la sección: `hero` (grande, destacado), `grid` (cuadrícula), `list` (lista), `sidebar` (con columna lateral). |
| **Category slugs** | Categorías cuyos artículos aparecen en esta sección. Escribir el slug de la categoría y presionar Enter para agregarlo (ej. `business`). |
| **Order** | Orden de aparición en la portada. Número menor = aparece antes. |

---

## Preguntas frecuentes

**¿Cuándo aparece el artículo en el sitio?**
Inmediatamente después de guardarlo. No hay que esperar ni hacer ningún paso adicional.

**¿Puedo dejar un artículo en borrador?**
No, actualmente todos los artículos guardados se publican. Si no querés que aparezca, dejarlo sin categoría o con prioridad negativa (ej. `-1`) hasta que esté listo.

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

**¿Cómo ordeno los artículos en el sitio?**
Usando el campo **Priority**. Los artículos con número más alto aparecen primero dentro de su categoría. Artículos con la misma prioridad se ordenan por fecha (más reciente primero).

**¿Qué significa "Featured"?**
Marca el artículo como destacado. Los artículos destacados pueden aparecer en posiciones especiales en la portada dependiendo de cómo estén configuradas las secciones.

# Crear Nuevos Posts

Este documento explica cómo crear nuevos posts para la sección de Actualidad usando archivos Markdown.

## Estructura de Archivos

Los posts se almacenan en la carpeta `content/posts/` como archivos Markdown (`.md`).

## Formato de un Post

Cada archivo Markdown debe tener:

1. **Frontmatter** (metadatos en formato YAML al inicio del archivo)
2. **Contenido** (el cuerpo del post en Markdown)

### Ejemplo de Estructura

```markdown
---
title: "Título del Post"
date: "15 de Enero, 2025"
category: "Evento"
description: "Descripción corta que aparece en las tarjetas de los posts."
image: "/ruta-a-imagen.jpg"
slug: "titulo-del-post"
---

Contenido del post en Markdown.

Puedes usar **negrita**, *cursiva*, y más formato Markdown.

## Subtítulos

- Listas
- Con viñetas

1. O listas
2. Numeradas
```

## Campos del Frontmatter

| Campo | Requerido | Descripción | Ejemplo |
|-------|-----------|-------------|---------|
| `title` | Sí | Título del post | `"Jornada de Capacitación Laboral"` |
| `date` | Sí | Fecha en formato español | `"15 de Marzo, 2024"` |
| `category` | No | Categoría del post | `"Evento"`, `"Noticia"`, `"Celebración"` |
| `description` | Sí | Descripción corta para tarjetas | `"Taller práctico de habilidades..."` |
| `image` | Sí | Ruta a la imagen desde `/public` | `"/job-training-workshop.jpg"` |
| `slug` | Sí | URL amigable (sin espacios, sin acentos) | `"jornada-de-capacitacion"` |

## Formato de Fecha

La fecha debe estar en formato español:
- `"15 de Marzo, 2024"`
- `"1 de Mayo, 2024"`
- `"10 de Diciembre, 2024"`

## Generar el Slug

El slug debe ser:
- En minúsculas
- Sin espacios (usar guiones)
- Sin acentos ni caracteres especiales
- Ejemplo: `"jornada-de-capacitacion-laboral"`

## Formato Markdown Soportado

Puedes usar:

- **Negrita**: `**texto**`
- *Cursiva*: `*texto*`
- Enlaces: `[texto](url)`
- Listas con viñetas: `- item`
- Listas numeradas: `1. item`
- Encabezados: `## Subtítulo`
- Citas: `> cita`
- Código: `` `código` ``

## Pasos para Crear un Nuevo Post

1. **Crear el archivo**: Crea un nuevo archivo `.md` en `content/posts/`
   - Nombre sugerido: usar el slug como nombre del archivo
   - Ejemplo: `nuevo-evento-2025.md`

2. **Agregar el frontmatter**: Copia la estructura del frontmatter y completa los campos

3. **Escribir el contenido**: Escribe el contenido del post en Markdown

4. **Agregar la imagen**: Asegúrate de que la imagen esté en la carpeta `public/` y referencia su ruta en el campo `image`

5. **Verificar**: El post aparecerá automáticamente en la página de Actualidad

## Ejemplo Completo

```markdown
---
title: "Nuevo Taller de Habilidades Sociales"
date: "20 de Enero, 2025"
category: "Evento"
description: "Taller práctico para desarrollar habilidades sociales y comunicación efectiva."
image: "/workshop-social-skills.jpg"
slug: "nuevo-taller-habilidades-sociales"
---

El pasado 20 de enero de 2025, AVEPANE organizó un nuevo taller de habilidades sociales...

## Objetivos del Taller

Los objetivos principales fueron:

- Desarrollar habilidades de comunicación
- Mejorar la interacción social
- Fomentar el trabajo en equipo

## Resultados

Los participantes expresaron su satisfacción con la actividad...
```

## Notas Importantes

- Los posts se ordenan automáticamente por fecha (más recientes primero)
- El contenido Markdown se renderiza automáticamente con formato
- Las imágenes deben estar optimizadas para web
- El slug debe ser único (no duplicar slugs existentes)

## SEO y Accesibilidad

El sistema incluye automáticamente:

- ✅ Metadatos SEO (Open Graph, Twitter Cards)
- ✅ Datos estructurados (Schema.org)
- ✅ Controles de texto a voz
- ✅ Navegación con breadcrumbs
- ✅ Contenido semántico accesible


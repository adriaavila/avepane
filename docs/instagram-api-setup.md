# Instagram Feed Setup

La sección de Instagram en `/actualidad` ya no depende de credenciales de la Instagram Graph API.

## Cómo funciona ahora

- El sitio consulta server-side el perfil público de `@avepane`.
- La ruta interna `/api/instagram` sigue devolviendo el mismo contrato:

```json
{
  "posts": [],
  "message": "Las publicaciones de Instagram no están disponibles en este momento."
}
```

- Cuando Instagram responde correctamente, la API normaliza hasta 12 publicaciones al tipo `InstagramPost`.
- Cuando Instagram falla o cambia el formato del perfil público, la página mantiene la sección visible y muestra un estado vacío con enlace al perfil.
- Las miniaturas y previews se sirven a través de una ruta interna del sitio para evitar bloqueos del CDN de Instagram en el navegador.

## Configuración

No hace falta configurar `INSTAGRAM_ACCESS_TOKEN` ni `INSTAGRAM_USER_ID`.

Si esas variables existen en el entorno, el feed actual las ignora.

## Fuente de datos

La implementación usa este endpoint público no oficial:

```txt
https://www.instagram.com/api/v1/users/web_profile_info/?username=avepane
```

Con headers de navegador y revalidación cada hora.

## Riesgos y limitaciones

- Este endpoint no es parte de una API pública estable de Meta.
- Instagram puede cambiar la respuesta, limitar el acceso o bloquear la consulta sin aviso.
- Si la cuenta deja de ser pública, el feed dejará de mostrar publicaciones.

## Verificación manual

1. Abrir `/api/instagram` y confirmar que devuelve publicaciones reales de `@avepane`.
2. Abrir `/actualidad` y revisar que la grilla de Instagram renderiza imágenes, reels y carruseles.
3. Confirmar que el botón y los enlaces llevan al perfil público de AVEPANE.

## Troubleshooting

### La sección aparece vacía

- Verifica si `/api/instagram` devuelve `posts: []`.
- Revisa logs del servidor para errores de Instagram o cambios en el shape de la respuesta.
- Confirma que `@avepane` sigue siendo público y accesible desde navegador.

### El endpoint responde pero no hay cards visibles

- Revisa que cada publicación tenga `id`, `shortcode`, `display_url` y `taken_at_timestamp`.
- Verifica que el shape de `edge_owner_to_timeline_media.edges` no haya cambiado.

# Accesibilidad Web – Lineamientos para el Proyecto AVEPANE (WCAG 2.2 AA)

Este documento define las prácticas obligatorias de accesibilidad que deben implementarse en la web de AVEPANE.  
Cumple con los estándares **WCAG 2.2 AA** y sirve como guía para diseño, desarrollo y QA.

---

## 🔵 1. Perceptibilidad

### 1.1. Texto alternativo para imágenes
- Todas las imágenes deben incluir atributos `alt` descriptivos.
- Imágenes decorativas → `alt=""` o `role="presentation"`.
- En galerías y carruseles: `alt` o `aria-label` adecuado por imagen.

### 1.2. Contraste adecuado
- Ratio mínimo:
  - Texto normal: **4.5:1**
  - Texto grande (18px+): **3:1**
- Evitar texto sobre fondos complejos sin overlay.
- Usar la paleta accesible:

Naranja institucional: #F37B24
Verde gris oscuro: #6A7B7D
Verde gris claro: #A7B2B3
Negro profundo: #000000
Gris carbón (texto): #2C2C2C
Blanco: #FFFFFF

yaml
Copiar código

### 1.3. Tipografía accesible
- Fuente principal: **Atkinson Hyperlegible**
- Secundaria: **Nunito Sans**
- Tamaño base mínimo: **18px**
- Interlineado: **1.5–1.75**
- Nunca incrustar texto dentro de imágenes.

### 1.4. Adaptabilidad y responsividad
- El contenido debe mantenerse funcional al 200–400% de zoom.
- Nada debe quedar cortado o superpuesto en pantallas pequeñas.

---

## 🔵 2. Operabilidad

### 2.1. Navegación 100% con teclado
Todo debe funcionar usando:
- `Tab`, `Shift + Tab`
- `Enter`, `Space`
- Flechas para carruseles/galerías

### 2.2. Focus visible
- Mantener un **outline** claro, contrastado y consistente.
- Prohibido eliminar el focus sin reemplazo accesible.

### 2.3. Evitar dependencias de mouse/hover
- Menús, dropdowns y tooltips deben ser activables desde teclado.
- No depender de hover para mostrar información crítica.

### 2.4. Control del tiempo
- Evitar expiraciones automáticas sin opción de extender o pausar.

---

## 🔵 3. Comprensibilidad

### 3.1. Lenguaje claro
- Oraciones cortas.
- Evitar tecnicismos.
- Contenido pensado para personas con discapacidad cognitiva.

### 3.2. Navegación consistente
- Menú principal igual en todas las páginas.
- Componentes repetidos deben comportarse de la misma manera.

### 3.3. Formularios accesibles
- Uso correcto de `<label for="">`.
- Mensajes de error descriptivos (no sólo color).
- Instrucciones claras antes de rellenar.

### 3.4. Prevención de errores
- Confirmaciones antes de enviar formularios.
- Sugerencias para corregir errores de input.

---

## 🔵 4. Robustez

### 4.1. Semántica HTML correcta
- Usar etiquetas nativas:  
  `header`, `nav`, `main`, `section`, `footer`.
- Evitar `<div>` como botón. Usar `<button>`.
- Enlaces reales: `<a href="">`.

### 4.2. ARIA correctamente usada
- Añadir atributos ARIA solo cuando HTML no sea suficiente.
- Evitar roles redundantes.

### 4.3. Compatibilidad con lectores de pantalla
- Orden lógico del DOM.
- Roles correctos (`navigation`, `banner`, `main`, `contentinfo`).
- Enlaces descriptivos (no usar “clic aquí”).

---

## 🔵 5. Accesibilidad avanzada

### 5.1. Control de tamaño de texto
- Botón “Aumentar texto” → ajusta variables CSS.
- Guardar preferencia en `localStorage`.

### 5.2. Modo de alto contraste (opcional)
- Toggle para aumentar contraste global.

### 5.3. Videos accesibles
- Subtítulos obligatorios.
- Transcripción recomendada.
- Player accesible desde teclado.

### 5.4. Carrusel accesible
- Controles visibles.
- Navegación con teclado.
- Descripciones compatibles con lectores de pantalla.

---

## 🔵 6. Inclusión para discapacidad cognitiva

- Layout simple y jerárquico.
- Secciones cortas.
- Iconos + texto.
- Evitar animaciones fuertes o distracciones.
- Botones grandes y claros.

---

## 🔵 7. Accesibilidad en Aliados Estratégicos

- Logos con `alt` significativo.
- Área de clic amplia.
- Contrastados y con espacio suficiente entre sí.

---

## 🔵 8. Pruebas de accesibilidad requeridas

### Herramientas automáticas
- Lighthouse
- Axe DevTools
- WAVE

### Lectores de pantalla
- VoiceOver (macOS)
- NVDA (Windows)

### Pruebas manuales
- Navegar todo con teclado.
- Probar a 200–400% de zoom.
- Probar con lector de pantalla.
- Revisar contraste de cada componente.

---

## 🟩 Resultado esperado

Un sitio:
- Inclusivo
- Fácil de usar
- Compatible con discapacidades: visual, auditiva, cognitiva, intelectual y motora
- Cumpliendo estándares WCAG 2.2 AA

---

## 🏁 Nota final
Este documento debe consultarse al crear componentes, diseñar UI y realizar pruebas de QA.  
Cualquier componente nuevo debe cumplir todo lo descrito aquí.
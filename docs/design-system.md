# Design System – AVEPANE Web

Este documento define el sistema de diseño oficial para el proyecto web de AVEPANE. Incluye lineamientos visuales, tipografía, color, espaciados, componentes y estilo general.

---

## 🎨 Paleta de Colores

Basada en el logo institucional.

* **Naranja institucional:** #F37B24

* **Verde gris oscuro:** #6A7B7D

* **Verde gris claro:** #A7B2B3

* **Negro profundo:** #000000

* **Gris carbón (texto):** #2C2C2C

* **Blanco:** #FFFFFF

**Reglas:**

* Mantener contraste AA/AAA en texto y botones.

* Usar naranja como color primario para acciones.

* Usar verde gris como color secundario.

---

## 🔤 Tipografía

**Fuente principal:** Atkinson Hyperlegible (alta accesibilidad).

**Fuente secundaria:** Nunito Sans (titulares, elementos UI).

**Jerarquías:**

* **H1:** 42–48px, bold

* **H2:** 32–36px, semibold

* **H3:** 24–28px, semibold

* **Body:** mínimo 18px, regular

**Reglas:**

* Interlineado entre 1.5 y 1.75.

* Títulos cortos y descriptivos.

* No usar texto dentro de imágenes.

---

## 📐 Espaciados

Sistema basado en múltiplos de 8px.

* XS: 4px

* S: 8px

* M: 16px

* L: 24px

* XL: 32px

* XXL: 48px

Reglas:

* Bloques deben tener padding mínimo de 24px.

* Secciones deben respirar (márgenes grandes).

---

## 🧩 Componentes Base (shadcn + Tailwind)

### Botones

* **Primario:** fondo naranja, texto blanco, borde redondeado.

* **Secundario:** borde gris, fondo blanco.

* Estados obligatorios: hover, focus-visible, disabled.

### Cards

* Fondos claros, sombras suaves, bordes redondeados.

* Títulos grandes y subtítulos legibles.

### Navegación

* Header fijo accesible.

* Focus visible.

* Menú móvil tipo slide o dropdown accesible.

### Formularios

* Campos con borde visible y label descriptivo.

* Mensajes de error claros.

### Iconografía

* Simple, universal, amigable.

* Usar iconos que acompañen texto.

---

## 🖼 Estilo Visual

* Diseño limpio, amable y humanista.

* Secciones con bloques grandes y contenido fácil de escanear.

* Evitar saturación visual.

* Usar imágenes que reflejen inclusión, actividades reales y talleres.

---

## ✨ Microinteracciones

* Animaciones sutiles.

* Duración recomendada: 150–250ms.

* Evitar animaciones bruscas.

---

## 📱 Responsive Design

* Mobile-first.

* Breakpoints estándar Tailwind.

* Priorizar legibilidad en móviles.

---

## 🧭 Componentes Especiales

### 1. Selector de tamaño de texto

Usa variables CSS globales.

### 2. Modo alto contraste

Opcional, pero recomendado.

### 3. Carrusel accesible

Controles visibles, navegación por teclado.

---

## 🏁 Objetivo del Design System

Garantizar que todas las decisiones visuales del proyecto sean coherentes, accesibles y alineadas con la identidad institucional de AVEPANE.

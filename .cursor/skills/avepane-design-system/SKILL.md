---
name: avepane-design-system
description: Applies AVEPANE design system guidelines when creating or modifying components, pages, and UI elements. Ensures consistent typography, colors, spacing, accessibility, and visual style following the official design system. Use when styling components, creating new pages, modifying UI elements, or ensuring design consistency.
---

# AVEPANE Design System

Apply these guidelines consistently when working on components, pages, and UI elements.

## Typography

### Headings
- **H1**: `text-4xl md:text-5xl lg:text-6xl font-bold font-heading` (42-48px, Nunito Sans)
- **H2**: `text-3xl md:text-4xl font-semibold font-heading` (32-36px, Nunito Sans)
- **H3**: `text-2xl md:text-3xl font-semibold font-heading` (24-28px, Nunito Sans)
- **H4-H6**: Use `font-heading` with appropriate sizes

### Body Text
- **Body**: Minimum `text-lg` (18px), use `font-sans` (Atkinson Hyperlegible)
- **Line heights**: `leading-relaxed` (1.6) for body, `leading-tight` (1.3) for headings
- **Paragraph spacing**: Use `space-y-6` or `space-y-4` between paragraphs

### Examples
```tsx
// Hero section H1
<h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
  Title
</h1>

// Section H2
<h2 className="font-heading text-3xl font-semibold md:text-4xl">
  Section Title
</h2>

// Body text
<p className="text-lg leading-relaxed">
  Content text
</p>
```

## Colors

Always use Tailwind semantic classes from CSS variables. Never hardcode hex colors.

### Primary Colors
- **Primary (Orange)**: `bg-primary text-primary-foreground` (#F37B24)
- **Secondary (Light Grayish Green)**: `bg-secondary text-secondary-foreground` (#A7B2B3)
- **Accent (Dark Grayish Green)**: `bg-accent text-accent-foreground` (#6A7B7D)

### Usage
- Primary buttons: `variant="default"` (uses primary automatically)
- Secondary buttons: `variant="outline"` or `variant="secondary"`
- Backgrounds: `bg-background`, `bg-card`, `bg-secondary/30` for subtle backgrounds
- Text: `text-foreground`, `text-muted-foreground` for secondary text

### Contrast Rules
- Maintain AA/AAA contrast ratios
- Test text on colored backgrounds
- Use `text-primary-foreground` on primary backgrounds
- Use `text-accent-foreground` on accent backgrounds

## Spacing

Use 8px-based spacing scale:

- **XS (4px)**: `p-1`, `m-1`, `gap-1`
- **S (8px)**: `p-2`, `m-2`, `gap-2`
- **M (16px)**: `p-4`, `m-4`, `gap-4`
- **L (24px)**: `p-6`, `m-6`, `gap-6` (minimum block padding)
- **XL (32px)**: `p-8`, `m-8`, `gap-8`
- **XXL (48px)**: `p-12`, `m-12`, `gap-12`

### Rules
- Minimum padding for content blocks: `p-6` (24px)
- Section spacing: Use `mb-12`, `mb-16`, or `py-16 md:py-20` for breathing room
- Card padding: `py-6` minimum, `px-6` for horizontal

## Components

### Buttons

Use shadcn `Button` component from `@/components/ui/button`:

```tsx
import { Button } from "@/components/ui/button"

// Primary (orange)
<Button variant="default" size="lg">
  Action
</Button>

// Secondary (outline)
<Button variant="outline" size="lg">
  Secondary Action
</Button>

// With icon
<Button variant="default" size="lg">
  Action
  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
</Button>
```

**Requirements:**
- Always include hover states (handled by component)
- Focus-visible styles included automatically
- Disabled state: `disabled` prop
- Use `asChild` with `Link` for navigation buttons

### Cards

Use shadcn `Card` component from `@/components/ui/card`:

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

<Card className="rounded-xl shadow-sm">
  <CardHeader>
    <CardTitle className="text-2xl">Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

**Requirements:**
- Rounded corners: `rounded-xl` (default)
- Soft shadows: `shadow-sm` (default)
- Padding: Minimum `py-6` (handled by component)

### Forms

Use shadcn form components:

```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

<div className="space-y-2">
  <Label htmlFor="field">Descriptive Label</Label>
  <Input id="field" className="border-visible" />
  <p className="text-sm text-destructive">Error message</p>
</div>
```

**Requirements:**
- Visible borders (default)
- Descriptive labels (not placeholder-only)
- Clear error messages in `text-destructive`
- Group related fields with `space-y-2` or `space-y-4`

## Accessibility

### Required Elements
- **Focus visible**: All interactive elements have `focus-visible` styles (handled by components)
- **Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)
- **ARIA labels**: Add `aria-label` or `aria-labelledby` for icon-only buttons
- **Skip link**: Include skip-to-main content link in layout (already in `app/layout.tsx`)

### Examples
```tsx
// Icon button with aria-label
<Button variant="icon" aria-label="Close dialog">
  <X className="h-4 w-4" />
</Button>

// Image with alt text
<img src="..." alt="Descriptive text about the image" />

// Link with aria-hidden icon
<Link href="/">
  Text
  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
</Link>
```

## Visual Style

### Design Principles
- Clean, friendly, humanistic design
- Large, scannable content blocks
- Avoid visual saturation
- Use images showing inclusion and real activities

### Layout Patterns
```tsx
// Hero section pattern
<section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>

// Content section pattern
<section className="py-12 md:py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

## Responsive Design

### Mobile-First Approach
- Start with mobile styles, then add breakpoints
- Use Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Prioritize readability on mobile

### Common Patterns
```tsx
// Responsive text
className="text-4xl md:text-5xl lg:text-6xl"

// Responsive spacing
className="py-12 md:py-16 lg:py-20"

// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Responsive flex
className="flex flex-col md:flex-row gap-4"
```

## Microinteractions

### Animation Guidelines
- Duration: 150-250ms
- Use `transition-all` or `transition-colors`
- Avoid abrupt animations

### Examples
```tsx
// Button transitions (handled by component)
className="transition-all"

// Hover effects
className="hover:bg-accent transition-colors"

// Focus transitions
className="focus-visible:ring-2 focus-visible:ring-primary transition-all"
```

## Quick Reference

### Typography Classes
- H1: `font-heading text-4xl md:text-5xl lg:text-6xl font-bold`
- H2: `font-heading text-3xl md:text-4xl font-semibold`
- H3: `font-heading text-2xl md:text-3xl font-semibold`
- Body: `text-lg leading-relaxed`

### Color Classes
- Primary: `bg-primary text-primary-foreground`
- Secondary: `bg-secondary text-secondary-foreground`
- Accent: `bg-accent text-accent-foreground`

### Spacing Classes
- Small: `p-2`, `m-2`, `gap-2`
- Medium: `p-4`, `m-4`, `gap-4`
- Large: `p-6`, `m-6`, `gap-6` (minimum block padding)
- Extra Large: `p-8`, `m-8`, `gap-8`
- XXL: `p-12`, `m-12`, `gap-12`

## Additional Resources

For complete design system documentation, see [reference.md](reference.md) or `docs/design-system.md`.

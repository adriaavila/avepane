# AVEPANE Design System Reference

This file provides a reference to the complete AVEPANE design system documentation.

## Official Documentation

The full design system specification is located at:
- **File**: `docs/design-system.md`
- **Path**: `/Users/ama/projects/avepane/docs/design-system.md`

## Key Design System Files

- **Design System Spec**: `docs/design-system.md` - Complete design system documentation
- **Global Styles**: `app/globals.css` - CSS variables and base styles
- **Component Library**: `components/ui/` - shadcn/ui components
- **Accessibility Guidelines**: `docs/accessibility-guidelines.md` - Accessibility standards

## Design Tokens

### Colors (from `app/globals.css`)
- Primary Orange: `#F37B24` → `--primary` → `bg-primary`
- Dark Grayish Green: `#6A7B7D` → `--accent` → `bg-accent`
- Light Grayish Green: `#A7B2B3` → `--secondary` → `bg-secondary`
- Charcoal Text: `#2C2C2C` → `--foreground` → `text-foreground`

### Typography
- Primary Font: Atkinson Hyperlegible (`--font-sans`)
- Heading Font: Nunito Sans (`--font-heading`)
- Base Font Size: 18px (defined in `body` styles)

### Spacing Scale
- Based on 8px multiples
- Defined in Tailwind default scale
- Minimum block padding: 24px (`p-6`)

## Component Examples

See existing implementations:
- Buttons: `components/ui/button.tsx`
- Cards: `components/ui/card.tsx`
- Forms: `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/textarea.tsx`
- Pages: `app/page.tsx`, `app/programas/page.tsx`, `app/contacto/page.tsx`

## When to Reference This

- Need detailed color specifications
- Need to understand design rationale
- Need to see complete component guidelines
- Need accessibility requirements details
- Need visual style guidelines

For day-to-day implementation, use the guidelines in `SKILL.md`. Reference this file when you need deeper context or clarification.

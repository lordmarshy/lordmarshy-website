# Typography Guide

This document defines the text styling strategy for the site. Typography is baked into semantic HTML elements so that using `<h1>`, `<h2>`, `<h3>`, and `<p>` automatically applies the correct font, size, weight, and responsive behavior—no Tailwind text classes required.

---

## Principles for Text Scaling

### Modular scale

All text sizes derive from a single scale. Use as few font sizes as possible—even interaction-heavy pages typically need only 4–6. New sizes should be chosen from this scale, not arbitrary values.

| Size | Use | Element |
|------|-----|---------|
| 0.75rem (12px) | UI labels, buttons, badges, overlays | Micro |
| 0.875rem (14px) | Captions, secondary info, metadata | Small |
| 1rem (16px) | Body text, controls, form fields | Body |
| 1.25rem (20px) | Subsection heading (mobile) | H3 |
| 1.5rem (24px) | Subsection heading (desktop), section heading (mobile) | H3, H2 |
| 1.875rem (30px) | Section heading (desktop) | H2 |
| 2.25rem (36px) | Page title (mobile) | H1 |
| 3.75rem (60px) | Page title (desktop) | H1 |
| 6rem (96px) | Display / hero | Display |

### Few font sizes

Use as few font sizes as possible. A typical page needs:

1. **Header** — Main title (h1).
2. **Subheader** — Section headings (h2, h3).
3. **Default** — Body text, controls, form fields, buttons.
4. **Secondary** — Supporting info, captions (~2px smaller than default).
5. **Tertiary / wildcard** — Labels, metadata, or UI elements where uppercase or visual weight needs a smaller size for balance.

### Hierarchy

- **Display / hero** — Largest; used sparingly for landing moments.
- **h1** — Page title; one per page.
- **h2** — Section heading; clear step down from h1.
- **h3** — Subsection; always smaller than h2.
- **Body** — Default reading size; stable across breakpoints.
- **Small / micro** — Supporting text; never smaller than 12px.

Each level should be visually distinct. Avoid skipping levels (e.g. h1 → h3).

### Units

| Unit | Use |
|------|-----|
| **rem** | Default for all text; scales with user font-size preferences (accessibility). |
| **em** | When size must be relative to parent (e.g. nested components). |
| **svh / vh** | Hero/display text that should scale with viewport (e.g. `min(5svh, 2em)`). |
| **px** | Only for fixed UI elements (overlays, controls) where exact pixels matter. |

### Line height

| Context | Line height |
|---------|-------------|
| Display / large headings | 1.1 – 1.2 |
| Body text | 1.5 – 1.6 |
| Small / caption | 1.2 – 1.4 |

### Responsive sizing

- **Hero / display / h1** — Scale down on mobile; scale up on desktop.
- **h2 / h3** — Optional step up on desktop.
- **Body / small / micro** — Same size on all breakpoints.

One breakpoint (768px) is used for typography. Simpler than multiple steps.

---

## Semantic Elements

### Display — Hero

- **Mobile**: 2.25rem (36px)
- **Desktop** (768px+): 6rem (96px)
- **Font**: Google Sans Flex, weight 1000
- **Line height**: 1.1

Use sparingly for hero moments (e.g. landing page "Guy's website", "Contact"). Use `h1` or `h2` with a `.display` class, or a dedicated display component.

---

### H1 — Page title

- **Mobile**: 2.25rem (36px)
- **Desktop** (768px+): 3.75rem (60px)
- **Font**: Google Sans Flex, weight 1000
- **Line height**: 1.1

Use for the main heading of each page.

---

### H2 — Section heading

- **Mobile**: 1.5rem (24px)
- **Desktop** (768px+): 1.875rem (30px)
- **Font**: Google Sans Flex, weight 300 (skinny)
- **Line height**: 1.2

Use for major sections (e.g. "Introduction", "Projects").

---

### H3 — Subsection heading

- **Mobile**: 1.25rem (20px)
- **Desktop** (768px+): 1.5rem (24px)
- **Font**: Google Sans Flex, weight 600
- **Line height**: 1.2

Use for subsections within a section (e.g. project titles like "Mood Tracker").

---

### Body / Paragraph (`<p>`)

- **All breakpoints**: 1rem (16px)
- **Line height**: 1.6

Use for body copy. No responsive sizing—16px is readable on all devices.

---

### Small / Caption

- **All breakpoints**: 0.875rem (14px)
- Use `text-sm` or a `.caption` class for secondary info, labels, metadata.

---

### Micro / UI

- **All breakpoints**: 0.75rem (12px)
- Use `text-xs` for buttons, badges, overlays.

---

## Usage

**Do:** Use semantic elements. Typography is already applied.

```jsx
<h1 className="pt-10">Guy - Junior Full-Stack Dev</h1>
<h2 className="pt-5 text-left">Introduction</h2>
<p>I'm a Full-Stack Developer based in London...</p>
```

**Don't:** Add font-size or font-family classes to these elements—they're redundant.

```jsx
// Unnecessary
<h1 className="text-6xl google-sans-flex-bold-round">...</h1>
```

---

## When to Add Classes

Add Tailwind classes only for:

| Purpose | Examples |
|---------|----------|
| **Layout & spacing** | `pt-10`, `mb-4`, `text-left`, `text-center` |
| **Color overrides** | `text-black`, `text-white/90` |
| **One-off exceptions** | Override size in a specific context (e.g. sidebar h2 with `text-xl`) |

---

## Breakpoints

Responsive typography uses `768px` (Tailwind `md`) as the desktop breakpoint.

| Breakpoint | Min width |
|------------|-----------|
| Mobile (default) | — |
| Desktop | 768px |


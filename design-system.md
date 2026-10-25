# Builder's Console design system

The foundation was agreed for the new component library. It draws on the existing Builder's Console: dark green-black surfaces, neon green and cyan accents, console labels, and restrained dashed decoration. Existing `*-old` components and their styles remain available while the new library is developed.

## Color

The system is dark-only for now. There is no theme-switching mechanism; a future light theme can redefine semantic roles without splitting components by theme. Elevation uses progressively lighter surfaces.

| Semantic role | Variable | Value | Use |
| --- | --- | --- | --- |
| Canvas | `--color-ds-canvas` | `#06110F` | Page background |
| Surface | `--color-ds-surface` | `#10231C` | Cards and sections |
| Raised surface | `--color-ds-raised` | `#19342A` | Menus, dialogs and nested controls |
| Foreground | `--color-ds-fg` | `#F0F8F3` | Main text |
| Muted foreground | `--color-ds-fg-muted` | `#B1C9BB` | Supporting text |
| Decorative border | `--color-ds-border` | `#348256` | Decorative borders and dividers |
| Control border | `--color-ds-control-border` | `#3C9061` | Meaningful input and control boundaries |
| Primary accent | `--color-ds-accent` | `#00F17D` | Primary actions and selected states |
| Accent foreground | `--color-ds-accent-fg` | `#06110F` | Text and icons on the accent fill |
| Secondary accent | `--color-ds-secondary` | `#00C6F2` | Links and informational highlights |
| Success | `--color-ds-success` | `#00F22B` | Success feedback |
| Warning | `--color-ds-warning` | `#F2C14E` | Warning feedback |
| Error | `--color-ds-error` | `#FF7A80` | Error feedback |
| Focus | `--color-ds-focus` | `#00F17D` | Keyboard focus outline |

Primitive colors hold raw values in `@theme`; components use semantic color roles. The names are prefixed `ds-` to coexist with the existing theme. Additional unused primitives preserve the palette explored during design. Proposed hover and active semantic variables are listed in the workbench but have not yet been assigned values or contrast-checked.

Use dashed borders for decorative cards and sections, and solid borders for controls. The decorative border is not suitable as the sole meaningful boundary on the raised surface.

### Contrast

The workbench measures current CSS variables in the browser. At the agreed values, measured ratios are:

| Pair | Canvas | Surface | Raised surface |
| --- | ---: | ---: | ---: |
| Foreground | 17.74:1 | 15.19:1 | 12.41:1 |
| Muted foreground | 10.91:1 | 9.34:1 | 7.63:1 |
| Accent | 12.68:1 | 10.85:1 | 8.86:1 |
| Secondary | 9.46:1 | 8.10:1 | 6.62:1 |
| Success | 12.55:1 | 10.74:1 | 8.77:1 |
| Warning | 11.43:1 | 9.78:1 | 7.99:1 |
| Error | 7.62:1 | 6.53:1 | 5.33:1 |
| Control border | 4.89:1 | 4.19:1 | 3.42:1 |
| Focus | 12.68:1 | 10.85:1 | 8.86:1 |

Accent foreground on accent is 12.68:1. Decorative border on canvas, surface and raised surface is 4.09:1, 3.50:1 and 2.86:1 respectively. Ratios shown are rounded for display; pass/fail uses unrounded values. Recheck pairs when colors, surfaces or interaction states change.

## Typography

Montserrat is the primary face for headings, body and controls. IBM Plex Mono is for console labels, status, metadata and code. Font variables are `--font-ds-sans` and `--font-ds-mono`, with generic fallbacks. The global stylesheet loads the fonts from Google Fonts so new components can use them outside the workbench.

| Utility | Face / weight | Size / line height at a 16px root | Use |
| --- | --- | --- | --- |
| `type-display` | Montserrat 700 | 48 / 56px | Hero or introduction |
| `type-h1` | Montserrat 700 | 36 / 44px | Primary page heading |
| `type-h2` | Montserrat 600 | 28 / 36px | Major section |
| `type-h3` | Montserrat 600 | 22 / 28px | Subsection or card |
| `type-body` | Montserrat 400 | 16 / 24px | Main copy |
| `type-small` | Montserrat 400 | 14 / 20px | Supporting copy |
| `type-label` | IBM Plex Mono 500 | 12 / 16px | Console labels and metadata |

The scale uses `@utility` classes in the `type-*` namespace, not `--text-*` theme keys, so `cn()` can compose them with text colors. Existing unlayered global element rules may override layered utilities; address competing rules carefully without changing existing page appearance.

## Spacing, shape and interaction

- Use an 8px spatial grid; 4px half-steps may be used anywhere. Type size, line height and 1px borders are outside the grid. Tailwind's default `--spacing` is `0.25rem`; `p-2` is 8px and `h-11` is 44px only at a 16px root font size.
- `--radius-ds-sm` is 4px for controls; `--radius-ds-md` is 8px for cards and overlays.
- Buttons and icon buttons have at least a 44 × 44px hit area. Checkbox, radio and switch glyphs may be smaller inside a 44px target. Inline prose links are exempt.
- Hover uses a subtle surface or color change; active uses a stronger change. Disabled controls are visibly muted. Specific hover and active tokens remain to be defined and tested.
- Use a visible `:focus-visible` outline with at least 3:1 contrast against the adjacent surface; do not clip it. Outlines survive Windows high contrast.
- Target at least 7:1 for agreed body-text pairs, 4.5:1 for secondary text, and 3:1 for input boundaries and meaningful graphics. Disabled and placeholder text may fall below AA under the agreed project rules.

## Rules and locations

- Component class strings use semantic color tokens, not raw hex or color functions, nor the excluded default palette utilities. CVA is for components with more than one variant.
- Namespaced primitives and semantic roles, radii and `type-*` utilities: `src/styles/design-system.css`, imported by `src/app/globals.css`.
- Development-only workbench: `src/app/design-system-workbench/page.tsx` at `/design-system-workbench`; it is not linked from the app shell and calls `notFound()` in production.
- Existing helper: `src/lib/utils.ts` (`cn`). Existing legacy components: `src/components/ui/*-old.tsx`; the new component library will use `src/components/ui/`.
- Existing global CSS: `src/index.css` and `src/App.css`, imported by `src/app/globals.css`.

The initial design rules were kept. The compatibility approach was adjusted: existing UI components were renamed with an `-old` suffix and their imports updated before the new library is built. The system starts dark-only, so no dark-mode switching mechanism is selected. A separate accessible control-border role was added alongside the decorative border.

## Component inventory

New components live in `src/components/ui/`. Existing `button-old`, `checkbox-old`, `dialog-old`, `dropdown-menu-old`, `input-old`, `select-old` and `table-old` files continue to serve the existing application.

- Actions: Button, IconButton, Toggle, ToggleGroup.
- Overlays: Dialog, AlertDialog, Sheet, DropdownMenu, ContextMenu, Popover, Tooltip, HoverCard.
- Navigation: Tabs, Accordion, Collapsible, Breadcrumb, Pagination, NavigationMenu, Menubar.
- Forms: Field, Label, Input, Textarea, Select, Checkbox, RadioGroup, Switch, Slider.
- Feedback: Alert, Toast, Progress, Spinner, Skeleton, EmptyState.
- Display: Badge, Card, Avatar, Separator, Table, ScrollArea.

Combobox, Calendar and DatePicker were omitted at the user's request. The workbench examples and usage notes live in `src/app/design-system-workbench/actions.tsx` and `src/app/design-system-workbench/library.tsx`.

The legacy global button selector excludes controls marked `data-ds-control`, so it does not override the new Radix controls. The new `.ds-title` and `.ds-copy` rules are unlayered scoped typography rules that keep legacy unlayered heading and paragraph styles from winning over the new utilities. No `!important` font-family override is used.

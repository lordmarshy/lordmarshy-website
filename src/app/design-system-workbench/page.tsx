'use client';

import { notFound } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const colors = [
  ["Canvas", "--color-ds-canvas"], ["Surface", "--color-ds-surface"],
  ["Raised surface", "--color-ds-raised"], ["Foreground", "--color-ds-fg"],
  ["Muted foreground", "--color-ds-fg-muted"], ["Border", "--color-ds-border"],
  ["Control border", "--color-ds-control-border"],
  ["Accent", "--color-ds-accent"], ["Accent foreground", "--color-ds-accent-fg"],
  ["Secondary", "--color-ds-secondary"], ["Success", "--color-ds-success"],
  ["Warning", "--color-ds-warning"], ["Error", "--color-ds-error"],
  ["Focus", "--color-ds-focus"],
] as const;

const pairs = [
  ["Body on canvas", "--color-ds-fg", "--color-ds-canvas", "text"],
  ["Body on surface", "--color-ds-fg", "--color-ds-surface", "text"],
  ["Body on raised surface", "--color-ds-fg", "--color-ds-raised", "text"],
  ["Muted on canvas", "--color-ds-fg-muted", "--color-ds-canvas", "text"],
  ["Muted on surface", "--color-ds-fg-muted", "--color-ds-surface", "text"],
  ["Muted on raised surface", "--color-ds-fg-muted", "--color-ds-raised", "text"],
  ["Accent foreground on accent", "--color-ds-accent-fg", "--color-ds-accent", "text"],
  ["Secondary on canvas", "--color-ds-secondary", "--color-ds-canvas", "text"],
  ["Secondary on surface", "--color-ds-secondary", "--color-ds-surface", "text"],
  ["Secondary on raised surface", "--color-ds-secondary", "--color-ds-raised", "text"],
  ["Accent on canvas", "--color-ds-accent", "--color-ds-canvas", "text"],
  ["Accent on surface", "--color-ds-accent", "--color-ds-surface", "text"],
  ["Accent on raised surface", "--color-ds-accent", "--color-ds-raised", "text"],
  ...(["success", "warning", "error"] as const).flatMap((role) =>
    (["canvas", "surface", "raised"] as const).map((surface) =>
      [`${role} on ${surface}`, `--color-ds-${role}`, `--color-ds-${surface}`, "text"] as const)),
  ["Border on canvas", "--color-ds-border", "--color-ds-canvas", "ui"],
  ["Border on surface", "--color-ds-border", "--color-ds-surface", "ui"],
  ["Decorative border on raised surface", "--color-ds-border", "--color-ds-raised", "ui"],
  ["Control border on canvas", "--color-ds-control-border", "--color-ds-canvas", "ui"],
  ["Control border on surface", "--color-ds-control-border", "--color-ds-surface", "ui"],
  ["Control border on raised surface", "--color-ds-control-border", "--color-ds-raised", "ui"],
  ["Focus on canvas", "--color-ds-focus", "--color-ds-canvas", "ui"],
  ["Focus on surface", "--color-ds-focus", "--color-ds-surface", "ui"],
  ["Focus on raised surface", "--color-ds-focus", "--color-ds-raised", "ui"],
] as const;

const specimens = [
  ["Display · Montserrat 700 · 48 / 56", "type-display", "Hero or page introduction", "Build something useful."],
  ["H1 · Montserrat 700 · 36 / 44", "type-h1", "Primary page heading", "The Builder’s Console"],
  ["H2 · Montserrat 600 · 28 / 36", "type-h2", "Major section heading", "Things I’ve built"],
  ["H3 · Montserrat 600 · 22 / 28", "type-h3", "Subsection or card heading", "Project overview"],
  ["Body · Montserrat 400 · 16 / 24", "type-body", "Paragraphs and main interface copy", "Good interfaces make the useful thing clear, with enough space to read and understand it."],
  ["Small · Montserrat 400 · 14 / 20", "type-small", "Supporting copy and compact descriptions", "Details, descriptions and helper text live here."],
  ["Console label · IBM Plex Mono 500 · 12 / 16", "type-label", "Section labels, status and metadata", "PROJECT 01 // IN PROGRESS"],
] as const;

const colorRoles: Record<string, string> = {
  Canvas: "Page background", Surface: "Cards and sections", "Raised surface": "Menus, dialogs and nested controls",
  Foreground: "Primary text on dark surfaces", "Muted foreground": "Secondary text on dark surfaces",
  Border: "Decorative borders and dividers", "Control border": "Meaningful input and control boundaries",
  Accent: "Primary action fill and selection", "Accent foreground": "Text and icons on the primary fill",
  Secondary: "Links and informational highlights", Success: "Success feedback", Warning: "Warning feedback",
  Error: "Error feedback", Focus: "Keyboard focus outline",
};

const colorPrimitives: Record<string, string> = {
  Canvas: "canvas", Surface: "surface", "Raised surface": "raised", Foreground: "white",
  "Muted foreground": "muted", Border: "green", "Control border": "control-border",
  Accent: "neon-green", "Accent foreground": "canvas", Secondary: "cyan",
  Success: "electric-green", Warning: "warning", Error: "error", Focus: "neon-green",
};

const tokenReference = [
  { group: "Typography", rows: [
    ["--font-ds-sans", "Montserrat with a sans-serif fallback", "Defined"],
    ["--font-ds-mono", "IBM Plex Mono with a monospace fallback", "Defined"],
    ["type-display, type-h1, type-h2, type-h3", "Heading utilities; sizes and weights are properties of each utility", "Defined utilities"],
    ["type-body, type-small, type-label", "Body and console-label utilities", "Defined utilities"],
  ] },
  { group: "Spacing and shape", rows: [
    ["--spacing", "Tailwind spacing unit; currently the Tailwind default of 0.25rem", "Tailwind default"],
    ["--radius-ds-sm", "Small radius: 4px", "Defined"],
    ["--radius-ds-md", "Medium radius: 8px", "Defined"],
    ["44px minimum target", "Sizing rule for interactive targets, rather than a custom variable", "Agreed rule"],
  ] },
  { group: "Interactive states", rows: [
    ["--color-ds-accent-hover", "Candidate primary fill on hover", "Proposed"],
    ["--color-ds-accent-active", "Candidate primary fill when pressed", "Proposed"],
    ["--color-ds-surface-hover", "Candidate hover surface for secondary controls", "Proposed"],
    ["--color-ds-surface-active", "Candidate pressed surface for secondary controls", "Proposed"],
    ["--color-ds-focus", "Keyboard focus outline color", "Defined"],
  ] },
] as const;

function luminance(value: string, element: HTMLElement): number | null {
  const probe = document.createElement("span");
  probe.style.color = value;
  if (!probe.style.color) return null;
  element.appendChild(probe);
  const computed = getComputedStyle(probe).color;
  probe.remove();
  const match = computed.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
  if (!match || (computed.startsWith("rgba") && !computed.endsWith(", 1)"))) return null;
  const channels = match.slice(1, 4).map((channel) => {
    const c = Number(channel) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function Workbench() {
  const root = useRef<HTMLElement>(null);
  const [readings, setReadings] = useState<Record<string, string>>({});

  useEffect(() => {
    const update = () => {
      if (!root.current) return;
      const style = getComputedStyle(root.current);
      const next: Record<string, string> = {};
      for (const [, variable] of colors) next[variable] = style.getPropertyValue(variable).trim();
      for (const [label, fg, bg] of pairs) {
        const a = luminance(next[fg], root.current);
        const b = luminance(next[bg], root.current);
        next[label] = a === null || b === null ? "" : String((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05));
      }
      setReadings((previous) => JSON.stringify(previous) === JSON.stringify(next) ? previous : next);
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main ref={root} className="min-h-screen bg-ds-canvas px-4 pb-24 pt-28 text-ds-fg sm:px-8">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Montserrat:wght@400;500;600;700&display=swap" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="border border-dashed border-ds-border bg-ds-surface p-6">
          <div className="type-label text-ds-accent">DEVELOPMENT ONLY // DESIGN SYSTEM</div>
          <div role="heading" aria-level={1} className="type-h1 mt-4 text-ds-fg">Builder’s Console workbench</div>
          <div className="type-body mt-4 text-ds-fg-muted">A working proposal for colors and typography. Contrast is read from the current CSS variables and refreshed automatically.</div>
          <nav aria-label="Workbench sections" className="mt-6 flex flex-wrap gap-4 type-label">
            {[["swatches", "Color roles"], ["type", "Typography"], ["application", "Visual direction"], ["geometry", "Spacing and shape"], ["tokens", "Token reference"], ["contrast", "Contrast"]].map(([id, label]) => <a key={id} href={`#${id}`} style={{ color: "var(--color-ds-secondary)" }} className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ds-focus">{label}</a>)}
          </nav>
        </header>
        <section aria-labelledby="swatches">
          <div id="swatches" role="heading" aria-level={2} className="type-h2 mb-4">Color roles</div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map(([label, variable]) => <div key={variable} className="overflow-hidden rounded-ds-md border border-ds-border bg-ds-surface"><div aria-hidden="true" className="h-16" style={{ backgroundColor: `var(${variable})` }} /><div className="p-4"><div className="type-body">{label}</div><div className="type-small mt-2 text-ds-fg-muted">{colorRoles[label]}</div><div className="type-label mt-2 break-all text-ds-fg-muted">Semantic: {variable}</div><div className="type-label mt-1 break-all text-ds-fg-muted">Primitive: --color-ds-primitive-{colorPrimitives[label]}</div><div className="type-label mt-1 text-ds-fg-muted">{readings[variable] || "Reading…"}</div></div></div>)}
          </div>
        </section>
        <section aria-labelledby="type">
          <div id="type" role="heading" aria-level={2} className="type-h2 mb-4">Typography</div>
          <div className="flex flex-col gap-4 rounded-ds-md border border-ds-border bg-ds-surface p-6">
            {specimens.map(([label, utility, use, sample]) => <div key={utility} className="border-b border-dashed border-ds-border pb-4 last:border-b-0 last:pb-0"><div className="type-label mb-2 text-ds-accent">{label} // {utility}</div><div className="type-small mb-4 text-ds-fg-muted">{use}</div><div className={`${utility} text-ds-fg`}>{sample}</div></div>)}
          </div>
        </section>
        <section aria-labelledby="application">
          <div id="application" role="heading" aria-level={2} className="type-h2 mb-4">Visual direction</div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="border border-dashed border-ds-border bg-ds-surface p-6">
              <div className="type-label text-ds-accent">DASHED // DECORATIVE</div>
              <div className="type-h3 mt-4">Console panel</div>
              <div className="type-body mt-4 text-ds-fg-muted">Dashed borders give sections and cards their console character. They can be decorative when contrast is lower.</div>
            </div>
            <div className="rounded-ds-md border border-ds-control-border bg-ds-raised p-6">
              <div className="type-label text-ds-secondary">SOLID // INTERACTIVE</div>
              <div className="type-h3 mt-4">Raised surface</div>
              <div className="type-body mt-4 text-ds-fg-muted">Controls use a lighter solid border so their boundaries remain clear on raised surfaces.</div>
            </div>
          </div>
          <div className="mt-4 rounded-ds-md border border-ds-control-border bg-ds-surface p-6">
            <div className="type-label text-ds-accent">INTERACTION // TRY HOVER, PRESS AND TAB</div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button data-slot="button" type="button" className="type-small min-h-11 min-w-11 rounded-ds-sm bg-ds-accent px-4 font-semibold text-ds-accent-fg hover:brightness-90 active:brightness-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ds-focus disabled:cursor-not-allowed disabled:opacity-50">Primary action</button>
              <button data-slot="button" type="button" className="type-small min-h-11 min-w-11 rounded-ds-sm border border-ds-control-border bg-ds-surface px-4 text-ds-fg hover:bg-ds-raised active:bg-ds-canvas focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ds-focus">Secondary action</button>
              <button data-slot="button" type="button" disabled className="type-small min-h-11 min-w-11 rounded-ds-sm bg-ds-accent px-4 font-semibold text-ds-accent-fg disabled:cursor-not-allowed disabled:opacity-50">Disabled</button>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="type-small flex flex-col gap-2 text-ds-fg">Default input<input placeholder="Type here" className="type-body min-h-11 rounded-ds-sm border border-ds-control-border bg-ds-raised px-4 text-ds-fg placeholder:text-ds-fg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ds-focus" /></label>
              <label className="type-small flex flex-col gap-2 text-ds-fg">Error input<input aria-invalid="true" aria-describedby="example-error" defaultValue="Example" className="type-body min-h-11 rounded-ds-sm border border-ds-error bg-ds-raised px-4 text-ds-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ds-focus" /><span id="example-error" className="type-small text-ds-error">Please check this value.</span></label>
            </div>
            <div className="type-small mt-6 text-ds-fg-muted">Green marks primary actions and selection. <span className="text-ds-secondary">Cyan highlights informational details.</span> <span className="text-ds-warning">Amber signals a warning.</span> <span className="text-ds-error">Red signals an error.</span></div>
          </div>
          <div className="type-small mt-4 text-ds-fg-muted">These are workbench examples for design review; the component library will define the full behavior and states later.</div>
        </section>
        <section aria-labelledby="geometry">
          <div id="geometry" role="heading" aria-level={2} className="type-h2 mb-4">Spacing and shape</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-ds-md border border-ds-control-border bg-ds-surface p-6">
              <div className="type-label text-ds-accent">8PX GRID // 4PX HALF-STEP</div>
              {[4, 8, 16, 24, 32, 48, 64].map((size) => <div key={size} className="mt-4 flex items-center gap-4"><span className="type-label w-24 text-ds-fg-muted">p-{size / 4} · {size}px</span><span aria-hidden="true" className="block h-4 bg-ds-accent" style={{ width: `${size}px` }} /></div>)}
            </div>
            <div className="rounded-ds-md border border-ds-control-border bg-ds-surface p-6">
              <div className="type-label text-ds-accent">RADII AND TARGETS</div>
              <div className="mt-4 flex flex-wrap items-center gap-4"><div className="type-label flex h-16 w-20 items-center justify-center rounded-ds-sm border border-ds-control-border bg-ds-raised">4px</div><div className="type-label flex h-16 w-20 items-center justify-center rounded-ds-md border border-ds-control-border bg-ds-raised">8px</div><div className="type-label flex h-11 w-11 items-center justify-center border border-ds-control-border bg-ds-raised">44</div></div>
              <div className="type-small mt-4 text-ds-fg-muted">4px controls, 8px panels, and a 44 × 44px minimum hit area for buttons and control targets.</div>
            </div>
          </div>
        </section>
        <section aria-labelledby="tokens">
          <div id="tokens" role="heading" aria-level={2} className="type-h2 mb-4">Token reference</div>
          <div className="type-small mb-4 text-ds-fg-muted">Color variables and their live values are shown in Color roles. These entries cover the other foundation names. Proposed names have no value yet and may change during review.</div>
          <div className="grid gap-4 lg:grid-cols-3">{tokenReference.map(({ group, rows }) => <div key={group} className="rounded-ds-md border border-ds-control-border bg-ds-surface p-6"><div className="type-h3">{group}</div><div className="mt-4 flex flex-col gap-4">{rows.map(([name, description, status]) => <div key={name} className="border-b border-dashed border-ds-border pb-4 last:border-b-0 last:pb-0"><div className="type-label break-all text-ds-accent">{name}</div><div className="type-small mt-2 text-ds-fg">{description}</div><div className="type-label mt-2 text-ds-fg-muted">{status}</div></div>)}</div></div>)}</div>
          <div className="type-small mt-4 text-ds-fg-muted">The current interaction examples use existing colors and brightness changes. Proposed state tokens are not implemented or contrast-checked yet. Type sizes use utilities instead of text-size variables to avoid conflicts in cn().</div>
        </section>
        <section aria-labelledby="contrast">
          <div id="contrast" role="heading" aria-level={2} className="type-h2 mb-4">Contrast checks</div>
          <div className="type-small mb-4 text-ds-fg-muted">Normal text: AA ≥ 4.5:1, AAA ≥ 7:1. Meaningful UI boundaries and focus: ≥ 3:1. Ratios are not rounded before evaluation.</div>
          <div className="type-small mb-4 text-ds-fg-muted">The decorative border on raised surfaces is listed for reference only. Use the control border when the boundary communicates a control or state.</div>
          <div className="flex flex-col gap-2">{pairs.map(([label, , , kind]) => {
            const ratio = Number(readings[label]);
            const valid = !!readings[label] && Number.isFinite(ratio);
            return <div key={label} className="flex flex-wrap items-center justify-between gap-4 border border-ds-border bg-ds-surface p-4"><span className="type-small">{label}</span><span className="type-label">{valid ? `${ratio.toFixed(2)}:1` : "Unavailable"} {valid && (kind === "text" ? `· AA ${ratio >= 4.5 ? "PASS" : "FAIL"} · AAA ${ratio >= 7 ? "PASS" : "FAIL"}` : `· UI 3:1 ${ratio >= 3 ? "PASS" : "FAIL"}`)}</span></div>;
          })}</div>
        </section>
      </div>
    </main>
  );
}

export default function DesignSystemWorkbenchPage() {
  if (process.env.NODE_ENV === "production") notFound();
  return <Workbench />;
}

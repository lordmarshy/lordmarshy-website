'use client';

import { Bold, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ActionExamples() {
  return <section aria-labelledby="actions" className="rounded-ds-md border border-ds-control-border bg-ds-surface p-6">
    <div id="actions" role="heading" aria-level={2} className="type-h2">Actions</div>
    <div className="type-small mt-4 text-ds-fg-muted">Hover and press each action; use Tab to inspect focus. Disabled examples are shown alongside the live controls.</div>
    <div className="mt-6 flex flex-col gap-8">
      <div><div className="type-label text-ds-accent">BUTTON // PRIMARY, SECONDARY, GHOST, DESTRUCTIVE</div><div className="type-small my-4 text-ds-fg-muted">Use for an action; use a link for navigation. Press or hover for interactive states.</div><div className="flex flex-wrap gap-4"><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost</Button><Button variant="destructive">Delete</Button><Button disabled>Disabled</Button></div></div>
      <div><div className="type-label text-ds-accent">ICON BUTTON // PRIMARY, SECONDARY, GHOST, DESTRUCTIVE</div><div className="type-small my-4 text-ds-fg-muted">Use for familiar, compact actions with an accessible label; prefer a text button when the icon is ambiguous.</div><div className="flex flex-wrap gap-4"><IconButton aria-label="Settings"><Settings /></IconButton><IconButton aria-label="Settings, secondary" variant="secondary"><Settings /></IconButton><IconButton aria-label="Settings, ghost" variant="ghost"><Settings /></IconButton><IconButton aria-label="Settings, destructive" variant="destructive"><Settings /></IconButton><IconButton aria-label="Settings, disabled" disabled><Settings /></IconButton></div></div>
      <div><div className="type-label text-ds-accent">TOGGLE // DEFAULT, OUTLINE</div><div className="type-small my-4 text-ds-fg-muted">Use for an independently pressed state; use a button for a one-time action.</div><div className="flex flex-wrap gap-4"><Toggle aria-label="Bold"><Bold /></Toggle><Toggle variant="outline" defaultPressed>Enabled</Toggle><Toggle disabled>Disabled</Toggle></div></div>
      <div><div className="type-label text-ds-accent">TOGGLE GROUP // SINGLE OR MULTIPLE</div><div className="type-small my-4 text-ds-fg-muted">Use for related choices; use radio buttons when choices need a persistent field label.</div><div className="flex flex-col items-start gap-4"><ToggleGroup type="single" defaultValue="one" aria-label="View mode"><ToggleGroupItem value="one">List</ToggleGroupItem><ToggleGroupItem value="two">Grid</ToggleGroupItem><ToggleGroupItem value="three" disabled>Disabled</ToggleGroupItem></ToggleGroup><ToggleGroup type="multiple" defaultValue={["bold"]} aria-label="Text formatting"><ToggleGroupItem value="bold">Bold</ToggleGroupItem><ToggleGroupItem value="italic">Italic</ToggleGroupItem></ToggleGroup></div></div>
    </div>
  </section>;
}

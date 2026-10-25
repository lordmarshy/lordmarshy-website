'use client';

import * as React from "react";
import { Dialog as Primitive } from "radix-ui";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconButton } from "./icon-button";

export function Dialog(props: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root {...props} />; }
export function DialogTrigger(props: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger data-slot="dialog-trigger" data-ds-control {...props} />; }
export function DialogClose(props: React.ComponentProps<typeof Primitive.Close>) { return <Primitive.Close data-slot="dialog-close" {...props} />; }
export function DialogContent({ className, children, ...props }: React.ComponentProps<typeof Primitive.Content>) {
  return <Primitive.Portal><Primitive.Overlay data-slot="dialog-overlay" className="fixed inset-0 z-50 bg-ds-canvas/80" /><Primitive.Content data-slot="dialog-content" className={cn("fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-ds-md border border-ds-control-border bg-ds-raised p-6 text-ds-fg outline-none", className)} {...props}>{children}<Primitive.Close asChild><IconButton aria-label="Close dialog" variant="ghost" className="absolute right-2 top-2"><X /></IconButton></Primitive.Close></Primitive.Content></Primitive.Portal>;
}
export function DialogTitle({ className, ...props }: React.ComponentProps<typeof Primitive.Title>) { return <Primitive.Title data-slot="dialog-title" className={cn("ds-title type-h3 pr-12 text-ds-fg", className)} {...props} />; }
export function DialogDescription({ className, ...props }: React.ComponentProps<typeof Primitive.Description>) { return <Primitive.Description data-slot="dialog-description" className={cn("ds-copy type-small mt-2 text-ds-fg-muted", className)} {...props} />; }

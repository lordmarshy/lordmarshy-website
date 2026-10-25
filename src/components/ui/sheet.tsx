'use client';

import * as React from "react";
import { Dialog as Primitive } from "radix-ui";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconButton } from "./icon-button";

export function Sheet(props: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root {...props} />; }
export function SheetTrigger(props: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger data-slot="sheet-trigger" data-ds-control {...props} />; }
export function SheetClose(props: React.ComponentProps<typeof Primitive.Close>) { return <Primitive.Close data-slot="sheet-close" {...props} />; }
export function SheetContent({ className, children, ...props }: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Portal><Primitive.Overlay data-slot="sheet-overlay" className="fixed inset-0 z-50 bg-ds-canvas/80" /><Primitive.Content data-slot="sheet-content" className={cn("fixed inset-y-0 right-0 z-50 w-[min(100%,28rem)] overflow-y-auto border-l border-ds-control-border bg-ds-raised p-6 text-ds-fg outline-none", className)} {...props}>{children}<Primitive.Close asChild><IconButton aria-label="Close panel" variant="ghost" className="absolute right-2 top-2"><X /></IconButton></Primitive.Close></Primitive.Content></Primitive.Portal>; }
export function SheetTitle({ className, ...props }: React.ComponentProps<typeof Primitive.Title>) { return <Primitive.Title data-slot="sheet-title" className={cn("ds-title type-h3 pr-12 text-ds-fg", className)} {...props} />; }
export function SheetDescription({ className, ...props }: React.ComponentProps<typeof Primitive.Description>) { return <Primitive.Description data-slot="sheet-description" className={cn("ds-copy type-small mt-2 text-ds-fg-muted", className)} {...props} />; }

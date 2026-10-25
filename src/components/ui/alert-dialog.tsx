'use client';

import * as React from "react";
import { AlertDialog as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";

export function AlertDialog(props: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root {...props} />; }
export function AlertDialogTrigger(props: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger data-slot="alert-dialog-trigger" data-ds-control {...props} />; }
export function AlertDialogAction(props: React.ComponentProps<typeof Primitive.Action>) { return <Primitive.Action data-slot="alert-dialog-action" data-ds-control {...props} />; }
export function AlertDialogCancel(props: React.ComponentProps<typeof Primitive.Cancel>) { return <Primitive.Cancel data-slot="alert-dialog-cancel" data-ds-control {...props} />; }
export function AlertDialogContent({ className, ...props }: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Portal><Primitive.Overlay data-slot="alert-dialog-overlay" className="fixed inset-0 z-50 bg-ds-canvas/80" /><Primitive.Content data-slot="alert-dialog-content" className={cn("fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-ds-md border border-ds-control-border bg-ds-raised p-6 text-ds-fg outline-none", className)} {...props} /></Primitive.Portal>; }
export function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof Primitive.Title>) { return <Primitive.Title data-slot="alert-dialog-title" className={cn("ds-title type-h3 text-ds-fg", className)} {...props} />; }
export function AlertDialogDescription({ className, ...props }: React.ComponentProps<typeof Primitive.Description>) { return <Primitive.Description data-slot="alert-dialog-description" className={cn("ds-copy type-small mt-2 text-ds-fg-muted", className)} {...props} />; }

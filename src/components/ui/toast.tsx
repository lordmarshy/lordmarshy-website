'use client';
import * as React from "react";
import { Toast as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function ToastProvider(props: React.ComponentProps<typeof Primitive.Provider>) { return <Primitive.Provider {...props} />; }
export function ToastViewport({className,...props}: React.ComponentProps<typeof Primitive.Viewport>) { return <Primitive.Viewport data-slot="toast-viewport" className={cn("fixed bottom-4 right-4 z-50 flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2",className)} {...props} />; }
export function Toast({className,...props}: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="toast" className={cn("type-small rounded-ds-md border border-ds-control-border bg-ds-raised p-4 text-ds-fg",className)} {...props} />; }
export function ToastTitle({className,...props}: React.ComponentProps<typeof Primitive.Title>) { return <Primitive.Title data-slot="toast-title" className={cn("type-small font-semibold",className)} {...props} />; }
export function ToastDescription({className,...props}: React.ComponentProps<typeof Primitive.Description>) { return <Primitive.Description data-slot="toast-description" className={cn("type-small mt-2 text-ds-fg-muted",className)} {...props} />; }
export function ToastAction(props: React.ComponentProps<typeof Primitive.Action>) { return <Primitive.Action data-slot="toast-action" data-ds-control {...props} />; }
export function ToastClose(props: React.ComponentProps<typeof Primitive.Close>) { return <Primitive.Close data-slot="toast-close" data-ds-control {...props} />; }

'use client';
import * as React from "react";
import { Menubar as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function Menubar({className,...props}: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="menubar" className={cn("flex flex-wrap gap-1 border border-ds-control-border bg-ds-surface p-1",className)} {...props} />; }
export function MenubarMenu(props: React.ComponentProps<typeof Primitive.Menu>) { return <Primitive.Menu {...props} />; }
export function MenubarTrigger({className,...props}: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger data-slot="menubar-trigger" data-ds-control className={cn("type-small min-h-11 rounded-ds-sm px-4 text-ds-fg data-[state=open]:bg-ds-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus disabled:opacity-50",className)} {...props} />; }
export function MenubarContent({className,...props}: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Portal><Primitive.Content data-slot="menubar-content" className={cn("type-small z-50 min-w-48 rounded-ds-md border border-ds-control-border bg-ds-raised p-1 text-ds-fg",className)} {...props} /></Primitive.Portal>; }
export function MenubarItem({className,...props}: React.ComponentProps<typeof Primitive.Item>) { return <Primitive.Item data-slot="menubar-item" className={cn("flex min-h-11 items-center rounded-ds-sm px-4 outline-none data-[highlighted]:bg-ds-surface data-[disabled]:opacity-50",className)} {...props} />; }
export function MenubarSeparator({className,...props}: React.ComponentProps<typeof Primitive.Separator>) { return <Primitive.Separator data-slot="menubar-separator" className={cn("my-1 h-px bg-ds-border",className)} {...props} />; }

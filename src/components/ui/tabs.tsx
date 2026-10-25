'use client';
import * as React from "react";
import { Tabs as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function Tabs(props: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="tabs" {...props} />; }
export function TabsList({className,...props}: React.ComponentProps<typeof Primitive.List>) { return <Primitive.List data-slot="tabs-list" className={cn("flex flex-wrap gap-1 border-b border-ds-control-border",className)} {...props} />; }
export function TabsTrigger({className,...props}: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger data-slot="tabs-trigger" data-ds-control className={cn("type-small min-h-11 min-w-11 px-4 text-ds-fg-muted hover:bg-ds-raised data-[state=active]:border-b-2 data-[state=active]:border-ds-accent data-[state=active]:text-ds-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus disabled:opacity-50",className)} {...props} />; }
export function TabsContent({className,...props}: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Content data-slot="tabs-content" className={cn("type-body py-4 text-ds-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus",className)} {...props} />; }

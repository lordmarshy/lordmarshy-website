'use client';
import * as React from "react";
import { NavigationMenu as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function NavigationMenu({className,...props}: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="navigation-menu" className={cn("relative",className)} {...props} />; }
export function NavigationMenuList({className,...props}: React.ComponentProps<typeof Primitive.List>) { return <Primitive.List data-slot="navigation-menu-list" className={cn("flex flex-wrap gap-2",className)} {...props} />; }
export function NavigationMenuItem(props: React.ComponentProps<typeof Primitive.Item>) { return <Primitive.Item data-slot="navigation-menu-item" {...props} />; }
export function NavigationMenuTrigger({className,...props}: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger data-slot="navigation-menu-trigger" data-ds-control className={cn("type-small min-h-11 rounded-ds-sm px-4 text-ds-fg hover:bg-ds-raised data-[state=open]:bg-ds-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus disabled:opacity-50",className)} {...props} />; }
export function NavigationMenuContent({className,...props}: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Content data-slot="navigation-menu-content" className={cn("type-small rounded-ds-md border border-ds-control-border bg-ds-raised p-4 text-ds-fg",className)} {...props} />; }
export function NavigationMenuLink({className,...props}: React.ComponentProps<typeof Primitive.Link>) { return <Primitive.Link data-slot="navigation-menu-link" className={cn("ds-link type-small inline-flex min-h-11 items-center px-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus",className)} {...props} />; }
export function NavigationMenuViewport({className,...props}: React.ComponentProps<typeof Primitive.Viewport>) { return <Primitive.Viewport data-slot="navigation-menu-viewport" className={cn("absolute top-full z-50",className)} {...props} />; }

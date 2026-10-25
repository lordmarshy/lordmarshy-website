'use client';

import * as React from "react";
import { Tooltip as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function TooltipProvider(props: React.ComponentProps<typeof Primitive.Provider>) { return <Primitive.Provider {...props} />; }
export function Tooltip(props: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root {...props} />; }
export function TooltipTrigger(props: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger data-slot="tooltip-trigger" data-ds-control {...props} />; }
export function TooltipContent({ className, sideOffset = 8, ...props }: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Portal><Primitive.Content data-slot="tooltip-content" sideOffset={sideOffset} className={cn("type-small z-50 max-w-xs rounded-ds-sm border border-ds-control-border bg-ds-raised px-4 py-2 text-ds-fg", className)} {...props} /></Primitive.Portal>; }

'use client';

import * as React from "react";
import { Popover as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function Popover(props: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root {...props} />; }
export function PopoverTrigger(props: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger data-slot="popover-trigger" data-ds-control {...props} />; }
export function PopoverClose(props: React.ComponentProps<typeof Primitive.Close>) { return <Primitive.Close data-slot="popover-close" data-ds-control {...props} />; }
export function PopoverContent({ className, sideOffset = 8, ...props }: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Portal><Primitive.Content data-slot="popover-content" sideOffset={sideOffset} className={cn("type-small z-50 rounded-ds-md border border-ds-control-border bg-ds-raised p-4 text-ds-fg", className)} {...props} /></Primitive.Portal>; }

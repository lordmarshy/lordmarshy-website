'use client';

import * as React from "react";
import { HoverCard as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function HoverCard(props: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root {...props} />; }
export function HoverCardTrigger(props: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger data-slot="hover-card-trigger" data-ds-control {...props} />; }
export function HoverCardContent({ className, sideOffset = 8, ...props }: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Portal><Primitive.Content data-slot="hover-card-content" sideOffset={sideOffset} className={cn("type-small z-50 rounded-ds-md border border-ds-control-border bg-ds-raised p-4 text-ds-fg", className)} {...props} /></Primitive.Portal>; }

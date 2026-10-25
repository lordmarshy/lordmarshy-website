'use client';
import * as React from "react";
import { Collapsible as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function Collapsible(props: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="collapsible" {...props} />; }
export function CollapsibleTrigger(props: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger data-slot="collapsible-trigger" data-ds-control {...props} />; }
export function CollapsibleContent({className,...props}: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Content data-slot="collapsible-content" className={cn("type-body text-ds-fg",className)} {...props} />; }

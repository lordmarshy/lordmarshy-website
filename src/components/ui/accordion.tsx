'use client';
import * as React from "react";
import { Accordion as Primitive } from "radix-ui";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
export function Accordion(props: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="accordion" {...props} />; }
export function AccordionItem({className,...props}: React.ComponentProps<typeof Primitive.Item>) { return <Primitive.Item data-slot="accordion-item" className={cn("border-b border-ds-control-border",className)} {...props} />; }
export function AccordionTrigger({className,children,...props}: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Header data-slot="accordion-header"><Primitive.Trigger data-slot="accordion-trigger" data-ds-control className={cn("type-small flex min-h-11 w-full items-center justify-between gap-4 text-left text-ds-fg hover:bg-ds-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus disabled:opacity-50",className)} {...props}>{children}<ChevronDown className="size-4" aria-hidden="true" /></Primitive.Trigger></Primitive.Header>; }
export function AccordionContent({className,...props}: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Content data-slot="accordion-content" className={cn("type-body pb-4 text-ds-fg-muted",className)} {...props} />; }

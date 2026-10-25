'use client';
import * as React from "react";
import { Checkbox as Primitive } from "radix-ui";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
export function Checkbox({className,...props}: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="checkbox" data-ds-control className={cn("group inline-flex size-11 items-center justify-center rounded-ds-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus disabled:opacity-50",className)} {...props}><span className="flex size-5 items-center justify-center rounded-ds-sm border border-ds-control-border bg-ds-raised group-data-[state=checked]:border-ds-accent group-data-[state=checked]:bg-ds-accent group-data-[state=indeterminate]:bg-ds-accent"><Primitive.Indicator data-slot="checkbox-indicator" className="text-ds-accent-fg"><Check className="size-4 group-data-[state=indeterminate]:hidden" /><Minus className="hidden size-4 group-data-[state=indeterminate]:block" /></Primitive.Indicator></span></Primitive.Root>; }

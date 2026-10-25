'use client';
import * as React from "react";
import { RadioGroup as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function RadioGroup({className,...props}: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="radio-group" className={cn("grid gap-1",className)} {...props} />; }
export function RadioGroupItem({className,...props}: React.ComponentProps<typeof Primitive.Item>) { return <Primitive.Item data-slot="radio-group-item" data-ds-control className={cn("inline-flex size-11 items-center justify-center rounded-ds-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus disabled:opacity-50",className)} {...props}><span className="flex size-5 items-center justify-center rounded-full border border-ds-control-border bg-ds-raised"><Primitive.Indicator data-slot="radio-group-indicator" className="size-3 rounded-full bg-ds-accent" /></span></Primitive.Item>; }

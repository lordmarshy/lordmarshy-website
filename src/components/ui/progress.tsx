'use client';
import * as React from "react";
import { Progress as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function Progress({className,value,...props}: React.ComponentProps<typeof Primitive.Root>) { const indeterminate = value == null; return <Primitive.Root data-slot="progress" value={value} className={cn("relative h-2 overflow-hidden rounded-full bg-ds-control-border",className)} {...props}><Primitive.Indicator data-slot="progress-indicator" className={cn("h-full bg-ds-accent transition-[width]", indeterminate && "w-full animate-pulse motion-reduce:animate-none")} style={indeterminate ? undefined : {width: `${Math.max(0,Math.min(100,value / (props.max ?? 100) * 100))}%`}} /></Primitive.Root>; }

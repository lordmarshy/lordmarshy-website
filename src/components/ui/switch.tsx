'use client';
import * as React from "react";
import { Switch as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function Switch({className,...props}: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="switch" data-ds-control className={cn("group inline-flex h-11 min-w-11 items-center justify-center rounded-ds-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus disabled:opacity-50",className)} {...props}><span className="flex h-6 w-10 items-center rounded-full border border-ds-control-border bg-ds-raised p-1 group-data-[state=checked]:bg-ds-accent"><Primitive.Thumb data-slot="switch-thumb" className="size-4 rounded-full bg-ds-fg transition-transform group-data-[state=checked]:translate-x-4 group-data-[state=checked]:bg-ds-accent-fg" /></span></Primitive.Root>; }

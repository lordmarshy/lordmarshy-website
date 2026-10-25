'use client';

import * as React from "react";
import { Toggle as Primitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const toggleVariants = cva("type-small inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-ds-sm px-4 text-ds-fg transition-colors hover:bg-ds-raised active:bg-ds-canvas data-[state=on]:bg-ds-accent data-[state=on]:text-ds-accent-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus disabled:pointer-events-none disabled:opacity-50", {
  variants: { variant: { default: "bg-ds-surface", outline: "border border-ds-control-border bg-ds-surface" } },
  defaultVariants: { variant: "default" },
});

export function Toggle({ className, variant, ...props }: React.ComponentProps<typeof Primitive.Root> & VariantProps<typeof toggleVariants>) {
  return <Primitive.Root data-slot="toggle" data-ds-control className={cn(toggleVariants({ variant }), className)} {...props} />;
}

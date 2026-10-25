import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva("type-small inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-ds-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4", {
  variants: {
    variant: {
      primary: "bg-ds-accent px-4 text-ds-accent-fg hover:brightness-90 active:brightness-75",
      secondary: "border border-ds-control-border bg-ds-surface px-4 text-ds-fg hover:bg-ds-raised active:bg-ds-canvas",
      ghost: "px-4 text-ds-fg hover:bg-ds-raised active:bg-ds-surface",
      destructive: "bg-ds-error px-4 text-ds-canvas hover:brightness-90 active:brightness-75",
    },
  },
  defaultVariants: { variant: "primary" },
});

export function Button({ className, variant, asChild = false, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Component = asChild ? Slot.Root : "button";
  return <Component data-slot="button" className={cn(buttonVariants({ variant }), className)} {...props} />;
}

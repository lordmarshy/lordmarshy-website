import * as React from "react";
import { Button, buttonVariants } from "./button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export function IconButton({ className, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { "aria-label": string }) {
  return <Button {...props} data-slot="icon-button" data-ds-control className={cn("h-11 w-11 p-0", className)} />;
}

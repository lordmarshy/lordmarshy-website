'use client';

import * as React from "react";
import { ToggleGroup as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
import { toggleVariants } from "./toggle";

export function ToggleGroup({ className, ...props }: React.ComponentProps<typeof Primitive.Root>) {
  return <Primitive.Root data-slot="toggle-group" className={cn("inline-flex flex-wrap gap-1", className)} {...props} />;
}

export function ToggleGroupItem({ className, ...props }: React.ComponentProps<typeof Primitive.Item>) {
  return <Primitive.Item data-slot="toggle-group-item" data-ds-control className={cn(toggleVariants({ variant: "outline" }), className)} {...props} />;
}

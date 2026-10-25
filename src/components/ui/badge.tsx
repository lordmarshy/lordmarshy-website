import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const variants = cva("type-label inline-flex items-center rounded-ds-sm border px-2 py-1", {variants:{variant:{default:"border-ds-control-border text-ds-fg",success:"border-ds-success text-ds-success",warning:"border-ds-warning text-ds-warning",error:"border-ds-error text-ds-error",info:"border-ds-secondary text-ds-secondary"}},defaultVariants:{variant:"default"}});
export function Badge({className,variant,...props}: React.ComponentProps<"span"> & VariantProps<typeof variants>) { return <span data-slot="badge" className={cn(variants({variant}),className)} {...props} />; }

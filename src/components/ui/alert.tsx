import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const variants = cva("rounded-ds-md border bg-ds-surface p-4 text-ds-fg", {variants:{variant:{info:"border-ds-secondary",success:"border-ds-success",warning:"border-ds-warning",error:"border-ds-error"}},defaultVariants:{variant:"info"}});
export function Alert({className,variant,...props}: React.ComponentProps<"div"> & VariantProps<typeof variants>) { return <div role="alert" data-slot="alert" className={cn(variants({variant}),className)} {...props} />; }
export function AlertTitle({className,...props}: React.ComponentProps<"div">) { return <div data-slot="alert-title" className={cn("type-small font-semibold",className)} {...props} />; }
export function AlertDescription({className,...props}: React.ComponentProps<"div">) { return <div data-slot="alert-description" className={cn("type-small mt-2 text-ds-fg-muted",className)} {...props} />; }

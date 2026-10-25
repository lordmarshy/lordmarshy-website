import * as React from "react";
import { cn } from "@/lib/utils";
export function Card({className,...props}: React.ComponentProps<"div">) { return <div data-slot="card" className={cn("rounded-ds-md border border-dashed border-ds-border bg-ds-surface text-ds-fg",className)} {...props} />; }
export function CardHeader({className,...props}: React.ComponentProps<"div">) { return <div data-slot="card-header" className={cn("p-6",className)} {...props} />; }
export function CardTitle({className,...props}: React.ComponentProps<"div">) { return <div data-slot="card-title" className={cn("type-h3 text-ds-fg",className)} {...props} />; }
export function CardDescription({className,...props}: React.ComponentProps<"div">) { return <div data-slot="card-description" className={cn("type-small mt-2 text-ds-fg-muted",className)} {...props} />; }
export function CardContent({className,...props}: React.ComponentProps<"div">) { return <div data-slot="card-content" className={cn("type-body px-6 pb-6",className)} {...props} />; }
export function CardFooter({className,...props}: React.ComponentProps<"div">) { return <div data-slot="card-footer" className={cn("flex gap-4 px-6 pb-6",className)} {...props} />; }

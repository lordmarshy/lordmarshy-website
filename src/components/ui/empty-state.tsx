import * as React from "react";
import { cn } from "@/lib/utils";
export function EmptyState({className,...props}: React.ComponentProps<"div">) { return <div data-slot="empty-state" className={cn("type-body border border-dashed border-ds-border bg-ds-surface p-6 text-ds-fg",className)} {...props} />; }

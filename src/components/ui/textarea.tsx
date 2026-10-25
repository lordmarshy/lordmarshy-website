import * as React from "react";
import { cn } from "@/lib/utils";
export function Textarea({className,...props}: React.ComponentProps<"textarea">) { return <textarea data-slot="textarea" className={cn("type-body min-h-24 w-full rounded-ds-sm border border-ds-control-border bg-ds-raised p-4 text-ds-fg placeholder:text-ds-fg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus disabled:opacity-50 aria-invalid:border-ds-error",className)} {...props} />; }

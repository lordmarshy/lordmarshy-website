import * as React from "react";
import { cn } from "@/lib/utils";
export function Skeleton({className,...props}: React.ComponentProps<"div">) { return <div data-slot="skeleton" aria-hidden="true" className={cn("animate-pulse rounded-ds-sm bg-ds-raised motion-reduce:animate-none",className)} {...props} />; }

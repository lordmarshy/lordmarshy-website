'use client';
import * as React from "react";
import { Separator as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function Separator({className,orientation="horizontal",decorative=true,...props}: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="separator" orientation={orientation} decorative={decorative} className={cn("shrink-0 bg-ds-border",orientation === "horizontal" ? "h-px w-full" : "h-full w-px",className)} {...props} />; }

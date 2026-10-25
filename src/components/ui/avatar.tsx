'use client';
import * as React from "react";
import { Avatar as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function Avatar({className,...props}: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="avatar" className={cn("relative inline-flex size-11 overflow-hidden rounded-full bg-ds-raised",className)} {...props} />; }
export function AvatarImage({className,...props}: React.ComponentProps<typeof Primitive.Image>) { return <Primitive.Image data-slot="avatar-image" className={cn("size-full object-cover",className)} {...props} />; }
export function AvatarFallback({className,...props}: React.ComponentProps<typeof Primitive.Fallback>) { return <Primitive.Fallback data-slot="avatar-fallback" className={cn("type-label flex size-full items-center justify-center text-ds-fg",className)} {...props} />; }

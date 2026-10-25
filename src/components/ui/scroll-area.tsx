'use client';
import * as React from "react";
import { ScrollArea as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export function ScrollArea({className,children,...props}: React.ComponentProps<typeof Primitive.Root>) { return <Primitive.Root data-slot="scroll-area" className={cn("relative overflow-hidden",className)} {...props}><Primitive.Viewport data-slot="scroll-area-viewport" className="size-full">{children}</Primitive.Viewport><Primitive.Scrollbar data-slot="scroll-area-scrollbar" orientation="vertical" className="flex w-3 touch-none p-1"><Primitive.Thumb data-slot="scroll-area-thumb" className="flex-1 rounded-full bg-ds-control-border" /></Primitive.Scrollbar><Primitive.Corner data-slot="scroll-area-corner" /></Primitive.Root>; }

import * as React from "react";
import { cn } from "@/lib/utils";
export function Breadcrumb(props: React.ComponentProps<"nav">) { return <nav aria-label="Breadcrumb" data-slot="breadcrumb" {...props} />; }
export function BreadcrumbList({className,...props}: React.ComponentProps<"ol">) { return <ol data-slot="breadcrumb-list" className={cn("type-small flex flex-wrap items-center gap-2 text-ds-fg-muted",className)} {...props} />; }
export function BreadcrumbItem(props: React.ComponentProps<"li">) { return <li data-slot="breadcrumb-item" {...props} />; }
export function BreadcrumbLink({className,...props}: React.ComponentProps<"a">) { return <a data-slot="breadcrumb-link" className={cn("ds-link underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus",className)} {...props} />; }
export function BreadcrumbPage(props: React.ComponentProps<"span">) { return <span data-slot="breadcrumb-page" aria-current="page" {...props} />; }
export function BreadcrumbSeparator(props: React.ComponentProps<"span">) { return <span data-slot="breadcrumb-separator" aria-hidden="true" {...props}>/</span>; }

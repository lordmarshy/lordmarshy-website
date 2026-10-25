import * as React from "react";
import { cn } from "@/lib/utils";
export function Pagination(props: React.ComponentProps<"nav">) { return <nav aria-label="Pagination" data-slot="pagination" {...props} />; }
export function PaginationList({className,...props}: React.ComponentProps<"ul">) { return <ul data-slot="pagination-list" className={cn("flex flex-wrap gap-2",className)} {...props} />; }
export function PaginationItem(props: React.ComponentProps<"li">) { return <li data-slot="pagination-item" {...props} />; }
export function PaginationLink({className,isCurrent,...props}: React.ComponentProps<"a"> & {isCurrent?: boolean}) { return <a data-slot="pagination-link" aria-current={isCurrent ? "page" : undefined} className={cn("ds-link type-small inline-flex min-h-11 min-w-11 items-center justify-center rounded-ds-sm border border-ds-control-border px-4 hover:bg-ds-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus",isCurrent && "bg-ds-accent",className)} {...props} />; }

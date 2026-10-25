import * as React from "react";
import { cn } from "@/lib/utils";
export function Table({className,...props}: React.ComponentProps<"table">) { return <table data-slot="table" className={cn("type-small w-full text-left text-ds-fg",className)} {...props} />; }
export function TableHeader(props: React.ComponentProps<"thead">) { return <thead data-slot="table-header" {...props} />; }
export function TableBody(props: React.ComponentProps<"tbody">) { return <tbody data-slot="table-body" {...props} />; }
export function TableFooter(props: React.ComponentProps<"tfoot">) { return <tfoot data-slot="table-footer" {...props} />; }
export function TableRow({className,...props}: React.ComponentProps<"tr">) { return <tr data-slot="table-row" className={cn("border-b border-ds-border",className)} {...props} />; }
export function TableHead({className,...props}: React.ComponentProps<"th">) { return <th data-slot="table-head" className={cn("p-4 text-ds-fg-muted",className)} {...props} />; }
export function TableCell({className,...props}: React.ComponentProps<"td">) { return <td data-slot="table-cell" className={cn("p-4",className)} {...props} />; }
export function TableCaption({className,...props}: React.ComponentProps<"caption">) { return <caption data-slot="table-caption" className={cn("type-small p-4 text-ds-fg-muted",className)} {...props} />; }

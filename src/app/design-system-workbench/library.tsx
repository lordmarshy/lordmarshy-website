'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationList, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";
import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

function Sample({name, use, avoid, children}: {name: string; use: string; avoid: string; children: React.ReactNode}) {
  return <div className="border-b border-dashed border-ds-border pb-6 last:border-0"><div className="type-label text-ds-accent">{name.toUpperCase()}</div><div className="type-small mt-2 text-ds-fg-muted">Use: {use} Avoid: {avoid}</div><div className="mt-4">{children}</div></div>;
}
function Group({title, children}: {title: string; children: React.ReactNode}) { return <section className="rounded-ds-md border border-ds-control-border bg-ds-surface p-6"><div role="heading" aria-level={2} className="type-h2">{title}</div><div className="type-small mt-4 text-ds-fg-muted">Hover, press and use Tab to inspect interactive states. Each example uses the default variant unless noted.</div><div className="mt-6 flex flex-col gap-6">{children}</div></section>; }
export function LibraryExamples() {
  const [toastOpen, setToastOpen] = React.useState(false);
  return <>
    <Group title="Overlays">
      <Sample name="Dialog" use="Focused, interruptive tasks." avoid="Brief explanations."><Dialog><DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger><DialogContent><DialogTitle>Dialog title</DialogTitle><DialogDescription>A focused task in a dialog.</DialogDescription></DialogContent></Dialog></Sample>
      <Sample name="Alert dialog" use="Confirm consequential actions." avoid="Ordinary information."><AlertDialog><AlertDialogTrigger asChild><Button variant="secondary">Open confirmation</Button></AlertDialogTrigger><AlertDialogContent><AlertDialogTitle>Confirm action</AlertDialogTitle><AlertDialogDescription>Would you like to continue?</AlertDialogDescription><div className="mt-6 flex gap-4"><AlertDialogCancel asChild><Button variant="secondary">Cancel</Button></AlertDialogCancel><AlertDialogAction asChild><Button>Continue</Button></AlertDialogAction></div></AlertDialogContent></AlertDialog></Sample>
      <Sample name="Sheet" use="A supplementary side panel." avoid="Critical confirmations."><Sheet><SheetTrigger asChild><Button variant="secondary">Open sheet</Button></SheetTrigger><SheetContent><SheetTitle>Side panel</SheetTitle><SheetDescription>Supplementary content.</SheetDescription></SheetContent></Sheet></Sample>
      <Sample name="Dropdown menu" use="A menu of actions." avoid="Choosing a form value."><DropdownMenu><DropdownMenuTrigger asChild><Button variant="secondary">Actions</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Inspect</DropdownMenuItem><DropdownMenuItem disabled>Unavailable</DropdownMenuItem></DropdownMenuContent></DropdownMenu></Sample>
      <Sample name="Context menu" use="Contextual actions for a target." avoid="Hiding the only way to perform an action."><ContextMenu><ContextMenuTrigger className="type-small block border border-dashed border-ds-border p-6">Right-click here</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Inspect</ContextMenuItem><ContextMenuItem disabled>Unavailable</ContextMenuItem></ContextMenuContent></ContextMenu></Sample>
      <Sample name="Popover" use="Small contextual content." avoid="Long or critical workflows."><Popover><PopoverTrigger asChild><Button variant="secondary">Open popover</Button></PopoverTrigger><PopoverContent>Contextual detail</PopoverContent></Popover></Sample>
      <Sample name="Tooltip" use="Short supplementary hints." avoid="Essential information or interactive content."><TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant="secondary">Hover or focus</Button></TooltipTrigger><TooltipContent>A short hint</TooltipContent></Tooltip></TooltipProvider></Sample>
      <Sample name="Hover card" use="Supplementary preview content." avoid="Essential information available only on hover."><HoverCard><HoverCardTrigger asChild><Button variant="secondary">Preview</Button></HoverCardTrigger><HoverCardContent>Additional profile detail.</HoverCardContent></HoverCard></Sample>
    </Group>
    <Group title="Navigation">
      <Sample name="Tabs" use="Switch between related views." avoid="Unrelated destinations."><Tabs defaultValue="one"><TabsList><TabsTrigger value="one">Overview</TabsTrigger><TabsTrigger value="two">Details</TabsTrigger><TabsTrigger value="three" disabled>Disabled</TabsTrigger></TabsList><TabsContent value="one">Overview content</TabsContent><TabsContent value="two">Detail content</TabsContent></Tabs></Sample>
      <Sample name="Accordion" use="A set of expandable sections." avoid="Hiding content everyone needs."><Accordion type="single" collapsible><AccordionItem value="one"><AccordionTrigger>Details</AccordionTrigger><AccordionContent>Expanded content</AccordionContent></AccordionItem></Accordion></Sample>
      <Sample name="Collapsible" use="One optional section." avoid="Critical hidden content."><Collapsible><CollapsibleTrigger asChild><Button variant="secondary">Toggle details</Button></CollapsibleTrigger><CollapsibleContent className="mt-4">Additional details</CollapsibleContent></Collapsible></Sample>
      <Sample name="Breadcrumb" use="Show a page's hierarchy." avoid="Replacing primary navigation."><Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb></Sample>
      <Sample name="Pagination" use="Navigate numbered result pages." avoid="Tiny lists."><Pagination><PaginationList><PaginationItem><PaginationLink href="#" isCurrent>1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem></PaginationList></Pagination></Sample>
      <Sample name="Navigation menu" use="Structured site navigation." avoid="Contextual action menus."><NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Explore</NavigationMenuTrigger><NavigationMenuContent><NavigationMenuLink href="#">Overview</NavigationMenuLink></NavigationMenuContent></NavigationMenuItem></NavigationMenuList></NavigationMenu></Sample>
      <Sample name="Menubar" use="Application-level menus." avoid="A single simple action."><Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>Open</MenubarItem><MenubarItem disabled>Unavailable</MenubarItem></MenubarContent></MenubarMenu></Menubar></Sample>
    </Group>
    <Group title="Forms">
      <Sample name="Field, label and input" use="Label and describe an input." avoid="Placeholder-only labels."><Field><Label htmlFor="example-name">Name</Label><Input id="example-name" name="name" aria-describedby="example-name-hint" placeholder="Your name" /><FieldDescription id="example-name-hint">Use a name people recognise.</FieldDescription><Input aria-label="Disabled input" disabled placeholder="Disabled" /><Input aria-label="Invalid input" aria-invalid="true" aria-describedby="example-field-error" /><FieldError id="example-field-error">Enter a valid value.</FieldError></Field></Sample>
      <Sample name="Textarea" use="Multi-line input." avoid="Short single-line values."><div className="grid gap-4"><Textarea aria-label="Message" placeholder="Write a message" /><Textarea aria-label="Disabled message" disabled placeholder="Disabled" /><Textarea aria-label="Invalid message" aria-invalid="true" defaultValue="Invalid" /></div></Sample>
      <Sample name="Select" use="Choose one option." avoid="Free-form input."><Select><SelectTrigger aria-label="Choose a view"><SelectValue placeholder="Choose a view" /></SelectTrigger><SelectContent><SelectItem value="one">List</SelectItem><SelectItem value="two">Grid</SelectItem><SelectItem value="three" disabled>Unavailable</SelectItem></SelectContent></Select></Sample>
      <Sample name="Checkbox" use="Independent on/off choices." avoid="A mutually exclusive choice."><div className="flex items-center"><Checkbox id="example-check" name="example-check" /><Label htmlFor="example-check">Enable option</Label><Checkbox aria-label="Disabled checkbox" disabled /></div></Sample>
      <Sample name="Radio group" use="Choose one visible option." avoid="Independent choices."><RadioGroup defaultValue="one" aria-label="Mode"><div className="flex items-center"><RadioGroupItem id="mode-one" value="one" /><Label htmlFor="mode-one">One</Label></div><div className="flex items-center"><RadioGroupItem id="mode-two" value="two" /><Label htmlFor="mode-two">Two</Label></div><div className="flex items-center"><RadioGroupItem id="mode-disabled" value="disabled" disabled /><Label htmlFor="mode-disabled">Disabled</Label></div></RadioGroup></Sample>
      <Sample name="Switch" use="An immediate on/off setting." avoid="A choice requiring form submission."><div className="flex flex-wrap items-center"><Switch id="example-switch" /><Label htmlFor="example-switch">Enable notifications</Label><Switch aria-label="Disabled switch" disabled /></div></Sample>
      <Sample name="Slider" use="Adjust an approximate value." avoid="Precise numerical entry without an alternative."><div className="grid gap-4"><Slider aria-label="Volume" defaultValue={[40]} /><Slider aria-label="Disabled volume" defaultValue={[40]} disabled /></div></Sample>
    </Group>
    <Group title="Feedback">
      <Sample name="Alert" use="Persistent contextual feedback." avoid="Transient confirmations."><div className="grid gap-2">{(["info","success","warning","error"] as const).map(variant => <Alert key={variant} variant={variant}><AlertTitle>{variant}</AlertTitle><AlertDescription>Example feedback.</AlertDescription></Alert>)}</div></Sample>
      <Sample name="Toast" use="Brief non-blocking feedback." avoid="Critical information that must remain visible."><ToastProvider><Button onClick={() => setToastOpen(true)}>Show toast</Button><Toast open={toastOpen} onOpenChange={setToastOpen}><ToastTitle>Saved</ToastTitle><ToastDescription>Your changes were saved.</ToastDescription></Toast><ToastViewport /></ToastProvider></Sample>
      <Sample name="Progress" use="Show completion of a task." avoid="A static decorative bar."><Progress aria-label="Progress" value={60} /></Sample>
      <Sample name="Spinner" use="A short loading state." avoid="Unknown long waits without explanation."><Spinner /></Sample>
      <Sample name="Skeleton" use="A placeholder while content loads." avoid="A permanent empty state."><Skeleton className="h-8 w-48" /></Sample>
      <Sample name="Empty state" use="Explain an empty result." avoid="Loading or error feedback."><EmptyState>No projects yet.</EmptyState></Sample>
    </Group>
    <Group title="Display">
      <Sample name="Badge" use="Short status or category." avoid="Long descriptions."><div className="flex flex-wrap gap-2">{(["default","info","success","warning","error"] as const).map(variant => <Badge key={variant} variant={variant}>{variant}</Badge>)}</div></Sample>
      <Sample name="Card" use="Group related content." avoid="Decorative nesting without purpose."><Card><CardHeader><CardTitle>Project</CardTitle><CardDescription>A related collection of information.</CardDescription></CardHeader></Card></Sample>
      <Sample name="Avatar" use="Represent a person." avoid="Using initials as the only accessible name."><Avatar aria-label="Guy Marshman"><AvatarFallback>GM</AvatarFallback></Avatar></Sample>
      <Sample name="Separator" use="Separate related groups." avoid="Replacing headings."><Separator /></Sample>
      <Sample name="Table" use="Compare tabular data." avoid="Page layout."><Table><TableHeader><TableRow><TableHead scope="col">Project</TableHead><TableHead scope="col">Status</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Example</TableCell><TableCell>Active</TableCell></TableRow></TableBody></Table></Sample>
      <Sample name="Scroll area" use="Constrain supplementary content." avoid="Trapping primary page content in nested scroll regions."><ScrollArea className="h-24 border border-ds-control-border p-4"><div className="type-small">Scrollable content<br />Line two<br />Line three<br />Line four<br />Line five</div></ScrollArea></Sample>
    </Group>
  </>;
}

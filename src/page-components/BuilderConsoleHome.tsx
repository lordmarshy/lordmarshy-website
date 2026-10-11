"use client";

/**
 * Builder's Console home page.
 */

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Braces, Circle, Code2, ExternalLink, GraduationCap, Github, Layers3, Terminal } from "lucide-react";
import DemoPage from "@/certificates/page";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const playgroundProjects = [
  { number: "02", name: "Mood Tracker", kind: "CLI / TUI experiment", description: "A mental-health tracker built as a full-screen terminal UI, with mood history saved locally in SQLite.", stack: "JavaScript / Node.js / React Ink / SQLite", href: "https://github.com/wobwobbird/Mood_Tracker", status: "ARCHIVED BUILD" },
  { number: "03", name: "Tap 'O' Matic", kind: "Mobile experiment", description: "A small React Native random-number generator app—an excuse to explore the mobile development loop.", stack: "React Native / TypeScript / Expo", href: "https://github.com/wobwobbird/Tap-O-Matic", status: "IN PROGRESS" },
  { number: "04", name: "Super Connect", kind: "Game prototype", description: "A two-player Connect 4-style game with scoring, animations, a start screen, and a little atmosphere.", stack: "Unity / C#", href: "https://github.com/wobwobbird/Super-Connect-Game", status: "PLAYGROUND" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-emerald-300 uppercase">{children}</p>;
}

function ExternalAction({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-dashed border-emerald-300/70 px-4 py-2 text-sm text-white transition hover:bg-emerald-300/10">{children} <ExternalLink size={14} /></a>;
}

export default function BuilderConsoleHome() {
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#06110f] pb-32 pt-28 font-mono text-white [background-image:linear-gradient(rgba(97,220,163,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(97,220,163,0.05)_1px,transparent_1px)] [background-size:32px_32px]">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="mb-4 flex items-center justify-between border border-dashed border-emerald-300/45 bg-emerald-300/5 px-4 py-3 text-[10px] tracking-[0.15em] text-emerald-200 sm:text-[11px]">
          <span>BUILDER&apos;S CONSOLE // GUY MARSHMAN</span>
          <span className="flex items-center gap-2"><Circle size={8} className="fill-emerald-300" /> AVAILABLE FOR WORK</span>
        </div>

        <section className="grid border border-dashed border-white/25 lg:grid-cols-[0.95fr_1.45fr]">
          <div className="border-b border-dashed border-white/25 p-6 lg:border-b-0 lg:border-r">
            <SectionLabel>IDENTITY</SectionLabel>
            <h1 className="text-4xl text-white sm:text-5xl">Full-stack developer.<br />Still curious.</h1>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">I like the point where product thinking, UI detail, and practical software engineering meet.</p>
            <div className="mt-10 space-y-4 text-sm text-slate-300">
              <p className="border-l-2 border-emerald-300 pl-3">Based in London</p>
              <p className="border-l-2 border-emerald-300 pl-3">Frontend → backend → shipped product</p>
              <p className="border-l-2 border-emerald-300 pl-3">Open to junior full-stack opportunities</p>
            </div>
            <button
              type="button"
              onClick={() => setCoursesOpen(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-dashed border-emerald-300/70 !bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100 transition hover:!bg-emerald-300/20"
            >
              <GraduationCap size={17} aria-hidden="true" /> View completed courses <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2">
            <div className="border-b border-dashed border-white/25 p-6 sm:border-r"><Braces className="mb-10 text-emerald-200" /><SectionLabel>WORKING WITH</SectionLabel><p className="text-lg leading-7 text-white">React, TypeScript, Node.js, PostgreSQL, and a growing obsession with reliable systems.</p></div>
            <div className="border-b border-dashed border-white/25 p-6"><Terminal className="mb-10 text-emerald-200" /><SectionLabel>CURRENTLY LEARNING</SectionLabel><p className="text-lg leading-7 text-white">Server architecture, authentication, data modelling, and how good products hold together.</p></div>
            <div className="p-6 sm:col-span-2"><SectionLabel>WORKING PRINCIPLES</SectionLabel><div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3"><p className="border-l-2 border-emerald-300 pl-3">Make the useful thing real.</p><p className="border-l-2 border-emerald-300 pl-3">Let the detail support the idea.</p><p className="border-l-2 border-emerald-300 pl-3">Ship, inspect, improve, repeat.</p></div></div>
          </div>
        </section>

        <section className="mt-4 border border-dashed border-white/25">
          <div className="flex flex-col justify-between gap-4 border-b border-dashed border-white/25 p-6 md:flex-row md:items-end"><div><SectionLabel>FEATURED BUILD // 01</SectionLabel><h2 className="text-3xl text-white sm:text-4xl">GitProof</h2></div><p className="max-w-md text-sm leading-6 text-slate-400">A deeper look at a project worth opening—not just another card in a grid.</p></div>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-6">
              <p className="max-w-2xl text-xl leading-8 text-slate-100">A web app for issuing and sharing developer proofs: exploring how technical work could be presented with more confidence and context.</p>
              <div className="mt-10 grid gap-6 border-t border-dashed border-white/20 pt-6 sm:grid-cols-2"><div><SectionLabel>WHAT I EXPLORED</SectionLabel><p className="text-sm leading-6 text-slate-400">A complete web-app shape: user-facing interface, data modelling, and an experience built around sharing proof of work.</p></div><div><SectionLabel>STACK</SectionLabel><p className="text-sm leading-6 text-slate-400">React / TypeScript / Prisma / Neon / Bun / PostgreSQL</p></div></div>
              <div className="mt-8 flex flex-wrap gap-3"><ExternalAction href="https://github.com/wobwobbird/gitproof">Read the code</ExternalAction><ExternalAction href="https://wobwobbird.github.io/GitProof/">Open demo</ExternalAction></div>
            </div>
            <div className="border-t border-dashed border-white/25 bg-emerald-300/5 p-6 lg:border-l lg:border-t-0"><SectionLabel>PROJECT SIGNAL</SectionLabel><div className="space-y-6 text-sm text-slate-300"><p><span className="block text-xs text-emerald-200">SHAPE</span> Full-stack product concept</p><p><span className="block text-xs text-emerald-200">FOCUS</span> Product thinking + developer experience</p><p><span className="block text-xs text-emerald-200">NEXT</span> Turn this summary into a short visual case study.</p></div></div>
          </div>
        </section>

        <section className="mt-4 border border-dashed border-white/25">
          <div className="flex flex-col gap-4 border-b border-dashed border-white/25 p-6 md:flex-row md:items-end md:justify-between"><div><SectionLabel>THE PLAYGROUND</SectionLabel><h2 className="text-3xl text-white sm:text-4xl">Things I&apos;ve built to learn.</h2></div><p className="max-w-md text-sm leading-6 text-slate-400">Smaller, stranger, and more experimental work belongs here. This proves curiosity without competing with the flagship project.</p></div>
          <div className="grid md:grid-cols-3">
            {playgroundProjects.map((project, index) => <article key={project.name} className={`flex min-h-80 flex-col p-6 ${index < playgroundProjects.length - 1 ? "border-b border-dashed border-white/25 md:border-b-0 md:border-r" : ""}`}><div className="flex items-center justify-between text-[10px] tracking-[0.12em] text-emerald-200"><span>{project.number}</span><span>{project.status}</span></div><div className="mt-auto pt-12"><p className="text-xs text-slate-500">{project.kind}</p><h3 className="mt-2 text-2xl text-white">{project.name}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p><p className="mt-5 text-[10px] leading-5 tracking-[0.1em] text-emerald-200">{project.stack}</p><a className="mt-6 inline-flex items-center gap-2 text-sm text-white hover:text-emerald-200" href={project.href} target="_blank" rel="noreferrer">Inspect build <ArrowUpRight size={15} /></a></div></article>)}
          </div>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-3">{[{ icon: Code2, title: "Build", copy: "Make the useful thing real." }, { icon: Layers3, title: "Shape", copy: "Turn messy requirements into a clear interface." }, { icon: Github, title: "Learn", copy: "Ship, inspect, improve, repeat." }].map(({ icon: Icon, title, copy }) => <div className="border border-dashed border-white/25 p-5" key={title}><Icon size={19} className="text-emerald-200" /><p className="mt-5 text-white">{title}</p><p className="mt-2 text-sm text-slate-400">{copy}</p></div>)}</section>

        <footer className="mt-4 flex flex-col gap-4 border border-dashed border-emerald-300/45 bg-emerald-300/5 p-6 sm:flex-row sm:items-center sm:justify-between"><div><SectionLabel>CONTACT</SectionLabel><p className="text-xl text-white">Have a useful problem to solve?</p></div><Link href="/contact" className="inline-flex items-center gap-2 text-sm text-emerald-200 hover:text-white">Say hello <ArrowUpRight size={16} /></Link></footer>
      </div>
      <Dialog open={coursesOpen} onOpenChange={setCoursesOpen}>
        <DialogContent className="data-table z-[1100] flex h-[90dvh] max-h-[90dvh] w-[94vw] max-w-[94vw] flex-col overflow-hidden rounded-2xl border-emerald-300/50 bg-black p-0 sm:max-w-[90vw]">
          <DialogHeader className="shrink-0 px-6 pb-2 pt-5">
            <DialogTitle>Courses completed</DialogTitle>
            <DialogDescription className="text-slate-300">Browse and filter the courses I&apos;ve completed.</DialogDescription>
          </DialogHeader>
          <div className="min-h-0 flex-1 overflow-auto px-3 pb-4 sm:px-6 sm:pb-6">
            <DemoPage />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

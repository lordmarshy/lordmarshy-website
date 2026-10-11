"use client";

import { ReactLenis } from "lenis/react";
import Navigation from "@/components/Navigation";

interface SiteShellProps {
  children: React.ReactNode;
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        allowNestedScroll: true,
      }}
    >
      <Navigation />
      {children}
    </ReactLenis>
  );
}

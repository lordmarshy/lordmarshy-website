"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GlassSurface from "@/components/GlassSurface";

export default function Navigation() {
  const pathname = usePathname();
  const isEntryPage = pathname === "/";

  return (
    <div className="app-nav-wrapper">
      <GlassSurface
        width="100%"
        height={70}
        borderRadius={30}
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        borderWidth={0.2}
        backgroundOpacity={0.1}
        saturation={0.9}
        mixBlendMode="screen"
        className="app-nav-glass"
      >
        {isEntryPage ? (
          <nav className="app-nav max-md:justify-center!">
            <Link href="/">
              <img src="/assets/lord_marshy_logo.png" alt="website logo" className="select-none h-10 rotate-4" />
            </Link>
          </nav>
        ) : (
          <nav className="app-nav max-[600px]:justify-center!">
            <Link href="/">
              <img
                src="/assets/lord_marshy_logo.png"
                alt="website logo"
                className="select-none h-10 rotate-4 max-[600px]:hidden"
              />
            </Link>
            <div className="select-none flex items-center gap-12">
              <Link
                href="/home"
                className={pathname === "/home" ? "[text-shadow:0_0_20px_rgba(97,220,163,1),0_0_25px_rgba(200,255,150,0.5)]" : ""}
              >
                Home
              </Link>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "[text-shadow:0_0_20px_rgba(97,220,163,1),0_0_25px_rgba(200,255,150,0.5)]" : ""}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </GlassSurface>
    </div>
  );
}

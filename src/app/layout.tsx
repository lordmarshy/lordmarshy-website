import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guy Marshman | Full-Stack Developer",
  description: "Portfolio site for Guy Marshman, a full-stack developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

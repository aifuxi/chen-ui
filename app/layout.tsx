import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Chen Serif Design System",
  description:
    "A Base UI and shadcn registry playground rebuilt with the Chen Serif design system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased")}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}

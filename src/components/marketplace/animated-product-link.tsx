"use client";

import Link from "next/link";
import * as React from "react";

import { HoverCardMotion } from "@/components/ui/motion/hover-card";

export function AnimatedProductLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={
        className ??
        "block focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-zinc-600/60 dark:focus-visible:ring-offset-black"
      }
    >
      <HoverCardMotion className="flex justify-center sm:justify-start">
        {children}
      </HoverCardMotion>
    </Link>
  );
}

"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import { HoverCardMotion } from "@/components/ui/motion/hover-card";

export function AnimatedProductLink({
  href,
  children,
  className,
  ariaLabel,
  disableMotion = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  disableMotion?: boolean;
}) {
  const content = disableMotion ? (
    <div className="flex justify-center sm:justify-start">{children}</div>
  ) : (
    <HoverCardMotion className="flex justify-center sm:justify-start">
      {children}
    </HoverCardMotion>
  );

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "block rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-zinc-600/60 dark:focus-visible:ring-offset-black",
        // Ensure hover motion doesn't get clipped and looks clean
        "overflow-visible",
        className,
      )}
    >
      {content}
    </Link>
  );
}

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Container } from "@/components/shell/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/75 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-black/40">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className={cn(
              "group inline-flex items-center gap-2 rounded-full px-1.5 py-1 text-sm font-semibold tracking-tight",
              "text-zinc-950 dark:text-zinc-50"
            )}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950">
              W
            </span>
            <span className="hidden sm:inline">Wercom</span>
            <Badge className="hidden sm:inline-flex" variant="outline">
              Roblox
            </Badge>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/explore"
              className="rounded-full px-4 py-2 text-sm text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Explore
            </Link>
            <Link
              href="/credits"
              className="rounded-full px-4 py-2 text-sm text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Credits
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white px-3 py-1.5 text-sm text-zinc-600 shadow-sm shadow-zinc-950/5 dark:border-zinc-800/70 dark:bg-zinc-950 dark:text-zinc-300 dark:shadow-black/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>2,450 Credits</span>
          </div>
          <Button asChild variant="secondary">
            <Link href="/login">Sign in</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}

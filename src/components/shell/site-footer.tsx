import Link from "next/link";

import { Container } from "@/components/shell/container";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-zinc-200/70 dark:border-zinc-800/70">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Wercom
            </div>
            <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
              A sleek marketplace template for Roblox creators—train models, tracks,
              signals, and everything in between.
            </p>
          </div>
          <div className="grid gap-6 md:col-span-7 md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                Marketplace
              </div>
              <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link className="hover:text-zinc-950 dark:hover:text-zinc-50" href="/explore">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-950 dark:hover:text-zinc-50" href="/credits">
                    Credits
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                Account
              </div>
              <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link className="hover:text-zinc-950 dark:hover:text-zinc-50" href="/login">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-950 dark:hover:text-zinc-50" href="/profile/railworks">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                Legal
              </div>
              <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link className="hover:text-zinc-950 dark:hover:text-zinc-50" href="#">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-950 dark:hover:text-zinc-50" href="#">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Wercom. Template only.</p>
          <p>Not affiliated with Roblox or Discord.</p>
        </div>
      </Container>
    </footer>
  );
}

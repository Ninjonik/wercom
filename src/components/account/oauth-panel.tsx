"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function OAuthPanel() {
  return (
    <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
      <div className="text-sm font-semibold tracking-tight">Sign in</div>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        OAuth2-only. No passwords.
      </p>

      <div className="mt-6 grid gap-3">
        <Button asChild size="lg">
          <Link href="/dashboard">Continue with Discord</Link>
        </Button>

        <Button size="lg" variant="outline" disabled aria-disabled="true">
          Continue with Roblox (Coming soon)
        </Button>
      </div>

      <Separator className="my-6" />

      <p className="text-xs text-zinc-600 dark:text-zinc-400">
        By continuing, you agree to our Terms and acknowledge our Privacy Policy.
      </p>
    </Card>
  );
}

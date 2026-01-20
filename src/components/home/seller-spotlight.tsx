import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type SellerSpotlightItem = {
  handle: string;
  displayName: string;
  level: number;
  xpProgress: number; // 0..1
  specialties: string[];
  verified: boolean;
  stats: {
    totalSales: number;
    avgRating: number;
  };
};

const defaultSellers: SellerSpotlightItem[] = [
  {
    handle: "railworks",
    displayName: "Railworks Studio",
    level: 18,
    xpProgress: 0.64,
    specialties: ["Trains", "PBR", "LOD"],
    verified: true,
    stats: { totalSales: 642, avgRating: 4.9 },
  },
  {
    handle: "signalcraft",
    displayName: "Signalcraft",
    level: 11,
    xpProgress: 0.31,
    specialties: ["Signals", "Scripting", "Modular"],
    verified: true,
    stats: { totalSales: 281, avgRating: 4.7 },
  },
  {
    handle: "tracklab",
    displayName: "Tracklab",
    level: 9,
    xpProgress: 0.82,
    specialties: ["Tracks", "Switches", "Spline"],
    verified: false,
    stats: { totalSales: 118, avgRating: 4.6 },
  },
];

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function SellerSpotlight({
  className,
  sellers = defaultSellers,
}: {
  className?: string;
  sellers?: SellerSpotlightItem[];
}) {
  return (
    <section className={cn("py-10 sm:py-14", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Featured sellers
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Levels, XP, and badges—mocked, but wired like real data.
            </p>
          </div>
          <Button asChild variant="ghost">
            <Link href="/leaderboard">Leaderboard</Link>
          </Button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {sellers.map((s) => {
            const pct = Math.round(clamp01(s.xpProgress) * 100);

            return (
              <Card
                key={s.handle}
                className="relative overflow-hidden rounded-3xl border-zinc-200/70 bg-white/70 p-5 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40"
              >
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br from-indigo-400/20 to-fuchsia-400/20 blur-2xl" />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                      {s.displayName}
                    </div>
                    <div className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">
                      @{s.handle}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    <Badge variant="secondary" className="rounded-full">
                      Lv. {s.level}
                    </Badge>
                    {s.verified ? (
                      <Badge className="rounded-full">Verified</Badge>
                    ) : (
                      <Badge variant="outline" className="rounded-full">
                        Pending
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                    <span>XP to next level</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-200/70 dark:bg-zinc-800/70">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                      style={{ width: `${pct}%` }}
                      aria-hidden
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.specialties.map((t) => (
                    <Badge key={t} variant="outline" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    {s.stats.totalSales.toLocaleString()} sales • {s.stats.avgRating}
                    /5
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/profile/${s.handle}`}>View store</Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Metric = {
  label: string;
  value: string;
  hint: string;
  badge?: string;
};

const defaultMetrics: Metric[] = [
  {
    label: "Items shipped",
    value: "12,480+",
    hint: "Mock deliveries completed",
    badge: "v0",
  },
  {
    label: "Avg. delivery",
    value: "< 24h",
    hint: "Creator-to-buyer handoff",
  },
  {
    label: "Creator payout",
    value: "Weekly",
    hint: "Withdrawals handled by admins",
  },
  {
    label: "Support SLA",
    value: "2 hours",
    hint: "Response-time target",
  },
];

export function MarketplaceMetrics({
  className,
  metrics = defaultMetrics,
}: {
  className?: string;
  metrics?: Metric[];
}) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {metrics.map((m) => (
        <Card
          key={m.label}
          className="relative overflow-hidden rounded-3xl border-zinc-200/70 bg-white/70 p-5 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40"
        >
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-400/15 to-fuchsia-400/15 blur-2xl" />
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              {m.label}
            </div>
            {m.badge ? (
              <Badge variant="secondary" className="rounded-full">
                {m.badge}
              </Badge>
            ) : null}
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {m.value}
          </div>
          <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            {m.hint}
          </div>
        </Card>
      ))}
    </div>
  );
}

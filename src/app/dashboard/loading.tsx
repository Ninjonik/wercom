import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader title="Dashboard" description="Loading…" />

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur lg:col-span-4 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="mt-3 h-10 w-32" />
            <Skeleton className="mt-4 h-4 w-3/4" />
            <div className="mt-4 flex gap-2">
              <Skeleton className="h-8 w-24 rounded-xl" />
              <Skeleton className="h-8 w-20 rounded-xl" />
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur lg:col-span-8 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="mt-2 h-4 w-48" />
            <div className="mt-4 grid gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} className="rounded-2xl border border-zinc-200/70 bg-white/60 px-4 py-3 dark:border-zinc-800/70 dark:bg-zinc-950/40">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="mt-2 h-3 w-32" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLoading() {
  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader title="Administration" description="Loading…" />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="mt-3 h-10 w-20" />
              <Skeleton className="mt-2 h-4 w-40" />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <TableSkeleton rows={6} cols={4} />
        </div>
      </Container>
    </main>
  );
}

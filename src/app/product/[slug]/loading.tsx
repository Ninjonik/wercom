import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader title="Loading…" description="Fetching product details" />

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur lg:col-span-7 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <Skeleton className="aspect-[16/9] w-full rounded-2xl" />
            <div className="mt-4 flex flex-wrap gap-2">
              <Skeleton className="h-7 w-20 rounded-full" />
              <Skeleton className="h-7 w-24 rounded-full" />
              <Skeleton className="h-7 w-16 rounded-full" />
            </div>
            <div className="mt-6 space-y-2">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur lg:col-span-5 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="mt-3 h-10 w-40" />
            <div className="mt-5 grid gap-2">
              <Skeleton className="h-11 w-full rounded-2xl" />
              <Skeleton className="h-11 w-full rounded-2xl" />
            </div>
            <div className="mt-6 space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

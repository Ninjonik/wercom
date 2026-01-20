import { Skeleton } from "@/components/ui/skeleton";

export function ProductGridSkeleton({
  count = 6,
}: {
  count?: number;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          className="rounded-3xl border border-zinc-200/70 bg-white/70 p-4 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40"
        >
          <Skeleton className="h-[220px] w-full rounded-2xl" />
          <div className="mt-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <div className="pt-2">
              <Skeleton className="h-8 w-full rounded-xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton({
  rows = 6,
  cols = 5,
}: {
  rows?: number;
  cols?: number;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/70 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
      <div className="border-b border-zinc-200/70 px-4 py-3 dark:border-zinc-800/70">
        <Skeleton className="h-4 w-32" />
      </div>
      <div className="p-4">
        <div className="grid gap-3">
          {Array.from({ length: rows }).map((_, r) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={r} className="grid grid-cols-12 items-center gap-3">
              {Array.from({ length: cols }).map((__, c) => (
                // eslint-disable-next-line react/no-array-index-key
                <Skeleton
                  key={c}
                  className={
                    c === cols - 1
                      ? "col-span-2 h-8 rounded-xl justify-self-end"
                      : "col-span-2 h-4"
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

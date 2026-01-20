import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { ProductGridSkeleton } from "@/components/skeletons/product-grid-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ExploreLoading() {
  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader
          title="Explore"
          description="Loading listings…"
        />

        <div className="mt-8 grid gap-6">
          <div className="grid gap-3 lg:grid-cols-12">
            <Skeleton className="h-11 rounded-2xl lg:col-span-6" />
            <Skeleton className="h-11 rounded-2xl lg:col-span-3" />
            <Skeleton className="h-11 rounded-2xl lg:col-span-3" />
          </div>
          <ProductGridSkeleton count={6} />
        </div>
      </Container>
    </main>
  );
}

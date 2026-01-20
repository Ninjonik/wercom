import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import ExploreClient from "@/components/marketplace/explore-page-client";
import { ProductGridSkeleton } from "@/components/skeletons/product-grid-skeleton";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Explore",
};

export default function ExplorePage() {
  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader
          title="Explore"
          description="Discover, recommended, and trending items — mock data only."
        />

        <div className="mt-8">
          <Suspense fallback={<ProductGridSkeleton count={6} />}>
            <ExploreClient />
          </Suspense>
        </div>
      </Container>
    </main>
  );
}

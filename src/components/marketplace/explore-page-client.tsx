"use client";

import * as React from "react";

import { ExploreFilters, useExploreFiltering, type ExploreFiltersValue } from "@/components/marketplace/explore-filters";
import { ProductGrid } from "@/components/marketplace/product-grid";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/motion/fade-in";
import { mockProducts } from "@/lib/mock-data";

const defaultFilters: ExploreFiltersValue = {
  q: "",
  category: "all",
  sort: "recommended",
};

export default function ExploreClient() {
  const [filters, setFilters] = React.useState<ExploreFiltersValue>(defaultFilters);

  const products = useExploreFiltering(mockProducts, filters);

  return (
    <FadeIn className="grid gap-6" y={8}>
      <ExploreFilters value={filters} onChange={setFilters} />

      <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-4 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Showing{" "}
            <span className="font-medium text-zinc-950 dark:text-zinc-50">
              {products.length}
            </span>{" "}
            items
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.category !== "all" ? (
              <Badge variant="secondary" className="rounded-full">
                {filters.category}
              </Badge>
            ) : null}
            {filters.q ? (
              <Badge variant="outline" className="rounded-full">
                "{filters.q}"
              </Badge>
            ) : null}
          </div>
        </div>
      </Card>

      <FadeIn delay={0.04} y={10}>
        <ProductGrid products={products} />
      </FadeIn>
    </FadeIn>
  );
}

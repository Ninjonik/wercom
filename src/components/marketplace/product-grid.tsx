import ProductCard03 from "@/components/commerce-ui/product-card-03";
import { AnimatedProductLink } from "@/components/marketplace/animated-product-link";
import type { Product } from "@/lib/types";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-zinc-300/70 p-10 text-center text-sm text-zinc-600 dark:border-zinc-800/70 dark:text-zinc-400">
        No items match your filters.
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <AnimatedProductLink key={p.id} href={`/product/${p.slug}`}>
          <ProductCard03
            tagText={p.originalPriceCredits ? "SALE" : "POPULAR"}
            productName={p.name}
            rating={p.rating}
            reviewCount={p.reviewCount}
            currencyPrefix=""
            originalPrice={p.originalPriceCredits ?? p.priceCredits}
            salePrice={p.priceCredits}
            freeShipping={false}
            imageUrl={p.imageUrl}
          />
        </AnimatedProductLink>
      ))}
    </div>
  );
}

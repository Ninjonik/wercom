import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug, getSellerByHandle } from "@/lib/mock-data";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const seller = getSellerByHandle(product.sellerHandle);

  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader
          title={product.name}
          description={product.description}
          right={
            <Button asChild variant="outline">
              <Link href="/explore">Back to explore</Link>
            </Button>
          }
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur lg:col-span-7 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200/70 bg-zinc-50 dark:border-zinc-800/70 dark:bg-zinc-950">
              {/* Using simple img on purpose for mock URLs */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <Badge key={t} variant="outline" className="rounded-full">
                  {t}
                </Badge>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="grid gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <div>
                <span className="font-medium text-zinc-950 dark:text-zinc-50">
                  Category:
                </span>{" "}
                {product.category}
              </div>
              <div>
                <span className="font-medium text-zinc-950 dark:text-zinc-50">
                  Rating:
                </span>{" "}
                {product.rating} ({product.reviewCount} reviews)
              </div>
              <div>
                <span className="font-medium text-zinc-950 dark:text-zinc-50">
                  Delivery:
                </span>{" "}
                Pending → Delivered (mock)
              </div>
            </div>
          </Card>

          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur lg:col-span-5 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="text-sm font-semibold">Price</div>
            <div className="mt-2 text-3xl font-semibold tracking-tight">
              {product.priceCredits.toLocaleString()} Credits
            </div>
            {product.originalPriceCredits ? (
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Original: {product.originalPriceCredits.toLocaleString()} Credits
              </div>
            ) : null}

            <div className="mt-5 grid gap-2">
              <Button size="lg">Buy now</Button>
              <Button size="lg" variant="outline">
                Add to cart
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="text-sm font-semibold">Seller</div>
            {seller ? (
              <div className="mt-2">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium">{seller.displayName}</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">
                      @{seller.handle} • Lv. {seller.level}
                    </div>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/profile/${seller.handle}`}>View</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Unknown seller
              </div>
            )}

            <div className="mt-4">
              <Button variant="ghost" className="px-0">
                Message seller (mock)
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}

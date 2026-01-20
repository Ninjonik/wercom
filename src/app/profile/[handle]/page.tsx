import { notFound } from "next/navigation";

import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProductGrid } from "@/components/marketplace/product-grid";
import { getProductsBySellerHandle, getSellerByHandle } from "@/lib/mock-data";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;

  const seller = getSellerByHandle(handle);
  if (!seller) notFound();

  const products = getProductsBySellerHandle(handle).filter(
    (p) => p.status === "published",
  );

  const pct = Math.round((seller.xp / seller.xpToNextLevel) * 100);

  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader
          title={seller.displayName}
          description={`@${seller.handle} • ${seller.stats.totalSales.toLocaleString()} sales • ${seller.stats.avgRating}/5`}
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur lg:col-span-4 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="flex items-start gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage src={seller.avatarUrl} alt={seller.displayName} />
                <AvatarFallback>{seller.displayName.slice(0, 1)}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-semibold">
                    {seller.displayName}
                  </div>
                  <Badge className="rounded-full">Lv. {seller.level}</Badge>
                  {seller.verified ? (
                    <Badge variant="secondary" className="rounded-full">
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="rounded-full">
                      Pending
                    </Badge>
                  )}
                </div>
                <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  @{seller.handle}
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              {seller.bio}
            </p>

            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                <span>XP to next level</span>
                <span>{pct}%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-200/70 dark:bg-zinc-800/70">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                  style={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {seller.specialties.map((t) => (
                <Badge key={t} variant="outline" className="rounded-full">
                  {t}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur lg:col-span-8 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="text-sm font-semibold">Listings</div>
            <div className="mt-4">
              <ProductGrid products={products} />
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}

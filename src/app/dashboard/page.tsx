import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockOrders, mockSession } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  const recentOrders = mockOrders.slice(0, 5);

  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader
          title="Dashboard"
          description={`Signed in as ${mockSession.displayName} • ${mockSession.creditsBalance.toLocaleString()} Credits`}
          right={
            <Button asChild>
              <Link href="/explore">Find items</Link>
            </Button>
          }
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur lg:col-span-4 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="text-sm font-semibold">Credits</div>
            <div className="mt-2 text-3xl font-semibold tracking-tight">
              {mockSession.creditsBalance.toLocaleString()}
            </div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Purchased via Roblox dev products (external).
            </p>
            <div className="mt-4 flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/credits">Top up</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/explore">Spend</Link>
              </Button>
            </div>
          </Card>

          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur lg:col-span-8 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold">Recent orders</div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Delivery is manual (mock timeline).
                </p>
              </div>
              <Button asChild variant="ghost">
                <Link href="#">View all</Link>
              </Button>
            </div>

            <div className="mt-4 grid gap-3">
              {recentOrders.map((o) => (
                <div
                  key={o.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-200/70 bg-white/60 px-4 py-3 text-sm dark:border-zinc-800/70 dark:bg-zinc-950/40"
                >
                  <div>
                    <div className="font-medium">{o.orderNumber}</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">
                      Total: {o.totalCredits} credits
                    </div>
                  </div>
                  <Badge
                    className="rounded-full"
                    variant={o.status === "delivered" ? "secondary" : "outline"}
                  >
                    {o.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="text-sm font-semibold">Seller tools</div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Available only after verification.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild size="sm" variant="outline">
                <Link href="/items">Manage items</Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/items/new">Add product</Link>
              </Button>
            </div>
          </Card>

          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="text-sm font-semibold">Admin</div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Mock admin panel for approvals and withdrawals.
            </p>
            <div className="mt-4">
              <Button asChild size="sm" variant="outline">
                <Link href="/admin">Open admin</Link>
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}

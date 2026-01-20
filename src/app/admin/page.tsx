import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockProducts, mockSellers, mockSession } from "@/lib/mock-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
};

export default function AdminPage() {
  const pendingSellers = mockSellers.filter((s) => !s.verified);
  const draftProducts = mockProducts.filter((p) => p.status === "draft");

  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader
          title="Administration"
          description={`Mock admin panel • session role: ${mockSession.role}`}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="text-sm font-semibold">Pending sellers</div>
            <div className="mt-2 text-3xl font-semibold tracking-tight">
              {pendingSellers.length}
            </div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Approve sellers before listing withdrawals.
            </p>
          </Card>
          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="text-sm font-semibold">Draft products</div>
            <div className="mt-2 text-3xl font-semibold tracking-tight">
              {draftProducts.length}
            </div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Review drafts before publishing.
            </p>
          </Card>
          <Card className="rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
            <div className="text-sm font-semibold">Withdrawals</div>
            <div className="mt-2 text-3xl font-semibold tracking-tight">0</div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Placeholder for Robux withdrawal requests.
            </p>
          </Card>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/70 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Seller</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Sales</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSellers.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">{s.displayName}</TableCell>
                  <TableCell>
                    <Badge
                      className="rounded-full"
                      variant={s.verified ? "secondary" : "outline"}
                    >
                      {s.verified ? "verified" : "pending"}
                    </Badge>
                  </TableCell>
                  <TableCell>Lv. {s.level}</TableCell>
                  <TableCell>{s.stats.totalSales.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </main>
  );
}

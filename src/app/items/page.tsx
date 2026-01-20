import Link from "next/link";

import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockProducts, mockSession } from "@/lib/mock-data";

export const metadata = {
  title: "Manage items",
};

export default function SellerItemsPage() {
  const myHandle = mockSession.sellerHandle ?? "railworks";
  const items = mockProducts.filter((p) => p.sellerHandle === myHandle);

  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader
          title="Manage items"
          description="Create, edit, publish. Mock-only UI."
          right={
            <Button asChild>
              <Link href="/items/new">Add product</Link>
            </Button>
          }
        />

        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/70 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant={p.status === "published" ? "secondary" : "outline"}
                      className="rounded-full"
                    >
                      {p.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{p.priceCredits.toLocaleString()} credits</TableCell>
                  <TableCell className="text-zinc-600 dark:text-zinc-400">
                    {p.category}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/items/${p.id}/edit`}>Edit</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </main>
  );
}

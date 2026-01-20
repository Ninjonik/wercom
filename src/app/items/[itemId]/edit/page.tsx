import { notFound } from "next/navigation";

import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { Card } from "@/components/ui/card";
import { ItemForm } from "@/components/seller/item-form";
import { getProductById } from "@/lib/mock-data";

export const metadata = {
  title: "Edit product",
};

export default async function EditItemPage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const { itemId } = await params;

  const product = getProductById(itemId);
  if (!product) notFound();

  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader
          title="Edit product"
          description={`Editing: ${product.name}`}
        />

        <Card className="mt-8 rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
          <ItemForm product={product} submitLabel="Save" />
        </Card>
      </Container>
    </main>
  );
}
